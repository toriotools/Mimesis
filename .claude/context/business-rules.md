# Regras de Negócio - YouTube Thumbnail Generator

## Domínio Principal
Geração automatizada de thumbnails para YouTube usando IA, otimizadas para engajamento e conformidade com as diretrizes da plataforma.

## Entidades Principais

1. **Prompt**
   - Texto descritivo para geração da imagem
   - Máximo 500 caracteres
   - Deve ser em inglês para melhor resultado
   - Pode incluir estilos e modificadores

2. **Imagem Gerada**
   - Proporção obrigatória: 16:9 (1280x720px)
   - Formato: JPEG ou PNG
   - Tamanho máximo: 2MB
   - Qualidade otimizada para web

3. **Lote de Processamento**
   - Máximo 100 prompts por lote
   - Processamento sequencial com delay
   - Retry automático em falhas
   - Progress tracking em tempo real

## Fluxos de Negócio

### Geração Individual
1. Usuário insere prompt
2. Sistema valida entrada
3. Chama API da Pollinations
4. Exibe preview da imagem
5. Permite download

### Geração em Lote
1. Usuário faz upload de lista de prompts
2. Sistema valida formato e quantidade
3. Inicia processamento sequencial
4. Mostra progresso em tempo real
5. Gera arquivo ZIP com todas as imagens

### Gerenciamento de Histórico
1. Salva prompts utilizados
2. Mantém links das imagens geradas
3. Permite re-download
4. Exporta histórico

## Validações Importantes

### Prompts
- Não pode estar vazio
- Máximo 500 caracteres
- Filtro de conteúdo inadequado
- Escape de caracteres especiais

### API Limits
- Rate limit: 1 requisição por segundo
- Timeout: 30 segundos por imagem
- Retry: máximo 3 tentativas
- Fallback para erro de API

### Arquivos
- Upload máximo: 10MB
- Formatos aceitos: .txt, .csv
- Encoding: UTF-8
- Máximo 100 linhas por arquivo

## Configurações do Sistema
- Delay entre requisições: 1000ms
- Timeout padrão: 30000ms
- Qualidade de imagem: 85%
- Cache de imagens: 24 horas