/**
 * Utility Functions
 * Funções utilitárias para o gerador de thumbnails
 */

/**
 * Storage Manager
 * Gerenciamento de dados no LocalStorage
 */
class StorageManager {
  constructor() {
    this.keys = {
      SETTINGS: 'thumbnail_generator_settings',
      HISTORY: 'thumbnail_generator_history',
      BATCH_RESULTS: 'thumbnail_generator_batch_results'
    };
  }

  /**
   * Salva configurações
   * @param {Object} settings - Configurações para salvar
   */
  saveSettings(settings) {
    try {
      localStorage.setItem(this.keys.SETTINGS, JSON.stringify(settings));
    } catch (error) {
      console.error('Erro ao salvar configurações:', error);
    }
  }

  /**
   * Carrega configurações
   * @returns {Object} Configurações salvas
   */
  getSettings() {
    try {
      const settings = localStorage.getItem(this.keys.SETTINGS);
      return settings ? JSON.parse(settings) : this.getDefaultSettings();
    } catch (error) {
      console.error('Erro ao carregar configurações:', error);
      return this.getDefaultSettings();
    }
  }

  /**
   * Configurações padrão
   * @returns {Object} Configurações padrão
   */
  getDefaultSettings() {
    return {
      model: 'flux',
      delay: 1000,
      quality: 'high',
      timeout: 30000,
      maxRetries: 3
    };
  }

  /**
   * Adiciona item ao histórico
   * @param {string} prompt - Prompt usado
   * @param {string} imageUrl - URL da imagem gerada
   */
  addToHistory(prompt, imageUrl) {
    try {
      const history = this.getHistory();
      const newItem = {
        prompt,
        imageUrl,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };

      history.push(newItem);

      // Manter apenas os últimos 100 itens
      if (history.length > 100) {
        history.splice(0, history.length - 100);
      }

      localStorage.setItem(this.keys.HISTORY, JSON.stringify(history));
    } catch (error) {
      console.error('Erro ao salvar no histórico:', error);
    }
  }

  /**
   * Obtém histórico
   * @returns {Array<Object>} Histórico de gerações
   */
  getHistory() {
    try {
      const history = localStorage.getItem(this.keys.HISTORY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Erro ao carregar histórico:', error);
      return [];
    }
  }

  /**
   * Limpa histórico
   */
  clearHistory() {
    try {
      localStorage.removeItem(this.keys.HISTORY);
    } catch (error) {
      console.error('Erro ao limpar histórico:', error);
    }
  }

  /**
   * Salva resultados de lote
   * @param {Array<Object>} results - Resultados do processamento
   */
  saveBatchResults(results) {
    try {
      const batchData = {
        results,
        timestamp: new Date().toISOString(),
        summary: {
          total: results.length,
          successful: results.filter(r => r.success).length,
          failed: results.filter(r => !r.success).length
        }
      };

      localStorage.setItem(this.keys.BATCH_RESULTS, JSON.stringify(batchData));
    } catch (error) {
      console.error('Erro ao salvar resultados do lote:', error);
    }
  }

  /**
   * Obtém último resultado de lote
   * @returns {Object|null} Último resultado de lote
   */
  getLastBatchResults() {
    try {
      const data = localStorage.getItem(this.keys.BATCH_RESULTS);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Erro ao carregar resultados do lote:', error);
      return null;
    }
  }
}

/**
 * File Utilities
 * Utilitários para manipulação de arquivos
 */
class FileUtils {
  /**
   * Lê arquivo como texto
   * @param {File} file - Arquivo para ler
   * @returns {Promise<string>} Conteúdo do arquivo
   */
  static readFileAsText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(new Error('Erro ao ler arquivo'));
      
      reader.readAsText(file);
    });
  }

  /**
   * Valida arquivo de prompts
   * @param {File} file - Arquivo para validar
   * @returns {Object} Resultado da validação
   */
  static validatePromptsFile(file) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['text/plain', 'text/csv', 'application/csv'];
    const allowedExtensions = ['.txt', '.csv'];

    if (file.size > maxSize) {
      return { valid: false, error: 'Arquivo muito grande (máximo 10MB)' };
    }

    const extension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      return { valid: false, error: 'Tipo de arquivo não suportado (.txt ou .csv apenas)' };
    }

    return { valid: true };
  }

  /**
   * Parseia prompts de arquivo CSV
   * @param {string} content - Conteúdo do arquivo
   * @returns {Array<string>} Lista de prompts
   */
  static parseCSV(content) {
    const lines = content.split('\n');
    const prompts = [];

    for (let line of lines) {
      line = line.trim();
      if (line) {
        // Assume que o prompt está na primeira coluna
        const columns = line.split(',');
        const prompt = columns[0].replace(/^"(.*)"$/, '$1').trim();
        if (prompt) {
          prompts.push(prompt);
        }
      }
    }

    return prompts;
  }

  /**
   * Parseia prompts de arquivo de texto
   * @param {string} content - Conteúdo do arquivo
   * @returns {Array<string>} Lista de prompts
   */
  static parseText(content) {
    return content
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  }

  /**
   * Cria e baixa arquivo
   * @param {string} content - Conteúdo do arquivo
   * @param {string} filename - Nome do arquivo
   * @param {string} mimeType - Tipo MIME
   */
  static downloadFile(content, filename, mimeType = 'text/plain') {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
  }
}

