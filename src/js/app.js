/**
 * YouTube Thumbnail Generator - Main Application
 * Aplicação principal para geração de thumbnails usando Pollinations AI
 */

class ThumbnailGenerator {
  constructor() {
    this.apiClient = new PollinationsAPI();
    this.batchProcessor = new BatchProcessor(this.apiClient);
    this.uiManager = new UIManager();
    this.storageManager = new StorageManager();
    
    this.init();
  }

  /**
   * Inicializa a aplicação
   */
  init() {
    this.bindEvents();
    this.loadSettings();
    this.updateUI();
    
    console.log('YouTube Thumbnail Generator initialized');
  }

  /**
   * Vincula eventos da interface
   */
  bindEvents() {
    // Single prompt generation
    document.getElementById('generate-single')?.addEventListener('click', 
      () => this.handleSingleGeneration());
    
    // Batch processing
    document.getElementById('start-batch')?.addEventListener('click', 
      () => this.handleBatchProcessing());
    
    // File upload
    document.getElementById('file-input')?.addEventListener('change', 
      (e) => this.handleFileUpload(e));
    
    // Settings
    document.getElementById('save-settings')?.addEventListener('click', 
      () => this.saveSettings());
  }

  /**
   * Gera uma única imagem
   */
  async handleSingleGeneration() {
    const prompt = document.getElementById('single-prompt')?.value;
    
    if (!prompt) {
      this.uiManager.showError('Por favor, insira um prompt');
      return;
    }

    try {
      this.uiManager.showLoading('Gerando imagem...');
      
      // Get current settings
      const settings = this.getCurrentSettings();
      
      const imageUrl = await this.apiClient.generateImage(prompt, {
        model: settings.model,
        seed: Date.now() // Force new generation each time
      });
      
      this.uiManager.showResult(imageUrl, prompt);
      
      // Save to history
      this.storageManager.addToHistory(prompt, imageUrl);
      
    } catch (error) {
      this.uiManager.showError(`Erro ao gerar imagem: ${error.message}`);
    } finally {
      this.uiManager.hideLoading();
    }
  }

  /**
   * Processa lote de prompts
   */
  async handleBatchProcessing() {
    const prompts = this.getPromptsFromInput();
    
    if (prompts.length === 0) {
      this.uiManager.showError('Nenhum prompt encontrado');
      return;
    }

    if (prompts.length > 100) {
      this.uiManager.showError('Máximo de 100 prompts por lote');
      return;
    }

    try {
      this.uiManager.showBatchProgress(0, prompts.length);
      
      // Get current settings for batch processing
      const settings = this.getCurrentSettings();
      
      const results = await this.batchProcessor.processPrompts(prompts, {
        onProgress: (current, total) => {
          this.uiManager.updateBatchProgress(current, total);
        },
        model: settings.model,
        delay: settings.delay
      });

      this.uiManager.showBatchResults(results);
      this.storageManager.saveBatchResults(results);
      
    } catch (error) {
      this.uiManager.showError(`Erro no processamento em lote: ${error.message}`);
    }
  }

  /**
   * Processa upload de arquivo
   */
  handleFileUpload(event) {
    const file = event.target.files[0];
    
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const prompts = this.parsePromptsFromFile(content, file.name);
      this.displayPrompts(prompts);
    };
    
    reader.readAsText(file);
  }

  /**
   * Extrai prompts do conteúdo do arquivo
   */
  parsePromptsFromFile(content, filename) {
    const extension = filename.split('.').pop().toLowerCase();
    
    if (extension === 'csv') {
      return content.split('\n')
        .map(line => line.split(',')[0])
        .filter(prompt => prompt.trim());
    }
    
    // Default: treat as text file
    return content.split('\n')
      .filter(line => line.trim());
  }

  /**
   * Obtém prompts da interface
   */
  getPromptsFromInput() {
    const textarea = document.getElementById('batch-prompts');
    if (!textarea) return [];
    
    return textarea.value
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  }

  /**
   * Exibe prompts na interface
   */
  displayPrompts(prompts) {
    const textarea = document.getElementById('batch-prompts');
    if (textarea) {
      textarea.value = prompts.join('\n');
    }
    
    this.uiManager.showInfo(`${prompts.length} prompts carregados`);
  }

  /**
   * Carrega configurações salvas
   */
  loadSettings() {
    const settings = this.storageManager.getSettings();
    
    // Apply settings to UI
    if (settings.model) {
      const modelSelect = document.getElementById('model-select');
      if (modelSelect) modelSelect.value = settings.model;
    }
    
    if (settings.delay) {
      const delayInput = document.getElementById('delay-input');
      if (delayInput) delayInput.value = settings.delay;
    }
  }

  /**
   * Salva configurações
   */
  saveSettings() {
    const settings = {
      model: document.getElementById('model-select')?.value || 'flux',
      delay: parseInt(document.getElementById('delay-input')?.value) || 1000,
      quality: document.getElementById('quality-select')?.value || 'high'
    };
    
    this.storageManager.saveSettings(settings);
    this.uiManager.showSuccess('Configurações salvas');
  }

  /**
   * Obtém configurações atuais da interface
   */
  getCurrentSettings() {
    return {
      model: document.getElementById('model-select')?.value || 'flux',
      delay: parseInt(document.getElementById('delay-input')?.value) || 1000,
      quality: document.getElementById('quality-select')?.value || 'high'
    };
  }

  /**
   * Atualiza interface
   */
  updateUI() {
    const history = this.storageManager.getHistory();
    this.uiManager.updateHistoryDisplay(history);
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.thumbnailGenerator = new ThumbnailGenerator();
});