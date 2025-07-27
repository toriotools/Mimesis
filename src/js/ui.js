/**
 * UI Manager
 * Gerenciamento da interface do usuário
 */

class UIManager {
  constructor() {
    this.elements = {};
    this.initializeElements();
  }

  /**
   * Inicializa referências dos elementos
   */
  initializeElements() {
    this.elements = {
      // Single generation
      singlePrompt: document.getElementById('single-prompt'),
      generateSingle: document.getElementById('generate-single'),
      singleResult: document.getElementById('single-result'),
      
      // Batch processing
      batchPrompts: document.getElementById('batch-prompts'),
      startBatch: document.getElementById('start-batch'),
      stopBatch: document.getElementById('stop-batch'),
      batchProgress: document.getElementById('batch-progress'),
      batchResults: document.getElementById('batch-results'),
      
      // File upload
      fileInput: document.getElementById('file-input'),
      fileInfo: document.getElementById('file-info'),
      
      // Settings
      modelSelect: document.getElementById('model-select'),
      delayInput: document.getElementById('delay-input'),
      qualitySelect: document.getElementById('quality-select'),
      
      // Status and notifications
      statusBar: document.getElementById('status-bar'),
      notifications: document.getElementById('notifications'),
      loadingOverlay: document.getElementById('loading-overlay'),
      
      // History
      historyList: document.getElementById('history-list'),
      clearHistory: document.getElementById('clear-history')
    };
  }

  /**
   * Mostra resultado de geração única
   * @param {string} imageUrl - URL da imagem
   * @param {string} prompt - Prompt usado
   */
  showResult(imageUrl, prompt) {
    if (!this.elements.singleResult) return;

    this.elements.singleResult.innerHTML = `
      <div class="result-item">
        <div class="result-header">
          <h3>Imagem Gerada</h3>
          <button class="download-btn" onclick="window.thumbnailGenerator.uiManager.downloadImage('${imageUrl}', '${window.thumbnailGenerator.uiManager.sanitizeFilename(prompt)}')"
            Download
          </button>
        </div>
        <div class="result-content">
          <img src="${imageUrl}" alt="${prompt}" class="generated-image" />
          <p class="prompt-text">${prompt}</p>
        </div>
      </div>
    `;

    this.elements.singleResult.style.display = 'block';
  }

  /**
   * Mostra progresso do processamento em lote
   * @param {number} current - Progresso atual
   * @param {number} total - Total de itens
   */
  showBatchProgress(current, total) {
    if (!this.elements.batchProgress) return;

    const percentage = (current / total) * 100;
    
    this.elements.batchProgress.innerHTML = `
      <div class="progress-container">
        <div class="progress-header">
          <span>Processando: ${current}/${total}</span>
          <span>${percentage.toFixed(1)}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
        <div class="progress-details">
          <small>Gerando thumbnails...</small>
        </div>
      </div>
    `;

    this.elements.batchProgress.style.display = 'block';
  }

  /**
   * Atualiza progresso do lote
   * @param {number} current - Progresso atual
   * @param {number} total - Total de itens
   * @param {Object} lastResult - Último resultado processado
   */
  updateBatchProgress(current, total, lastResult) {
    this.showBatchProgress(current, total);
    
    if (lastResult) {
      const detailsElement = document.querySelector('.progress-details small');
      if (detailsElement) {
        const status = lastResult.success ? '✓' : '✗';
        const prompt = lastResult.prompt.substring(0, 30) + '...';
        detailsElement.textContent = `${status} ${prompt}`;
      }
    }
  }

  /**
   * Mostra resultados do processamento em lote
   * @param {Array<Object>} results - Resultados do processamento
   */
  showBatchResults(results) {
    if (!this.elements.batchResults) return;

    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    let html = `
      <div class="batch-summary">
        <h3>Processamento Concluído</h3>
        <div class="summary-stats">
          <span class="stat success">${successful.length} sucessos</span>
          <span class="stat error">${failed.length} falhas</span>
          <span class="stat total">${results.length} total</span>
        </div>
        <div class="batch-actions">
          <button class="download-all-btn" onclick="this.downloadAllImages()">
            Download Todas (ZIP)
          </button>
          <button class="export-report-btn" onclick="this.exportReport()">
            Exportar Relatório
          </button>
        </div>
      </div>
    `;

    // Show successful results
    if (successful.length > 0) {
      html += '<div class="results-grid">';
      successful.forEach((result, index) => {
        html += `
          <div class="result-card">
            <img src="${result.imageUrl}" alt="${result.prompt}" class="thumbnail" />
            <div class="card-content">
              <p class="prompt-preview">${result.prompt.substring(0, 60)}...</p>
              <button class="download-single" onclick="window.thumbnailGenerator.uiManager.downloadImage('${result.imageUrl}', '${window.thumbnailGenerator.uiManager.sanitizeFilename(result.prompt)}')">
                Download
              </button>
            </div>
          </div>
        `;
      });
      html += '</div>';
    }

    // Show failed results
    if (failed.length > 0) {
      html += `
        <div class="failed-results">
          <h4>Falhas (${failed.length})</h4>
          <div class="failed-list">
      `;
      
      failed.forEach(result => {
        html += `
          <div class="failed-item">
            <span class="failed-prompt">${result.prompt}</span>
            <span class="failed-error">${result.error}</span>
          </div>
        `;
      });
      
      html += '</div></div>';
    }

    this.elements.batchResults.innerHTML = html;
    this.elements.batchResults.style.display = 'block';
    
    // Hide progress
    if (this.elements.batchProgress) {
      this.elements.batchProgress.style.display = 'none';
    }
  }

