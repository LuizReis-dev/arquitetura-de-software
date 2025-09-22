# Product Normalizer

Este projeto recebe arquivos de produtos de fornecedores em formatos diferentes (JSON, XML, CSV) e converte todos para um formato padronizado:

```ts
Product { id: string, name: string, price: number }
```

## Como usar

```bash
node app.js --input produtos.csv --format=csv
```

## Padrões utilizados
- Adapter
- Interface

## Estrutura
- `IProductProvider.ts`: Interface para carregamento de produtos
- `CsvAdapter.ts`, `XmlAdapter.ts`, `JsonAdapter.ts`: Adapters para cada formato
- `app.ts`: Entrada principal do programa
