export const COINS = ['bitcoin', 'ethereum', 'litecoin', 'cardano', 'dogecoin', 'litecoin']
const API_URL = 'https://api.coingecko.com/api/v3/simple/price'

export async function searchPrices() {
    const ids = COINS.join(',')
    const url = `${API_URL}?ids=${ids}&vs_currencies=brl`

    const response = await fetch(url)
    const date = await response.json()

    return date
}
