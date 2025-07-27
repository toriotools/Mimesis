/**
 * Internationalization (i18n) Manager
 * Sistema de tradução para múltiplos idiomas
 */

class I18nManager {
  constructor() {
    this.currentLanguage = 'pt';
    this.translations = {
      pt: {
        // Header
        'header.title': 'Mimesis',
        'header.subtitle': 'Crie thumbnails incríveis para seus vídeos usando IA da Pollinations',
        'header.credits': 'Desenvolvido por <strong>Tório Tools</strong> • Powered by <a href="https://pollinations.ai" target="_blank" style="color: inherit;">Pollinations AI</a>',
        
        // Navigation
        'nav.single': 'Geração Individual',
        'nav.batch': 'Processamento em Lote',
        'nav.history': 'Histórico',
        
        // Single Generation
        'single.title': 'Gerar Thumbnail Individual',
        'single.prompt.label': 'Prompt para a imagem:',
        'single.prompt.placeholder': 'Descreva a imagem que você quer gerar... Ex: Epic mountain landscape at sunset with dramatic clouds',
        'single.prompt.hint': 'Máximo 500 caracteres. Prompts em inglês tendem a ter melhores resultados.',
        'single.generate': '🎨 Gerar Thumbnail',
        
        // Batch Processing
        'batch.title': 'Processamento em Lote',
        'batch.file.label': 'Upload de arquivo com prompts:',
        'batch.file.placeholder': '📁 Clique para selecionar arquivo (.txt ou .csv)',
        'batch.manual.label': 'Ou digite os prompts (um por linha):',
        'batch.manual.placeholder': 'Epic mountain landscape at sunset\nModern tech workspace with RGB lighting\nDelicious pizza with melted cheese\n...',
        'batch.manual.hint': 'Máximo 100 prompts por lote. Um prompt por linha.',
        'batch.start': '🚀 Iniciar Processamento',
        'batch.stop': '⏹️ Parar',
        
        // History
        'history.title': 'Histórico de Gerações',
        'history.clear': '🗑️ Limpar Histórico',
        'history.empty': 'Nenhum histórico encontrado',
        
        // Settings
        'settings.title': '⚙️ Configurações',
        'settings.model': 'Modelo de IA:',
        'settings.model.flux': 'Flux (Padrão)',
        'settings.model.realism': 'Flux Realism',
        'settings.model.anime': 'Flux Anime',
        'settings.model.3d': 'Flux 3D',
        'settings.model.turbo': 'Turbo (Rápido)',
        'settings.delay': 'Delay entre requisições (ms):',
        'settings.quality': 'Qualidade:',
        'settings.quality.high': 'Alta',
        'settings.quality.medium': 'Média',
        'settings.quality.low': 'Baixa',
        'settings.save': '💾 Salvar Configurações',
        
        // Quick Actions
        'actions.title': '🚀 Ações Rápidas',
        'actions.examples': '📝 Carregar Exemplos',
        'actions.test': '🔗 Testar API',
        'actions.export': '📤 Exportar Config',
        'actions.youtube': '🔴 Se inscrever no canal',
        'actions.donate': '☕ Apoiar projeto',
        
        // Info
        'info.title': 'ℹ️ Informações',
        'info.dimensions': 'Dimensões: 1280x720px (16:9)',
        'info.formats': 'Formatos: JPEG, PNG',
        'info.api': 'API: Pollinations AI',
        'info.ratelimit': 'Rate Limit: 1 req/segundo',
        'info.timeout': 'Timeout: 30 segundos',
        'info.max': 'Máximo: 100 prompts/lote',
        'info.version': 'Mimesis v1.0',
        'info.copyright': '© 2025 Tório Tools',
        'info.github': '⭐ GitHub',
        'info.pollinations': 'Pollinations',
        
        // Status
        'status.ready': 'Mimesis pronto para criar suas thumbnails! 🎨',
        'status.generating': 'Gerando imagem...',
        'status.processing': 'Processando lote...',
        
        // Messages
        'msg.prompt.empty': 'Por favor, insira um prompt',
        'msg.prompt.error': 'Erro ao gerar imagem',
        'msg.batch.no_prompts': 'Nenhum prompt encontrado',
        'msg.batch.max_exceeded': 'Máximo de 100 prompts por lote',
        'msg.examples.loaded': 'Exemplos carregados!',
        'msg.examples.error': 'Erro ao carregar exemplos',
        'msg.api.working': 'API funcionando corretamente!',
        'msg.api.error': 'API não está respondendo',
        'msg.settings.saved': 'Configurações salvas',
        'msg.history.clear.confirm': 'Tem certeza que deseja limpar todo o histórico?',
        'msg.history.cleared': 'Histórico limpo!',
        'msg.download.success': 'Download concluído!',
        'msg.download.error': 'Erro no download',
        
        // Donation Modal
        'donate.title': '☕ Apoiar o Projeto Mimesis',
        'donate.message': '💡 Criador independente apaixonado por tecnologia e inteligência artificial!\n\nMesmo sem formação como programador, desenvolvo ferramentas usando IA para tornar a vida mais fácil — sempre com foco em acessibilidade e gratuidade.\n\n🌱 Se você acredita em projetos que democratizam a tecnologia, sua doação pode fazer toda a diferença! Com seu apoio, poderei investir em equipamentos melhores e continuar criando soluções abertas para quem mais precisa.\n\n🤖 Obrigado por acompanhar meu trabalho — você já está ajudando só por estar aqui!',
        'donate.button': '☕ Doar via Ko-fi',
        'donate.close': 'Fechar'
      },
      
      en: {
        // Header
        'header.title': 'Mimesis',
        'header.subtitle': 'Create amazing thumbnails for your videos using Pollinations AI',
        'header.credits': 'Developed by <strong>Tório Tools</strong> • Powered by <a href="https://pollinations.ai" target="_blank" style="color: inherit;">Pollinations AI</a>',
        
        // Navigation
        'nav.single': 'Single Generation',
        'nav.batch': 'Batch Processing',
        'nav.history': 'History',
        
        // Single Generation
        'single.title': 'Generate Single Thumbnail',
        'single.prompt.label': 'Image prompt:',
        'single.prompt.placeholder': 'Describe the image you want to generate... Ex: Epic mountain landscape at sunset with dramatic clouds',
        'single.prompt.hint': 'Maximum 500 characters. English prompts tend to have better results.',
        'single.generate': '🎨 Generate Thumbnail',
        
        // Batch Processing
        'batch.title': 'Batch Processing',
        'batch.file.label': 'Upload prompts file:',
        'batch.file.placeholder': '📁 Click to select file (.txt or .csv)',
        'batch.manual.label': 'Or type prompts (one per line):',
        'batch.manual.placeholder': 'Epic mountain landscape at sunset\nModern tech workspace with RGB lighting\nDelicious pizza with melted cheese\n...',
        'batch.manual.hint': 'Maximum 100 prompts per batch. One prompt per line.',
        'batch.start': '🚀 Start Processing',
        'batch.stop': '⏹️ Stop',
        
        // History
        'history.title': 'Generation History',
        'history.clear': '🗑️ Clear History',
        'history.empty': 'No history found',
        
        // Settings
        'settings.title': '⚙️ Settings',
        'settings.model': 'AI Model:',
        'settings.model.flux': 'Flux (Default)',
        'settings.model.realism': 'Flux Realism',
        'settings.model.anime': 'Flux Anime',
        'settings.model.3d': 'Flux 3D',
        'settings.model.turbo': 'Turbo (Fast)',
        'settings.delay': 'Delay between requests (ms):',
        'settings.quality': 'Quality:',
        'settings.quality.high': 'High',
        'settings.quality.medium': 'Medium',
        'settings.quality.low': 'Low',
        'settings.save': '💾 Save Settings',
        
        // Quick Actions
        'actions.title': '🚀 Quick Actions',
        'actions.examples': '📝 Load Examples',
        'actions.test': '🔗 Test API',
        'actions.export': '📤 Export Config',
        'actions.youtube': '🔴 Subscribe to channel',
        'actions.donate': '☕ Support project',
        
        // Info
        'info.title': 'ℹ️ Information',
        'info.dimensions': 'Dimensions: 1280x720px (16:9)',
        'info.formats': 'Formats: JPEG, PNG',
        'info.api': 'API: Pollinations AI',
        'info.ratelimit': 'Rate Limit: 1 req/second',
        'info.timeout': 'Timeout: 30 seconds',
        'info.max': 'Maximum: 100 prompts/batch',
        'info.version': 'Mimesis v1.0',
        'info.copyright': '© 2025 Tório Tools',
        'info.github': '⭐ GitHub',
        'info.pollinations': 'Pollinations',
        
        // Status
        'status.ready': 'Mimesis ready to create your thumbnails! 🎨',
        'status.generating': 'Generating image...',
        'status.processing': 'Processing batch...',
        
        // Messages
        'msg.prompt.empty': 'Please enter a prompt',
        'msg.prompt.error': 'Error generating image',
        'msg.batch.no_prompts': 'No prompts found',
        'msg.batch.max_exceeded': 'Maximum 100 prompts per batch',
        'msg.examples.loaded': 'Examples loaded!',
        'msg.examples.error': 'Error loading examples',
        'msg.api.working': 'API working correctly!',
        'msg.api.error': 'API not responding',
        'msg.settings.saved': 'Settings saved',
        'msg.history.clear.confirm': 'Are you sure you want to clear all history?',
        'msg.history.cleared': 'History cleared!',
        'msg.download.success': 'Download completed!',
        'msg.download.error': 'Download error',
        
        // Donation Modal
        'donate.title': '☕ Support Mimesis Project',
        'donate.message': '💡 Independent creator passionate about technology and artificial intelligence.\n\nI\'m not a formally trained programmer, but I build tools using AI to make life easier — always with a focus on accessibility and free access.\n\n🌱 If you believe in projects that democratize technology, your donation can truly make a difference! With your support, I can invest in better equipment and continue creating open solutions for those who need it most.\n\n🤖 Thank you for following my work — you\'re already helping just by being here!',
        'donate.button': '☕ Donate via Ko-fi',
        'donate.close': 'Close'
      },
      
      es: {
        // Header
        'header.title': 'Mimesis',
        'header.subtitle': 'Crea miniaturas increíbles para tus videos usando IA de Pollinations',
        'header.credits': 'Desarrollado por <strong>Tório Tools</strong> • Powered by <a href="https://pollinations.ai" target="_blank" style="color: inherit;">Pollinations AI</a>',
        
        // Navigation
        'nav.single': 'Generación Individual',
        'nav.batch': 'Procesamiento por Lotes',
        'nav.history': 'Historial',
        
        // Single Generation
        'single.title': 'Generar Miniatura Individual',
        'single.prompt.label': 'Prompt para la imagen:',
        'single.prompt.placeholder': 'Describe la imagen que quieres generar... Ej: Epic mountain landscape at sunset with dramatic clouds',
        'single.prompt.hint': 'Máximo 500 caracteres. Los prompts en inglés tienden a tener mejores resultados.',
        'single.generate': '🎨 Generar Miniatura',
        
        // Batch Processing
        'batch.title': 'Procesamiento por Lotes',
        'batch.file.label': 'Subir archivo con prompts:',
        'batch.file.placeholder': '📁 Haz clic para seleccionar archivo (.txt o .csv)',
        'batch.manual.label': 'O escribe los prompts (uno por línea):',
        'batch.manual.placeholder': 'Epic mountain landscape at sunset\nModern tech workspace with RGB lighting\nDelicious pizza with melted cheese\n...',
        'batch.manual.hint': 'Máximo 100 prompts por lote. Un prompt por línea.',
        'batch.start': '🚀 Iniciar Procesamiento',
        'batch.stop': '⏹️ Parar',
        
        // History
        'history.title': 'Historial de Generaciones',
        'history.clear': '🗑️ Limpiar Historial',
        'history.empty': 'No se encontró historial',
        
        // Settings
        'settings.title': '⚙️ Configuraciones',
        'settings.model': 'Modelo de IA:',
        'settings.model.flux': 'Flux (Por defecto)',
        'settings.model.realism': 'Flux Realism',
        'settings.model.anime': 'Flux Anime',
        'settings.model.3d': 'Flux 3D',
        'settings.model.turbo': 'Turbo (Rápido)',
        'settings.delay': 'Retraso entre solicitudes (ms):',
        'settings.quality': 'Calidad:',
        'settings.quality.high': 'Alta',
        'settings.quality.medium': 'Media',
        'settings.quality.low': 'Baja',
        'settings.save': '💾 Guardar Configuraciones',
        
        // Quick Actions
        'actions.title': '🚀 Acciones Rápidas',
        'actions.examples': '📝 Cargar Ejemplos',
        'actions.test': '🔗 Probar API',
        'actions.export': '📤 Exportar Config',
        'actions.youtube': '🔴 Suscribirse al canal',
        'actions.donate': '☕ Apoyar proyecto',
        
        // Info
        'info.title': 'ℹ️ Información',
        'info.dimensions': 'Dimensiones: 1280x720px (16:9)',
        'info.formats': 'Formatos: JPEG, PNG',
        'info.api': 'API: Pollinations AI',
        'info.ratelimit': 'Rate Limit: 1 req/segundo',
        'info.timeout': 'Timeout: 30 segundos',
        'info.max': 'Máximo: 100 prompts/lote',
        'info.version': 'Mimesis v1.0',
        'info.copyright': '© 2025 Tório Tools',
        'info.github': '⭐ GitHub',
        'info.pollinations': 'Pollinations',
        
        // Status
        'status.ready': '¡Mimesis listo para crear tus miniaturas! 🎨',
        'status.generating': 'Generando imagen...',
        'status.processing': 'Procesando lote...',
        
        // Messages
        'msg.prompt.empty': 'Por favor, ingresa un prompt',
        'msg.prompt.error': 'Error al generar imagen',
        'msg.batch.no_prompts': 'No se encontraron prompts',
        'msg.batch.max_exceeded': 'Máximo 100 prompts por lote',
        'msg.examples.loaded': '¡Ejemplos cargados!',
        'msg.examples.error': 'Error al cargar ejemplos',
        'msg.api.working': '¡API funcionando correctamente!',
        'msg.api.error': 'API no está respondiendo',
        'msg.settings.saved': 'Configuraciones guardadas',
        'msg.history.clear.confirm': '¿Estás seguro de que quieres limpiar todo el historial?',
        'msg.history.cleared': '¡Historial limpio!',
        'msg.download.success': '¡Descarga completada!',
        'msg.download.error': 'Error en descarga',
        
        // Donation Modal
        'donate.title': '☕ Apoyar el Proyecto Mimesis',
        'donate.message': '💡 Creador independiente apasionado por la tecnología y la inteligencia artificial.\n\nAunque no soy programador de formación, desarrollo herramientas con IA para hacer la vida más fácil — siempre con enfoque en accesibilidad y gratuidad.\n\n🌱 Si crees en proyectos que democratizan la tecnología, tu donación puede marcar la diferencia. Con tu apoyo, podré invertir en mejores equipos y seguir creando soluciones abiertas para quienes más lo necesitan.\n\n🤖 ¡Gracias por seguir mi trabajo! Ya estás ayudando solo por estar aquí.',
        'donate.button': '☕ Donar vía Ko-fi',
        'donate.close': 'Cerrar'
      }
    };
    
    this.detectLanguage();
  }

