# Resume Builder Console App

Este aplicativo de console permite ao usuário montar currículos personalizados, utilizando o padrão Builder e Singleton.

## Como funciona
- O usuário informa nome, contato, experiências profissionais e formações acadêmicas em etapas.
- O currículo é montado passo a passo.
- O resultado é salvo em dois formatos: `.txt` e `.json`.
- O programa roda até o usuário digitar `sair`.

## Execução
```bash
npm install
npm start
```

## Padrões utilizados
- Builder
- Singleton

## Estrutura
- `index.js`: Entrada principal do app
- `src/ResumeBuilder.js`: Implementação dos padrões
