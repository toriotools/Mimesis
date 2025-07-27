Crie a estrutura de configuração .claude para otimizar o desenvolvimento com IA seguindo este template:

1. Crie a pasta .claude com a seguinte estrutura:

.claude/claude.md:

```markdown
# [NOME_DO_PROJETO] - [DESCRIÇÃO_BREVE]

## Visão Geral
[Descreva o objetivo principal do projeto em 2-3 linhas]

## Contexto do Projeto
- **Tipo**: [web-app/desktop-app/api/mobile-app/library/cli-tool]
- **Stack Principal**: [ex: React + Node.js / Python + FastAPI / etc]
- **Banco de Dados**: [PostgreSQL/MySQL/MongoDB/SQLite/etc]
- **Principais Integrações**: [APIs externas, serviços, etc]

## Arquitetura
```

[NOME_DO_PROJETO]/
├── .claude/              # Configurações do Claude
├── src/                  # Código fonte principal
├── tests/                # Testes automatizados
├── docs/                 # Documentação
└── [outras pastas relevantes]

```

## Princípios do Projeto
1. **[Princípio 1]**: [Descrição]
2. **[Princípio 2]**: [Descrição]
3. **[Princípio 3]**: [Descrição]

## Padrões de Código
- **Linguagem**: [JavaScript/TypeScript/Python/etc]
- **Style Guide**: [Airbnb/Google/Standard/Custom]
- **Formatação**: [Prettier/Black/etc]
- **Linting**: [ESLint/Pylint/etc]

## Fluxo de Trabalho Principal
1. [Etapa 1] → 2. [Etapa 2] → 3. [Etapa 3] → ...

## Comandos Essenciais
- `[comando dev]` - Inicia desenvolvimento
- `[comando test]` - Executa testes
- `[comando build]` - Build de produção
- `[comando deploy]` - Deploy

## Tarefas Prioritárias
- [ ] [Tarefa 1]
- [ ] [Tarefa 2]
- [ ] [Tarefa 3]

## Regras de Negócio Importantes
1. [Regra 1]
2. [Regra 2]
3. [Regra 3]

## Considerações de Segurança
- [Consideração 1]
- [Consideração 2]

## Links Úteis
- Documentação: [link]
- API Reference: [link]
- Design System: [link]
```

.claude/settings.json:

```json
{
  "project": {
    "name": "[NOME_DO_PROJETO]",
    "type": "[TIPO_DO_PROJETO]",
    "version": "1.0.0",
    "language": "pt-BR"
  },
  "codeGeneration": {
    "style": "modern",
    "comments": "detailed",
    "documentation": "jsdoc",
    "errorHandling": "comprehensive",
    "testingFramework": "[jest/pytest/mocha/etc]"
  },
  "aiAssistant": {
    "personality": "professional",
    "responseStyle": "detailed-with-examples",
    "codeExplanation": "step-by-step"
  },
  "development": {
    "environment": "[development/staging/production]",
    "debugLevel": "verbose",
    "hotReload": true
  },
  "qualityAssurance": {
    "codeCoverage": "80%",
    "linting": true,
    "typeChecking": "strict"
  },
  "context": {
    "autoLoad": [
      ".claude/claude.md",
      "README.md",
      "package.json",
      "[outros arquivos importantes]"
    ],
    "ignore": [
      "node_modules",
      "dist",
      "build",
      ".git",
      "*.log"
    ]
  }
}
```

.claude/commands/init.md:

```markdown
# Comando: Inicializar Projeto

Ao executar este comando:
1. Verifique e instale dependências
2. Configure ambiente de desenvolvimento
3. Crie estrutura de pastas faltantes
4. Configure git hooks (se aplicável)
5. Execute migrations/seeds (se aplicável)
6. Valide configurações

## Checklist
- [ ] Dependências instaladas
- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados conectado
- [ ] Testes passando
- [ ] Linter configurado
```

.claude/commands/create-feature.md:

```markdown
# Comando: Criar Nova Feature

Para criar uma nova feature:
1. Crie a estrutura de arquivos necessária
2. Implemente seguindo os padrões do projeto
3. Adicione testes unitários
4. Atualize documentação
5. Adicione ao registro de mudanças

## Template Base
- Component/Module principal
- Testes
- Documentação
- Types/Interfaces (se TypeScript)
- Styles (se aplicável)
```

.claude/commands/debug.md:

```markdown
# Comando: Debug e Resolução de Problemas

Passos para debugging:
1. Identifique o erro específico
2. Verifique logs relevantes
3. Isole o problema em um teste mínimo
4. Implemente correção
5. Adicione teste para prevenir regressão

## Ferramentas de Debug
- [Lista de ferramentas específicas do projeto]
- Console logs estruturados
- Breakpoints
- Profiling (se necessário)
```

.claude/commands/deploy.md:

```markdown
# Comando: Deploy

Checklist de deploy:
1. [ ] Testes passando
2. [ ] Build de produção ok
3. [ ] Variáveis de ambiente configuradas
4. [ ] Banco de dados migrado
5. [ ] Assets otimizados
6. [ ] Monitoramento configurado

## Ambientes
- Development: [detalhes]
- Staging: [detalhes]
- Production: [detalhes]
```