  /**
   * Detecta idioma do navegador
   */
  detectLanguage() {
    const browserLang = navigator.language.substring(0, 2);
    const savedLang = localStorage.getItem('mimesis_language');
    
    if (savedLang && this.translations[savedLang]) {
      this.currentLanguage = savedLang;
    } else if (this.translations[browserLang]) {
      this.currentLanguage = browserLang;
    } else {
      this.currentLanguage = 'en'; // fallback
    }
  }

  /**
   * Obtém tradução
   * @param {string} key - Chave da tradução
   * @returns {string} Texto traduzido
   */
  t(key) {
    return this.translations[this.currentLanguage][key] || key;
  }

  /**
   * Muda idioma
   * @param {string} language - Código do idioma
   */
  setLanguage(language) {
    if (this.translations[language]) {
      this.currentLanguage = language;
      localStorage.setItem('mimesis_language', language);
      this.updateUI();
    }
  }

  /**
   * Obtém idioma atual
   * @returns {string} Código do idioma
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  /**
   * Obtém idiomas disponíveis
   * @returns {Array} Lista de idiomas
   */
  getAvailableLanguages() {
    return [
      { code: 'pt', name: 'Português', flag: '🇧🇷' },
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇪🇸' }
    ];
  }

  /**
   * Atualiza interface com traduções
   */
  updateUI() {
    // Atualizar todos os elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.type === 'text' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.value = translation;
        }
      } else {
        element.innerHTML = translation;
      }
    });

    // Atualizar seletor de idioma
    this.updateLanguageSelector();
  }

  /**
   * Atualiza seletor de idioma
   */
  updateLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
      const currentLang = this.getAvailableLanguages().find(l => l.code === this.currentLanguage);
      selector.innerHTML = `${currentLang.flag} ${currentLang.name}`;
    }
  }

  /**
   * Inicializa sistema de i18n
   */
  init() {
    // Criar seletor de idioma se não existir
    this.createLanguageSelector();
    
    // Aplicar traduções iniciais
    this.updateUI();
    
    console.log(`I18n initialized with language: ${this.currentLanguage}`);
  }

  /**
   * Cria seletor de idioma
   */
  createLanguageSelector() {
    const header = document.querySelector('.header .container');
    if (header && !document.getElementById('language-selector-container')) {
      const langContainer = document.createElement('div');
      langContainer.id = 'language-selector-container';
      langContainer.style.cssText = 'position: absolute; top: 10px; right: 10px; z-index: 1000;';
      
      const langDropdown = document.createElement('div');
      langDropdown.className = 'language-dropdown';
      langDropdown.style.cssText = 'position: relative; display: inline-block;';
      
      const langButton = document.createElement('button');
      langButton.id = 'language-selector';
      langButton.className = 'language-button';
      langButton.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 12px;
        backdrop-filter: blur(10px);
      `;
      
      const langMenu = document.createElement('div');
      langMenu.className = 'language-menu';
      langMenu.style.cssText = `
        position: absolute;
        top: 100%;
        right: 0;
        background: rgba(40, 40, 40, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        backdrop-filter: blur(10px);
        display: none;
        min-width: 120px;
        z-index: 1001;
      `;
      
      this.getAvailableLanguages().forEach(lang => {
        const option = document.createElement('div');
        option.className = 'language-option';
        option.style.cssText = `
          padding: 8px 12px;
          cursor: pointer;
          color: white;
          font-size: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        `;
        option.innerHTML = `${lang.flag} ${lang.name}`;
        option.addEventListener('click', () => {
          this.setLanguage(lang.code);
          langMenu.style.display = 'none';
        });
        
        option.addEventListener('mouseenter', () => {
          option.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        option.addEventListener('mouseleave', () => {
          option.style.background = 'transparent';
        });
        
        langMenu.appendChild(option);
      });
      
      langButton.addEventListener('click', () => {
        langMenu.style.display = langMenu.style.display === 'none' ? 'block' : 'none';
      });
      
      // Fechar menu ao clicar fora
      document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target)) {
          langMenu.style.display = 'none';
        }
      });
      
      langDropdown.appendChild(langButton);
      langDropdown.appendChild(langMenu);
      langContainer.appendChild(langDropdown);
      header.appendChild(langContainer);
    }
  }
}

// Disponibilizar globalmente
window.I18nManager = I18nManager;