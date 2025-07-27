# Quick Start - YouTube Thumbnail Generator

## Comandos Essenciais para IA

### 🚀 Inicialização
```
Inicialize o projeto seguindo .claude/commands/init.md
```

### 🔧 Desenvolvimento Core
```
Crie a estrutura básica da aplicação web
Implemente a integração com a API da Pollinations seguindo .claude/context/pollinations-api.md
Desenvolva o sistema de processamento em lote seguindo as regras de negócio
Crie a interface de upload de prompts com validação
```

### 🎨 Interface
```
Desenvolva a interface principal seguindo .claude/templates/component.template
Adicione sistema de progresso para processamento em lote
Implemente preview de imagens geradas
Crie sistema de download em ZIP
```

### 🔍 Testes e Debug
```
Teste a integração com a API usando examples/sample-prompts.txt
Debug problemas seguindo .claude/commands/debug.md
Otimize performance para lotes grandes
```

## Fluxo de Desenvolvimento Recomendado

1. **Setup Inicial**
   - Estrutura de pastas
   - HTML base
   - CSS reset

2. **API Integration**
   - Função de conexão com Pollinations
   - Tratamento de erros
   - Rate limiting

3. **Core Features**
   - Upload de arquivos
   - Processamento individual
   - Processamento em lote

4. **UI/UX**
   - Interface responsiva
   - Feedback visual
   - Estados de loading

5. **Otimizações**
   - Performance
   - Error handling
   - Acessibilidade

## Arquivos Importantes
- `.claude/context/pollinations-api.md` - Documentação da API
- `.claude/context/business-rules.md` - Regras do projeto
- `examples/sample-prompts.txt` - Prompts para teste
- `.cursor/rules.md` - Padrões de código