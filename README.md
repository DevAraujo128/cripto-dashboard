# 🚀 Cripto Dashboard

Um pequeno dashboard para consultar preços de criptomoedas usando a API do CoinGecko. Ideal para prática de fetch, módulos ES, e manipulação do DOM.

### ✨ Funcionalidades
- Exibe preços em BRL para: bitcoin, ethereum, litecoin, cardano, dogecoin 🪙
- Filtro ao digitar o nome da moeda 🔎
- Botão para atualizar os preços 🔄

### 🗂️ Estrutura do projeto
- index.html — interface principal
- main.js — lógica do frontend (módulo ES)
- api/api.js — chamada à API do CoinGecko
- calculations.js — utilitários de formatação
- style.css — estilos

### ▶️ Como rodar (navegador)
1. Abra o projeto no VS Code.
2. Use a extensão Live Server ou rode um servidor simples (recomendado para módulos + fetch funcionar corretamente):
   - Com Live Server: clique em "Go Live".

3. Abra o DevTools (F12) se algo não aparecer — veja erros no Console.

### ⚠️ Dicas e problemas comuns
- Certifique-se que o <script type="module" src="main.js"> está presente no index.html (já incluso).
- Se ver "document is not defined": está tentando rodar em Node em vez do navegador.
- Se a API falhar, verifique o console e o arquivo api/api.js (nomes das moedas devem estar corretos e sem duplicatas).
- Para rodar em Node (não recomendado para este projeto), use Node 18+ (fetch global) ou instale node-fetch.

### 🛠️ Como contribuir
- Corrija typos nos nomes das moedas no arquivo api/api.js
- Adicione mais moedas no array COINS
- Implemente caching/localStorage para reduzir chamadas à API

### ✅ Observações finais
Projeto simples para estudos — modifique, melhore e experimente! 💰📈   
