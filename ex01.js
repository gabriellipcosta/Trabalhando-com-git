
// let nome = readline.question(`digite o seu nome:`)
// console.log(`seu nome é: ${nome}`)

// importa a biblioteca readline-sync
const readline = require(`readline-sync`)

// solicita os dados do usuario
let nome = readline.question (`infome seu nome: `)

let curso = readline.question (`informe o curso: `)

let idade = readline.questionInt (`informe sua idade: `)

console.log(`nome do usuario: ${nome}`)
console.log(`curso do usuario: ${curso}`)
console.log(`idade do usuaario:${idade}`)
