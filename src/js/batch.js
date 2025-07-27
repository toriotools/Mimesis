/**
 * Batch Processor
 * Processamento em lote de prompts para geração de imagens
 */

class BatchProcessor {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.isProcessing = false;
    this.shouldStop = false;
    this.currentBatch = null;
    this.results = [];
  }

  /**
   * Processa uma lista de prompts em lote
   * @param {Array<string>} prompts - Lista de prompts
   * @param {Object} options - Opções de processamento
   * @returns {Promise<Array<Object>>} Resultados do processamento
   */
  async processPrompts(prompts, options = {}) {
    if (this.isProcessing) {
      throw new Error('Processamento já em andamento');
    }

    const {
      onProgress = () => {},
      onSuccess = () => {},
      onError = () => {},
      delay = 1000,
      maxConcurrent = 1,
      model = 'flux'
    } = options;

    this.isProcessing = true;
    this.shouldStop = false;
    this.results = [];

    const validPrompts = prompts.filter(prompt => 
      this.apiClient.validatePrompt(prompt)
    );

    if (validPrompts.length === 0) {
      throw new Error('Nenhum prompt válido encontrado');
    }

    console.log(`Iniciando processamento de ${validPrompts.length} prompts`);

    try {
      for (let i = 0; i < validPrompts.length; i++) {
        if (this.shouldStop) {
          console.log('Processamento interrompido pelo usuário');
          break;
        }

        const prompt = validPrompts[i];
        const result = await this.processPrompt(prompt, i + 1, validPrompts.length, { model });
        
        this.results.push(result);
        
        // Callback de progresso
        onProgress(i + 1, validPrompts.length, result);
        
        if (result.success) {
          onSuccess(result);
        } else {
          onError(result);
        }

        // Delay entre requisições (exceto na última)
        if (i < validPrompts.length - 1) {
          await this.delay(delay);
        }
      }

      console.log(`Processamento concluído. ${this.getSuccessCount()}/${validPrompts.length} sucessos`);
      return this.results;

    } finally {
      this.isProcessing = false;
      this.shouldStop = false;
    }
  }

  /**
   * Processa um único prompt
   * @param {string} prompt - Prompt para processar
   * @param {number} current - Índice atual
   * @param {number} total - Total de prompts
   * @returns {Promise<Object>} Resultado do processamento
   */
  async processPrompt(prompt, current, total, options = {}) {
    const startTime = Date.now();
    
    try {
      console.log(`[${current}/${total}] Processando: ${prompt.substring(0, 50)}...`);
      
      const imageUrl = await this.apiClient.generateImage(prompt, {
        model: options.model || 'flux',
        seed: Date.now() + current // Unique seed for each generation
      });
      const processingTime = Date.now() - startTime;
      
      return {
        prompt,
        imageUrl,
        success: true,
        processingTime,
        timestamp: new Date().toISOString(),
        index: current - 1
      };
      
    } catch (error) {
      const processingTime = Date.now() - startTime;
      
      console.error(`[${current}/${total}] Erro:`, error.message);
      
      return {
        prompt,
        imageUrl: null,
        success: false,
        error: error.message,
        processingTime,
        timestamp: new Date().toISOString(),
        index: current - 1
      };
    }
  }

  /**
   * Para o processamento em andamento
   */
  stop() {
    if (this.isProcessing) {
      this.shouldStop = true;
      console.log('Solicitação de parada do processamento');
    }
  }

  /**
   * Retoma processamento pausado
   * @param {Array<string>} remainingPrompts - Prompts restantes
   * @param {Object} options - Opções de processamento
   */
  async resume(remainingPrompts, options = {}) {
    if (this.isProcessing) {
      throw new Error('Processamento já em andamento');
    }

    return this.processPrompts(remainingPrompts, options);
  }

  /**
   * Gera relatório do processamento
   * @returns {Object} Relatório detalhado
   */
  generateReport() {
    const total = this.results.length;
    const successful = this.getSuccessCount();
    const failed = total - successful;
    
    const avgProcessingTime = this.results.reduce((sum, result) => 
      sum + result.processingTime, 0) / total;

    const errors = this.results
      .filter(result => !result.success)
      .map(result => ({ prompt: result.prompt, error: result.error }));

    return {
      total,
      successful,
      failed,
      successRate: (successful / total * 100).toFixed(1),
      avgProcessingTime: Math.round(avgProcessingTime),
      errors,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Exporta resultados para download
   * @param {string} format - Formato de exportação ('json', 'csv')
   * @returns {string} Dados formatados
   */
  exportResults(format = 'json') {
    if (format === 'csv') {
      const headers = ['Index', 'Prompt', 'Success', 'Image URL', 'Error', 'Processing Time (ms)', 'Timestamp'];
      const rows = this.results.map(result => [
        result.index,
        `"${result.prompt.replace(/"/g, '""')}"`,
        result.success,
        result.imageUrl || '',
        result.error || '',
        result.processingTime,
        result.timestamp
      ]);
      
      return [headers, ...rows].map(row => row.join(',')).join('\n');
    }
    
    // Default: JSON
    return JSON.stringify({
      report: this.generateReport(),
      results: this.results
    }, null, 2);
  }

  /**
   * Cria arquivo ZIP com imagens geradas
   * @returns {Promise<Blob>} Arquivo ZIP
   */
  async createImageZip() {
    // This would require a ZIP library like JSZip
    // For now, return a simple implementation
    const successfulResults = this.results.filter(result => result.success);
    
    if (successfulResults.length === 0) {
      throw new Error('Nenhuma imagem foi gerada com sucesso');
    }

    // In a real implementation, you would:
    // 1. Download each image
    // 2. Add to ZIP file
    // 3. Return ZIP blob
    
    console.log(`Preparando ZIP com ${successfulResults.length} imagens`);
    
    // Placeholder - would need JSZip library
    return new Blob(['ZIP placeholder'], { type: 'application/zip' });
  }

  /**
   * Obtém contagem de sucessos
   * @returns {number} Número de sucessos
   */
  getSuccessCount() {
    return this.results.filter(result => result.success).length;
  }

  /**
   * Obtém contagem de falhas
   * @returns {number} Número de falhas
   */
  getFailureCount() {
    return this.results.filter(result => !result.success).length;
  }

  /**
   * Verifica se está processando
   * @returns {boolean} True se processando
   */
  isRunning() {
    return this.isProcessing;
  }

  /**
   * Obtém resultados atuais
   * @returns {Array<Object>} Resultados
   */
  getResults() {
    return [...this.results];
  }

  /**
   * Limpa resultados
   */
  clearResults() {
    if (this.isProcessing) {
      throw new Error('Não é possível limpar resultados durante processamento');
    }
    
    this.results = [];
  }

  /**
   * Delay helper
   * @param {number} ms - Milliseconds to wait
   * @returns {Promise<void>}
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}