.claude/templates/component.template:

```
# Template para [TIPO_DE_COMPONENTE]

## Estrutura Base
[Código template específico da linguagem/framework]

## Convenções
- [Convenção 1]
- [Convenção 2]

## Exemplo de Uso
[Exemplo de código]
```

.claude/context/business-rules.md:

```markdown
# Regras de Negócio

## Domínio Principal
[Descrição do domínio]

## Entidades Principais
1. **[Entidade 1]**
   - [Propriedades]
   - [Regras]

2. **[Entidade 2]**
   - [Propriedades]
   - [Regras]

## Fluxos de Negócio
### [Fluxo 1]
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

## Validações Importantes
- [Validação 1]
- [Validação 2]
```

.claude/context/architecture.md:

```markdown
# Decisões Arquiteturais

## Padrões Adotados
- **Padrão**: [ex: MVC, Clean Architecture, etc]
- **Justificativa**: [Por que foi escolhido]

## Estrutura de Camadas
1. **Apresentação**: [Descrição]
2. **Domínio**: [Descrição]
3. **Infraestrutura**: [Descrição]

## Princípios Seguidos
- SOLID
- DRY
- KISS
- [Outros]

## Trade-offs Aceitos
- [Trade-off 1]: [Justificativa]
- [Trade-off 2]: [Justificativa]
```

.claude/prompts/code-review.md:

```markdown
# Prompt: Code Review

Ao revisar código, verifique:
1. **Funcionalidade**: O código faz o que deveria?
2. **Legibilidade**: Está claro e bem documentado?
3. **Performance**: Existem otimizações óbvias?
4. **Segurança**: Há vulnerabilidades?
5. **Testes**: Está adequadamente testado?
6. **Padrões**: Segue os padrões do projeto?

## Checklist
- [ ] Sem bugs óbvios
- [ ] Tratamento de erros adequado
- [ ] Sem código morto
- [ ] Nomenclatura clara
- [ ] Sem hardcode desnecessário
```

.claude/prompts/refactor.md:

```markdown
# Prompt: Refatoração

Ao refatorar código:
1. Mantenha funcionalidade idêntica
2. Melhore legibilidade
3. Reduza complexidade
4. Elimine duplicação
5. Melhore testabilidade

## Técnicas Comuns
- Extract Method/Function
- Rename Variable
- Remove Dead Code
- Simplify Conditionals
- Extract Constants
```

2. Crie também a pasta .cursor com regras de formatação:

.cursor/rules.md:

```markdown
# Regras de Desenvolvimento

## Geral
- Código em [inglês/português]
- Commits em [inglês/português]
- Documentação em [inglês/português]

## Nomenclatura
- Variáveis: [camelCase/snake_case]
- Funções: [camelCase/snake_case]
- Classes: [PascalCase]
- Constantes: [UPPER_SNAKE_CASE]
- Arquivos: [kebab-case/snake_case]

## Estrutura
- Máximo [X] linhas por arquivo
- Máximo [X] linhas por função
- Ordenação de imports: [Built-in → External → Internal]

## Git
- Branch naming: [feature/*, bugfix/*, hotfix/*]
- Commit format: [conventional commits/custom]

## Qualidade
- Coverage mínimo: [X]%
- Complexidade máxima: [X]
- Sem warnings do linter
```

3. Crie o arquivo README_CLAUDE.md na raiz explicando o uso:

README_CLAUDE.md:

```markdown
# Configuração Claude AI Assistant

Este projeto está otimizado para desenvolvimento assistido por IA.

## Como Usar

1. **Contexto Automático**: O arquivo `.claude/claude.md` é carregado automaticamente
2. **Comandos Rápidos**: Use os comandos em `.claude/commands/`
3. **Templates**: Utilize os templates em `.claude/templates/`
4. **Regras**: Siga as regras definidas em `.cursor/rules.md`

## Comandos Principais

- "Inicialize o projeto seguindo .claude/commands/init.md"
- "Crie uma nova feature seguindo o padrão"
- "Faça code review seguindo as diretrizes"
- "Refatore este código mantendo a funcionalidade"

## Personalização

Edite os arquivos em `.claude/` para adaptar ao seu projeto específico.
```

## Instruções de Uso

1. **Salve este template** em um arquivo como `claude-template.md`

2. **Para cada novo projeto**, copie e substitua:
   - `[NOME_DO_PROJETO]` pelo nome real
   - `[TIPO_DO_PROJETO]` pelo tipo (web-app, api, etc)
   - `[DESCRIÇÃO_BREVE]` pela descrição
   - Preencha os outros placeholders

3. **Personalize** conforme necessário:
   - Adicione comandos específicos
   - Ajuste regras de negócio
   - Configure padrões de código

4. **Use o comando** no Claude/Cursor para criar a estrutura

## Benefícios

- ✅ Contexto rico para a IA
- ✅ Comandos padronizados
- ✅ Reduz erros e retrabalho
- ✅ Acelera desenvolvimento
- ✅ Mantém consistência
- ✅ Facilita onboarding
