# Configuração Claude AI Assistant - YouTube Thumbnail Generator

Este projeto está otimizado para desenvolvimento assistido por IA, especificamente para criar um gerador de thumbnails do YouTube usando a API da Pollinations AI.

## Como Usar

1. **Contexto Automático**: O arquivo `.claude/claude.md` é carregado automaticamente com informações do projeto
2. **Comandos Rápidos**: Use os comandos em `.claude/commands/` para tarefas específicas
3. **Templates**: Utilize os templates em `.claude/templates/` para criar componentes
4. **Regras**: Siga as regras definidas em `.cursor/rules.md` para consistência

## Comandos Principais

### Inicialização
- "Inicialize o projeto seguindo .claude/commands/init.md"
- "Crie a estrutura básica de pastas e arquivos"

### Desenvolvimento
- "Crie uma nova feature seguindo o padrão"
- "Implemente a integração com a API da Pollinations"
- "Crie o sistema de processamento em lote"
- "Desenvolva a interface de upload de prompts"

### Qualidade
- "Faça code review seguindo as diretrizes"
- "Refatore este código mantendo a funcionalidade"
- "Adicione tratamento de erros adequado"
- "Otimize a performance do processamento"

### Debug
- "Debug este problema seguindo .claude/commands/debug.md"
- "Analise os erros da API da Pollinations"
- "Verifique a performance do batch processing"

## Contexto Específico do Projeto

### API da Pollinations
- Endpoint: `https://image.pollinations.ai/prompt/{prompt}`
- Parâmetros: width=1280, height=720 para thumbnails 16:9
- Rate limiting: 1 requisição por segundo recomendado
- Modelos disponíveis: flux, flux-realism, flux-anime

### Funcionalidades Principais
1. **Upload de Prompts**: Arquivo .txt ou .csv com lista de prompts
2. **Geração Individual**: Teste de prompts únicos
3. **Processamento em Lote**: Até 100 imagens por vez
4. **Download Automático**: ZIP com todas as imagens geradas
5. **Histórico**: Salva prompts e resultados no LocalStorage

### Estrutura do Projeto
```
src/
├── js/
│   ├── app.js           # Aplicação principal
│   ├── api.js           # Integração Pollinations
│   ├── batch.js         # Processamento em lote
│   ├── ui.js            # Interface do usuário
│   └── utils.js         # Utilitários
├── css/
│   ├── main.css         # Estilos principais
│   └── components.css   # Componentes UI
└── index.html           # Página principal
```

## Personalização

Edite os arquivos em `.claude/` para adaptar ao desenvolvimento:
- Adicione novos comandos específicos
- Ajuste regras de negócio
- Configure padrões de código
- Inclua templates personalizados

## Exemplos de Prompts para IA

- "Crie a função de integração com a API da Pollinations seguindo o template"
- "Implemente o sistema de upload de arquivos com validação"
- "Desenvolva a interface de progresso para processamento em lote"
- "Adicione sistema de retry para falhas da API"
- "Otimize o código para processar lotes grandes sem travar o browser"

## Exemplos Incluídos
- `examples/sample-prompts.txt`: Lista de prompts de exemplo para testar
- Templates prontos para componentes UI e funções de API
- Configurações otimizadas para desenvolvimento com IA

## Tecnologias Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **API**: Pollinations AI (https://pollinations.ai/)
- **Storage**: LocalStorage para histórico
- **Build**: Vanilla (sem bundler para simplicidade)
- **Deploy**: GitHub Pages ou Netlify

## Próximos Passos
1. Execute: "Inicialize o projeto seguindo .claude/commands/init.md"
2. Desenvolva: "Crie a estrutura básica da aplicação"
3. Integre: "Implemente a conexão com a API da Pollinations"
4. Teste: "Use os prompts de exemplo para validar a funcionalidade"