  /**
   * Mostra estado de carregamento
   * @param {string} message - Mensagem de carregamento
   */
  showLoading(message = 'Carregando...') {
    if (this.elements.loadingOverlay) {
      this.elements.loadingOverlay.innerHTML = `
        <div class="loading-content">
          <div class="spinner"></div>
          <p>${message}</p>
        </div>
      `;
      this.elements.loadingOverlay.style.display = 'flex';
    }
  }

  /**
   * Esconde estado de carregamento
   */
  hideLoading() {
    if (this.elements.loadingOverlay) {
      this.elements.loadingOverlay.style.display = 'none';
    }
  }

  /**
   * Mostra notificação de erro
   * @param {string} message - Mensagem de erro
   */
  showError(message) {
    this.showNotification(message, 'error');
  }

  /**
   * Mostra notificação de sucesso
   * @param {string} message - Mensagem de sucesso
   */
  showSuccess(message) {
    this.showNotification(message, 'success');
  }

  /**
   * Mostra notificação de informação
   * @param {string} message - Mensagem informativa
   */
  showInfo(message) {
    this.showNotification(message, 'info');
  }

  /**
   * Mostra notificação
   * @param {string} message - Mensagem
   * @param {string} type - Tipo (success, error, info)
   */
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span class="notification-message">${message}</span>
      <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;

    if (this.elements.notifications) {
      this.elements.notifications.appendChild(notification);
    } else {
      // Fallback to console
      console.log(`[${type.toUpperCase()}] ${message}`);
    }

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }

  /**
   * Atualiza exibição do histórico
   * @param {Array<Object>} history - Histórico de gerações
   */
  updateHistoryDisplay(history) {
    if (!this.elements.historyList) return;

    if (history.length === 0) {
      this.elements.historyList.innerHTML = '<p class="empty-history">Nenhum histórico encontrado</p>';
      return;
    }

    let html = '';
    history.slice(-10).reverse().forEach((item, index) => {
      html += `
        <div class="history-item">
          <img src="${item.imageUrl}" alt="${item.prompt}" class="history-thumbnail" />
          <div class="history-content">
            <p class="history-prompt">${item.prompt}</p>
            <small class="history-date">${new Date(item.timestamp).toLocaleString()}</small>
          </div>
          <button class="history-download" onclick="window.thumbnailGenerator.uiManager.downloadImage('${item.imageUrl}', '${window.thumbnailGenerator.uiManager.sanitizeFilename(item.prompt)}')">
            ↓
          </button>
        </div>
      `;
    });

    this.elements.historyList.innerHTML = html;
  }

  /**
   * Sanitiza nome de arquivo
   * @param {string} filename - Nome original
   * @returns {string} Nome sanitizado
   */
  sanitizeFilename(filename) {
    return filename
      .replace(/[^a-z0-9]/gi, '_')
      .replace(/_+/g, '_')
      .substring(0, 50);
  }

  /**
   * Download de imagem
   * @param {string} imageUrl - URL da imagem
   * @param {string} filename - Nome do arquivo
   */
  async downloadImage(imageUrl, filename) {
    try {
      this.showLoading('Preparando download...');
      
      // Fetch the image as blob
      const response = await fetch(imageUrl, {
        method: 'GET',
        headers: {
          'Accept': 'image/*'
        }
      });
      
      if (!response.ok) {
        throw new Error('Falha ao baixar imagem');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}_${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      window.URL.revokeObjectURL(url);
      
      this.showSuccess('Download concluído!');
    } catch (error) {
      this.showError('Erro no download: ' + error.message);
    } finally {
      this.hideLoading();
    }
  }

  /**
   * Atualiza status da aplicação
   * @param {string} status - Status atual
   */
  updateStatus(status) {
    if (this.elements.statusBar) {
      this.elements.statusBar.textContent = status;
    }
  }

  /**
   * Limpa resultados da interface
   */
  clearResults() {
    if (this.elements.singleResult) {
      this.elements.singleResult.style.display = 'none';
    }
    
    if (this.elements.batchResults) {
      this.elements.batchResults.style.display = 'none';
    }
    
    if (this.elements.batchProgress) {
      this.elements.batchProgress.style.display = 'none';
    }
  }

  /**
   * Habilita/desabilita controles
   * @param {boolean} enabled - Se deve habilitar
   */
  setControlsEnabled(enabled) {
    const controls = [
      this.elements.generateSingle,
      this.elements.startBatch,
      this.elements.fileInput
    ];

    controls.forEach(control => {
      if (control) {
        control.disabled = !enabled;
      }
    });
  }
}