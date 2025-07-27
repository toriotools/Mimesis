# 🎨 Mimesis

**Gerador de Thumbnails para YouTube com IA**

Mimesis é uma aplicação web que permite gerar thumbnails incríveis para seus vídeos do YouTube usando inteligência artificial da Pollinations. Inspirado no conceito grego de "mimesis" (representação artística), a ferramenta oferece uma interface intuitiva para criação individual ou em lote de thumbnails na proporção perfeita 16:9.

## ✨ Características

- 🖼️ **Geração Individual**: Crie thumbnails únicos com prompts personalizados
- 📦 **Processamento em Lote**: Processe até 100 prompts de uma vez
- 🎯 **Proporção Perfeita**: Thumbnails em 1280x720px (16:9) para YouTube
- 🎨 **Múltiplos Modelos**: Flux, Flux Realism, Flux Anime, Flux 3D, Turbo
- 📥 **Download Fácil**: Baixe imagens individualmente ou em lote
- 📊 **Histórico**: Acompanhe todas as suas gerações
- ⚙️ **Configurável**: Ajuste delay, qualidade e outros parâmetros

## 🚀 Como Usar

### Pré-requisitos

- Node.js 14+ ou Python 3+
- Navegador moderno com suporte a ES6+

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/toriotools/Mimesis.git
   cd Mimesis
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   # Usando Node.js (recomendado)
   npm run dev
   
   # Ou usando Python
   npm start
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

### Uso Básico

1. **Geração Individual:**
   - Digite seu prompt em inglês na aba "Geração Individual"
   - Escolha o modelo de IA nas configurações
   - Clique em "Gerar Thumbnail"
   - Faça download da imagem gerada

2. **Processamento em Lote:**
   - Vá para a aba "Processamento em Lote"
   - Cole seus prompts (um por linha) ou faça upload de arquivo .txt/.csv
   - Configure o delay entre requisições
   - Clique em "Iniciar Processamento"

## 🎯 Modelos Disponíveis

| Modelo | Descrição | Melhor Para |
|--------|-----------|-------------|
| **Flux** | Modelo padrão com boa qualidade geral | Uso geral |
| **Flux Realism** | Focado em realismo fotográfico | Fotos realistas |
| **Flux Anime** | Estilo anime e manga | Conteúdo anime/cartoon |
| **Flux 3D** | Renderização 3D | Objetos e cenários 3D |
| **Turbo** | Geração mais rápida | Prototipagem rápida |

## 🎨 Exemplos de Prompts

```
Epic mountain landscape at sunset with dramatic clouds
Modern tech workspace with RGB lighting setup
Delicious pizza with melted cheese close-up
Futuristic city skyline with neon lights
Cozy coffee shop interior with warm lighting
```

## ⚙️ Configurações

### Modelos Disponíveis
- **Flux (Padrão)**: Boa qualidade geral
- **Flux Realism**: Focado em realismo fotográfico
- **Flux Anime**: Estilo anime e manga
- **Flux 3D**: Renderização 3D
- **Turbo**: Geração mais rápida

### Parâmetros
- **Dimensões**: 1280x720px (16:9)
- **Rate Limit**: 1 requisição por segundo
- **Timeout**: 30 segundos por imagem
- **Retry**: Até 3 tentativas por falha
- **Máximo**: 100 prompts por lote

## 📁 Estrutura do Projeto

```
Mimesis/
├── src/
│   ├── css/
│   │   ├── main.css           # Estilos principais
│   │   └── components.css     # Componentes específicos
│   └── js/
│       ├── app.js             # Aplicação principal
│       ├── api.js             # Cliente da API Pollinations
│       ├── batch.js           # Processamento em lote
│       ├── ui.js              # Gerenciamento da UI
│       └── utils.js           # Utilitários e storage
├── examples/
│   └── sample-prompts.txt     # Exemplos de prompts
├── index.html                 # Interface principal
├── package.json
└── README.md
```

## 🔧 Desenvolvimento

Este projeto está otimizado para desenvolvimento assistido por IA usando Claude/Cursor.

### Comandos Úteis para IA
- "Inicialize o projeto seguindo .claude/commands/init.md"
- "Crie uma nova feature seguindo o padrão"
- "Implemente a integração com a API da Pollinations"
- "Debug este problema seguindo .claude/commands/debug.md"

### Padrões de Código
- JavaScript ES6+ com async/await
- CSS modular com variáveis CSS
- HTML semântico e acessível
- Comentários JSDoc para funções

## 🌐 API da Pollinations

### Endpoint
```
https://image.pollinations.ai/prompt/{prompt}?width=1280&height=720&model=flux
```

### Parâmetros Suportados
- `width`: Largura da imagem (1280)
- `height`: Altura da imagem (720)
- `model`: Modelo de IA (flux, flux-realism, etc.)
- `seed`: Seed para reproduzibilidade
- `nologo`: Remove logo da Pollinations

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔒 Segurança

- Validação de entrada de prompts
- Sanitização de nomes de arquivos
- Rate limiting no frontend
- Escape de caracteres especiais

## 🎯 Roadmap

- [ ] Integração com outras APIs de IA
- [ ] Editor de prompts com sugestões
- [ ] Templates de thumbnails
- [ ] Integração com YouTube API
- [ ] Sistema de tags e categorias
- [ ] Modo offline com cache

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- [Pollinations AI](https://pollinations.ai/) pela API gratuita
- Comunidade open source pelas inspirações
- YouTube pela plataforma incrível

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/toriotools/Mimesis/issues)
- **Email**: contato@toriotools.com
- **Website**: [toriotools.com](https://toriotools.com)

---

<div align="center">

**🎨 Mimesis v1.0**

Desenvolvido com ❤️ por [Tório Tools](https://toriotools.com)

[⭐ Star no GitHub](https://github.com/toriotools/Mimesis) • [🐛 Reportar Bug](https://github.com/toriotools/Mimesis/issues) • [💡 Sugerir Feature](https://github.com/toriotools/Mimesis/issues)

</div>