/**
 * Pollinations AI API Client
 * Cliente para integração com a API da Pollinations AI
 */

class PollinationsAPI {
  constructor() {
    this.baseUrl = 'https://image.pollinations.ai/prompt';
    this.defaultOptions = {
      width: 1280,
      height: 720,
      model: 'flux',
      nologo: true
    };
    this.requestDelay = 1000; // 1 second between requests
    this.maxRetries = 3;
    this.timeout = 30000; // 30 seconds
  }

  /**
   * Gera uma imagem usando a API da Pollinations
   * @param {string} prompt - Prompt para geração da imagem
   * @param {Object} options - Opções adicionais
   * @returns {Promise<string>} URL da imagem gerada
   */
  async generateImage(prompt, options = {}) {
    const config = { ...this.defaultOptions, ...options };
    
    if (!prompt || prompt.trim().length === 0) {
      throw new Error('Prompt não pode estar vazio');
    }

    if (prompt.length > 500) {
      throw new Error('Prompt muito longo (máximo 500 caracteres)');
    }

    const url = this.buildUrl(prompt, config);
    
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        console.log(`Tentativa ${attempt}/${this.maxRetries} para: ${prompt.substring(0, 50)}...`);
        
        const imageUrl = await this.fetchImage(url);
        
        console.log(`Imagem gerada com sucesso: ${imageUrl}`);
        return imageUrl;
        
      } catch (error) {
        console.warn(`Tentativa ${attempt} falhou:`, error.message);
        
        if (attempt === this.maxRetries) {
          throw new Error(`Falha após ${this.maxRetries} tentativas: ${error.message}`);
        }
        
        // Wait before retry
        await this.delay(this.requestDelay * attempt);
      }
    }
  }

  /**
   * Constrói URL da API
   * @param {string} prompt - Prompt para a imagem
   * @param {Object} options - Opções da API
   * @returns {string} URL completa
   */
  buildUrl(prompt, options) {
    const encodedPrompt = encodeURIComponent(prompt.trim());
    const params = new URLSearchParams();
    
    Object.entries(options).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        params.append(key, value.toString());
      }
    });
    
    const queryString = params.toString();
    return `${this.baseUrl}/${encodedPrompt}${queryString ? '?' + queryString : ''}`;
  }

  /**
   * Faz requisição para a API
   * @param {string} url - URL da requisição
   * @returns {Promise<string>} URL da imagem
   */
  async fetchImage(url) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          'User-Agent': 'YouTube-Thumbnail-Generator/1.0'
        }
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      // The API redirects to the actual image URL
      return response.url;
      
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new Error('Timeout: Requisição demorou mais que 30 segundos');
      }
      
      if (error.message.includes('429')) {
        throw new Error('Rate limit atingido. Tente novamente em alguns segundos');
      }
      
      if (error.message.includes('500')) {
        throw new Error('Erro interno do servidor da API');
      }
      
      throw error;
    }
  }

  /**
   * Valida um prompt
   * @param {string} prompt - Prompt para validar
   * @returns {boolean} True se válido
   */
  validatePrompt(prompt) {
    if (!prompt || typeof prompt !== 'string') {
      return false;
    }
    
    const trimmed = prompt.trim();
    
    if (trimmed.length === 0 || trimmed.length > 500) {
      return false;
    }
    
    // Check for potentially problematic content
    const blockedTerms = ['nsfw', 'explicit', 'violence'];
    const lowerPrompt = trimmed.toLowerCase();
    
    return !blockedTerms.some(term => lowerPrompt.includes(term));
  }

  /**
   * Testa conexão com a API
   * @returns {Promise<boolean>} True se API está funcionando
   */
  async testConnection() {
    try {
      const testPrompt = 'simple blue circle';
      await this.generateImage(testPrompt);
      return true;
    } catch (error) {
      console.error('API connection test failed:', error);
      return false;
    }
  }

  /**
   * Delay helper
   * @param {number} ms - Milliseconds to wait
   * @returns {Promise<void>}
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Obtém modelos disponíveis
   * @returns {Array<Object>} Lista de modelos
   */
  getAvailableModels() {
    return [
      { id: 'flux', name: 'Flux (Padrão)', description: 'Modelo padrão com boa qualidade geral' },
      { id: 'flux-realism', name: 'Flux Realism', description: 'Focado em realismo fotográfico' },
      { id: 'flux-anime', name: 'Flux Anime', description: 'Estilo anime e manga' },
      { id: 'flux-3d', name: 'Flux 3D', description: 'Renderização 3D' },
      { id: 'turbo', name: 'Turbo', description: 'Geração mais rápida' }
    ];
  }

  /**
   * Configura delay entre requisições
   * @param {number} delay - Delay em milliseconds
   */
  setRequestDelay(delay) {
    this.requestDelay = Math.max(500, delay); // Minimum 500ms
  }

  /**
   * Configura timeout das requisições
   * @param {number} timeout - Timeout em milliseconds
   */
  setTimeout(timeout) {
    this.timeout = Math.max(5000, timeout); // Minimum 5 seconds
  }
}