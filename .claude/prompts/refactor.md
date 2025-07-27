# Prompt: Refatoração - YouTube Thumbnail Generator

Ao refatorar código do gerador de thumbnails:

## Objetivos da Refatoração
1. **Manter funcionalidade idêntica**
2. **Melhorar legibilidade e manutenibilidade**
3. **Otimizar performance**
4. **Reduzir duplicação de código**
5. **Melhorar tratamento de erros**

## Técnicas Específicas

### API Module (api.js)
- Extract common request logic
- Implement retry mechanism
- Add request caching
- Centralize error handling

### Batch Processing (batch.js)
- Optimize queue management
- Implement progress callbacks
- Add pause/resume functionality
- Memory usage optimization

### UI Components (ui.js)
- Extract reusable components
- Implement state management
- Add loading states
- Improve accessibility

### Utilities (utils.js)
- Create helper functions
- Add input validation
- File handling utilities
- URL manipulation helpers

## Padrões de Refatoração

### Extract Function
```javascript
// Antes
async function processPrompts(prompts) {
  for (let prompt of prompts) {
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1280&height=720`;
    // ... resto do código
  }
}

// Depois
async function processPrompts(prompts) {
  for (let prompt of prompts) {
    const imageUrl = await generateThumbnail(prompt);
    // ... resto do código
  }
}

function generateThumbnail(prompt) {
  const url = buildPollinationsUrl(prompt, { width: 1280, height: 720 });
  return fetchImage(url);
}
```

### Extract Constants
```javascript
// Antes
const url = `https://image.pollinations.ai/prompt/${prompt}?width=1280&height=720`;

// Depois
const API_BASE_URL = 'https://image.pollinations.ai/prompt';
const THUMBNAIL_DIMENSIONS = { width: 1280, height: 720 };
```

### Simplify Conditionals
```javascript
// Antes
if (response.status === 200) {
  return response.url;
} else if (response.status === 429) {
  throw new Error('Rate limited');
} else if (response.status >= 500) {
  throw new Error('Server error');
} else {
  throw new Error('Unknown error');
}

// Depois
if (response.ok) return response.url;
if (response.status === 429) throw new Error('Rate limited');
if (response.status >= 500) throw new Error('Server error');
throw new Error('Unknown error');
```

## Checklist de Refatoração
- [ ] Funcionalidade preservada
- [ ] Código mais legível
- [ ] Performance melhorada
- [ ] Duplicação removida
- [ ] Testes ainda passam
- [ ] Documentação atualizada