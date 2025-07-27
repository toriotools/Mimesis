# Prompt: Code Review - YouTube Thumbnail Generator

Ao revisar código do gerador de thumbnails, verifique:

## Funcionalidade
1. **API Integration**: Chamadas corretas para Pollinations AI?
2. **Error Handling**: Tratamento adequado de timeouts e falhas?
3. **Batch Processing**: Processamento sequencial funcionando?
4. **File Handling**: Upload e download de arquivos OK?
5. **UI Feedback**: Loading states e progress bars?

## Qualidade do Código
1. **Legibilidade**: Código claro e bem documentado?
2. **Performance**: Otimizado para lotes grandes?
3. **Memory Management**: Sem vazamentos de memória?
4. **Async/Await**: Uso correto de promises?
5. **Modularidade**: Código bem organizado em módulos?

## Segurança
1. **Input Validation**: Prompts e arquivos validados?
2. **XSS Prevention**: Escape de caracteres especiais?
3. **Rate Limiting**: Controle de requisições implementado?
4. **File Security**: Validação de tipos de arquivo?

## Específico da API Pollinations
1. **URL Encoding**: Prompts corretamente encodados?
2. **Parameters**: width=1280, height=720 para thumbnails?
3. **Model Selection**: Modelo apropriado selecionado?
4. **Retry Logic**: Tentativas em caso de falha?

## Checklist de Review
- [ ] Sem bugs óbvios
- [ ] Tratamento de erros da API
- [ ] Progress tracking funcionando
- [ ] UI responsiva
- [ ] Código documentado
- [ ] Performance otimizada
- [ ] Testes básicos passando