/**
 * Validation Utilities
 * Utilitários de validação
 */
class ValidationUtils {
  /**
   * Valida prompt
   * @param {string} prompt - Prompt para validar
   * @returns {Object} Resultado da validação
   */
  static validatePrompt(prompt) {
    if (!prompt || typeof prompt !== 'string') {
      return { valid: false, error: 'Prompt deve ser uma string' };
    }

    const trimmed = prompt.trim();

    if (trimmed.length === 0) {
      return { valid: false, error: 'Prompt não pode estar vazio' };
    }

    if (trimmed.length > 500) {
      return { valid: false, error: 'Prompt muito longo (máximo 500 caracteres)' };
    }

    // Check for potentially problematic content
    const blockedTerms = ['nsfw', 'explicit', 'violence', 'gore'];
    const lowerPrompt = trimmed.toLowerCase();
    
    for (let term of blockedTerms) {
      if (lowerPrompt.includes(term)) {
        return { valid: false, error: 'Prompt contém conteúdo não permitido' };
      }
    }

    return { valid: true };
  }

  /**
   * Valida lista de prompts
   * @param {Array<string>} prompts - Lista de prompts
   * @returns {Object} Resultado da validação
   */
  static validatePromptsList(prompts) {
    if (!Array.isArray(prompts)) {
      return { valid: false, error: 'Lista de prompts deve ser um array' };
    }

    if (prompts.length === 0) {
      return { valid: false, error: 'Lista de prompts está vazia' };
    }

    if (prompts.length > 100) {
      return { valid: false, error: 'Máximo de 100 prompts por lote' };
    }

    const invalidPrompts = [];
    prompts.forEach((prompt, index) => {
      const validation = this.validatePrompt(prompt);
      if (!validation.valid) {
        invalidPrompts.push({ index, error: validation.error });
      }
    });

    if (invalidPrompts.length > 0) {
      return { 
        valid: false, 
        error: `${invalidPrompts.length} prompts inválidos encontrados`,
        details: invalidPrompts
      };
    }

    return { valid: true };
  }
}

/**
 * Format Utilities
 * Utilitários de formatação
 */
class FormatUtils {
  /**
   * Formata tempo de processamento
   * @param {number} milliseconds - Tempo em millisegundos
   * @returns {string} Tempo formatado
   */
  static formatProcessingTime(milliseconds) {
    if (milliseconds < 1000) {
      return `${milliseconds}ms`;
    }
    
    const seconds = Math.floor(milliseconds / 1000);
    const ms = milliseconds % 1000;
    
    if (seconds < 60) {
      return `${seconds}.${Math.floor(ms / 100)}s`;
    }
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    return `${minutes}m ${remainingSeconds}s`;
  }

  /**
   * Formata tamanho de arquivo
   * @param {number} bytes - Tamanho em bytes
   * @returns {string} Tamanho formatado
   */
  static formatFileSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;
    
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    
    return `${size.toFixed(1)} ${units[unitIndex]}`;
  }

  /**
   * Formata data/hora
   * @param {string|Date} date - Data para formatar
   * @returns {string} Data formatada
   */
  static formatDateTime(date) {
    const d = new Date(date);
    return d.toLocaleString('pt-BR');
  }

  /**
   * Trunca texto
   * @param {string} text - Texto para truncar
   * @param {number} maxLength - Comprimento máximo
   * @returns {string} Texto truncado
   */
  static truncateText(text, maxLength = 50) {
    if (text.length <= maxLength) {
      return text;
    }
    
    return text.substring(0, maxLength - 3) + '...';
  }
}

// Export utilities for global use
window.StorageManager = StorageManager;
window.FileUtils = FileUtils;
window.ValidationUtils = ValidationUtils;
window.FormatUtils = FormatUtils;