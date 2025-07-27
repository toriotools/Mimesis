# Pollinations AI API - Documentação e Implementação

## Endpoint Principal
```
https://image.pollinations.ai/prompt/{prompt}
```

## Parâmetros Suportados
- `width`: Largura da imagem (padrão: 1024)
- `height`: Altura da imagem (padrão: 1024)
- `seed`: Seed para reproduzibilidade (opcional)
- `model`: Modelo de IA (flux, flux-realism, flux-cablyai, etc.)
- `nologo`: Remove logo da Pollinations (true/false)

## Exemplo de URL
```
https://image.pollinations.ai/prompt/beautiful%20sunset%20over%20mountains?width=1280&height=720&model=flux&nologo=true
```

## Modelos Disponíveis
- **flux**: Modelo padrão, boa qualidade geral
- **flux-realism**: Focado em realismo
- **flux-anime**: Estilo anime/manga
- **flux-3d**: Renderização 3D
- **turbo**: Geração mais rápida

## Implementação Recomendada

### Rate Limiting
- Máximo 1 requisição por segundo
- Implementar delay entre chamadas
- Usar queue para gerenciar lotes

### Error Handling
- Timeout de 30 segundos
- Retry em caso de falha (máximo 3x)
- Fallback para modelo alternativo

### Otimizações
- Cache de imagens geradas
- Pré-validação de prompts
- Compressão de URLs longas

## Código de Exemplo
```javascript
async function generateThumbnail(prompt, options = {}) {
  const params = {
    width: 1280,
    height: 720,
    model: 'flux',
    nologo: true,
    ...options
  };
  
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?${new URLSearchParams(params)}`;
  
  try {
    const response = await fetch(url, {
      timeout: 30000
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return response.url;
  } catch (error) {
    console.error('Pollinations API error:', error);
    throw error;
  }
}
```

## Limitações Conhecidas
- Sem autenticação necessária
- Rate limiting não documentado oficialmente
- Qualidade varia por modelo
- Alguns prompts podem falhar

## Dicas de Prompts para Thumbnails
- Use palavras-chave específicas
- Inclua estilo desejado (realistic, cartoon, etc.)
- Mencione cores vibrantes para thumbnails
- Evite prompts muito longos
- Teste diferentes modelos para melhor resultado