const numeros = [2, 4, 6, 8]
const maisNumeros = [1, 3, 5, 7]


const n = [...numeros, ...maisNumeros]
console.log(n)


const usuario = {
    nome: 'Diego',
    idade: 23,
    profissao: 'Desenvolvedor'
}

const usuario2 = {
    ...usuario,
    idade: 25
}

console.log(usuario2)