# Regras de Desenvolvimento - YouTube Thumbnail Generator

## Geral
- Código em inglês (variáveis, funções, comentários)
- Commits em português
- Documentação em português
- Interface do usuário em português

## Nomenclatura
- Variáveis: camelCase (ex: `imageUrl`, `batchProcessor`)
- Funções: camelCase (ex: `generateImage()`, `downloadBatch()`)
- Classes: PascalCase (ex: `BatchProcessor`, `ImageGenerator`)
- Constantes: UPPER_SNAKE_CASE (ex: `API_BASE_URL`, `MAX_BATCH_SIZE`)
- Arquivos: kebab-case (ex: `batch-processor.js`, `main.css`)
- CSS Classes: BEM notation (ex: `.thumbnail-generator__button--primary`)

## Estrutura de Arquivos
- Máximo 300 linhas por arquivo JavaScript
- Máximo 50 linhas por função
- Ordenação de imports: Built-in → External → Internal
- Um componente por arquivo

## JavaScript
- Use ES6+ features (arrow functions, destructuring, async/await)
- Sempre use `const` ou `let`, nunca `var`
- Prefira template literals para strings
- Use try/catch para operações assíncronas
- Documente funções com JSDoc

## CSS
- Mobile-first approach
- Use CSS Grid e Flexbox
- Variáveis CSS para cores e espaçamentos
- Evite !important
- Organize por componentes

## HTML
- Semântico e acessível
- Use ARIA labels quando necessário
- Otimizado para SEO
- Validação W3C

## Git
- Branch naming: `feature/nome-da-feature`, `bugfix/nome-do-bug`, `hotfix/nome-do-hotfix`
- Commit format: Conventional Commits
  - `feat: adiciona processamento em lote`
  - `fix: corrige timeout da API`
  - `docs: atualiza README`

## Qualidade
- Coverage mínimo: 80%
- Sem warnings do ESLint
- Código formatado com Prettier
- Testes para funções críticas

## Performance
- Lazy loading de imagens
- Debounce em inputs
- Otimização de DOM updates
- Service Worker para cache

## Segurança
- Sanitização de inputs
- Validação de uploads
- Rate limiting no frontend
- Escape de caracteres especiais

## Acessibilidade
- Contraste mínimo WCAG AA
- Navegação por teclado
- Screen reader friendly
- Textos alternativos em imagens