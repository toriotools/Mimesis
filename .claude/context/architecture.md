# Decisões Arquiteturais - YouTube Thumbnail Generator

## Padrões Adotados
- **Padrão**: MVC simplificado com módulos JavaScript
- **Justificativa**: Facilita manutenção e permite desenvolvimento rápido sem frameworks pesados

## Estrutura de Camadas

1. **Apresentação (View)**
   - HTML semântico
   - CSS modular com BEM
   - JavaScript para interação

2. **Lógica de Negócio (Controller)**
   - Gerenciamento de estado
   - Validações
   - Orquestração de fluxos

3. **Integração (Model)**
   - API da Pollinations
   - LocalStorage
   - File handling

## Princípios Seguidos
- **SOLID**: Especialmente Single Responsibility
- **DRY**: Reutilização de componentes
- **KISS**: Simplicidade na implementação
- **Progressive Enhancement**: Funciona sem JavaScript avançado

## Decisões Técnicas

### Frontend Vanilla JavaScript
- **Prós**: Sem dependências, carregamento rápido, controle total
- **Contras**: Mais código boilerplate
- **Justificativa**: Projeto simples não justifica framework

### LocalStorage para Persistência
- **Prós**: Sem necessidade de backend, dados locais
- **Contras**: Limitação de tamanho, apenas local
- **Justificativa**: Dados não sensíveis, experiência offline

### Processamento Sequencial
- **Prós**: Evita rate limiting, controle de recursos
- **Contras**: Mais lento que paralelo
- **Justificativa**: API gratuita tem limitações

## Arquitetura de Módulos

```
App (main.js)
├── UI Manager (ui.js)
├── API Client (api.js)
├── Batch Processor (batch.js)
├── File Handler (files.js)
└── Storage Manager (storage.js)
```

## Trade-offs Aceitos

- **Performance vs Simplicidade**: Escolhemos simplicidade
- **Features vs Tamanho**: Mantemos apenas essencial
- **Offline vs Online**: Priorizamos funcionalidade online
- **Customização vs Usabilidade**: Foco na usabilidade

## Padrões de Comunicação
- Event-driven para componentes UI
- Promise-based para operações assíncronas
- Observer pattern para progress tracking