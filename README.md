# Conversor de Moedas

Este é um projeto de conversor de moedas desenvolvido com React e Vite. Ele permite que os usuários convertam valores entre diferentes moedas usando uma API de taxas de câmbio.

## Funcionalidades

- Conversão de moedas em tempo real
- Seleção de moedas de origem e destino
- Validação de entrada do usuário

## Tecnologias Utilizadas

- React
- Vite
- Fetch API

## Estrutura do Projeto

currency-converter
└── public
└── index.html
└── src
  ├── App.jsx
  ├── App.css
  ├── index.js
  ├── api
  │ └── currencyApi.js
  ├── components
  │ └── CurrencyConverter.jsx
  ├── hooks
  │ └── useCurrencyConverter.js
  └── services
  └── currencyService.js


## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/conversor-moedas.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd conversor-moedas
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

## Uso

1. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

2. Abra o navegador e acesse:
    ```
    http://localhost:3000
    ```

## Estrutura do Código

- [currencyApi.js](http://_vscodecontentref_/2): Contém a função para buscar as taxas de câmbio da API.
- [currencyService.js](http://_vscodecontentref_/3): Contém a lógica de negócios para obter as taxas de câmbio.
- [useCurrencyConverter.js](http://_vscodecontentref_/4): Hook personalizado para gerenciar o estado e a lógica de conversão de moedas.
- [CurrencyConverter.jsx](http://_vscodecontentref_/5): Componente React para a interface do conversor de moedas.
- [App.jsx](http://_vscodecontentref_/6): Componente principal da aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.