# YouTube Thumbnail Generator - Gerador de Imagens em Lote com Pollinations AI

## Visão Geral
Aplicação web para gerar thumbnails de YouTube em massa usando a API da Pollinations AI, processando listas de prompts e criando imagens otimizadas na proporção 16:9.

## Contexto do Projeto
- **Tipo**: web-app
- **Stack Principal**: HTML5 + CSS3 + JavaScript (Vanilla) + Pollinations AI API
- **Banco de Dados**: LocalStorage (para histórico e configurações)
- **Principais Integrações**: Pollinations AI API, Download de arquivos em lote

## Arquitetura
```
youtube-thumbnail-generator/
├── .claude/              # Configurações do Claude
├── src/                  # Código fonte principal
│   ├── js/              # Scripts JavaScript
│   ├── css/             # Estilos CSS
│   └── assets/          # Recursos estáticos
├── docs/                # Documentação
├── examples/            # Exemplos de prompts
└── dist/                # Build de produção
```

## Princípios do Projeto
1. **Simplicidade**: Interface intuitiva e fácil de usar
2. **Performance**: Processamento eficiente de lotes grandes
3. **Qualidade**: Imagens otimizadas para YouTube (1280x720px)

## Padrões de Código
- **Linguagem**: JavaScript ES6+
- **Style Guide**: Airbnb JavaScript Style Guide
- **Formatação**: Prettier
- **Linting**: ESLint

## Fluxo de Trabalho Principal
1. Upload/Input de lista de prompts → 2. Configuração de parâmetros → 3. Processamento em lote → 4. Download das imagens

## Comandos Essenciais
- `npm start` - Inicia servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run lint` - Executa linting
- `npm run format` - Formata código

## Tarefas Prioritárias
- [ ] Interface de upload de prompts
- [ ] Integração com Pollinations AI API
- [ ] Sistema de processamento em lote
- [ ] Download automático de imagens
- [ ] Histórico de gerações
- [ ] Configurações avançadas

## Regras de Negócio Importantes
1. Imagens devem ser geradas na proporção 16:9 (1280x720px)
2. Suporte a processamento de até 100 prompts por lote
3. Timeout de 30 segundos por imagem
4. Retry automático em caso de falha (máximo 3 tentativas)

## Considerações de Segurança
- Validação de entrada de prompts
- Rate limiting para evitar spam na API
- Sanitização de nomes de arquivos

## Links Úteis
- Pollinations AI: https://pollinations.ai/
- GitHub Pollinations: https://github.com/pollinations
- YouTube Thumbnail Guidelines: https://support.google.com/youtube/answer/72431