# Comando: Debug e Resolução de Problemas

Passos para debugging no gerador de thumbnails:
1. Identifique o tipo de erro (API, UI, Processamento)
2. Verifique console do navegador
3. Teste API isoladamente
4. Valide entrada de dados
5. Implemente correção
6. Adicione logging preventivo

## Ferramentas de Debug
- DevTools do navegador
- Console.log estruturado
- Network tab para requisições API
- Performance profiler
- Pollinations API status

## Problemas Comuns

### API Issues
- Rate limiting da Pollinations
- Timeout de requisições
- Prompts inválidos
- Problemas de CORS

### UI Issues
- Upload de arquivos grandes
- Responsividade
- Estados de loading
- Feedback de erro

### Performance Issues
- Muitas requisições simultâneas
- Memory leaks em lotes grandes
- Slow DOM updates

## Debug Checklist
- [ ] Console sem erros
- [ ] Network requests OK
- [ ] API responses válidas
- [ ] UI responsiva
- [ ] Memory usage estável