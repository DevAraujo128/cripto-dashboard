import { searchPrices } from "./api/api.js";
import { formatPrince } from "./calculations.js";

let coins = []
let listaMoedas = document.getElementById('listaMoedas')
let filter = document.getElementById('filtro')

function render(date) {
    listaMoedas.innerHTML = date.map(({ name, preco}) => `
        <div class="moeda">
            <h3>${name}</h3>
            <p class="preco">${formatPrince(preco)}</p>
        </div>

    `).join('')
}

async function update() {
    try {
        const date = await searchPrices()

        coins = [
            { name: 'bitcoin', preco: date.bitcoin.brl },
            { name: 'ethereum', preco: date.ethereum.brl },
            { name: 'litecoin', preco: date.litecoin.brl },
            { name: 'cardano', preco: date.cardano.brl },
            { name: 'dogecoin', preco: date.dogecoin.brl },
            { name: 'litecoin', preco: date.litecoin.brl },
        ]

        render(coins)

    } catch (error) {
        console.log("Deu ruim na atualização")
    }
}

filter.addEventListener('input', () => {
    const text = filter.value.toLowerCase()

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(text));

    render(filteredCoins)
})

update()