# Comando: Inicializar Projeto YouTube Thumbnail Generator

Ao executar este comando:
1. Crie estrutura de pastas do projeto
2. Configure servidor de desenvolvimento local
3. Instale dependências (se usando npm)
4. Configure variáveis de ambiente
5. Teste conexão com Pollinations AI API
6. Valide configurações

## Checklist
- [ ] Estrutura de pastas criada
- [ ] Servidor local funcionando
- [ ] API da Pollinations testada
- [ ] Interface básica carregando
- [ ] Console sem erros

## Estrutura de Pastas
```
src/
├── js/
│   ├── app.js           # Aplicação principal
│   ├── api.js           # Integração com Pollinations
│   ├── batch.js         # Processamento em lote
│   └── utils.js         # Utilitários
├── css/
│   ├── main.css         # Estilos principais
│   └── components.css   # Componentes UI
└── assets/
    └── icons/           # Ícones da interface
```

## Teste da API
Endpoint base: `https://image.pollinations.ai/prompt/{prompt}?width=1280&height=720`