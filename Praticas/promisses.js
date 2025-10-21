// Missão ir no servidor do {JSON} Placeholder e trazer informações do usuario
// then() - então - serve para esperar a resposta ficar pronta
// JSON - (JAvaScript Object Notation) - formato de dados
// TRY CATCH - serve para tratar erros



// Jeito antigo de se fazer
// fetch('https://viacep.com.br/ws/06326030/json/')
// .then(res => res.json()) // resposta que chega será convertida em json
// .then(dados => {console.log(dados)})

// Jeito novo de se fazer


try {
    fetch('https://viace.com.br/ws/06326030/json/')
        .then(res => res.json()) // resposta que chega será convertida em json
        .then(dados => {console.log(dados)})
} catch (error) {
    console.log("Deu Ruim")
}