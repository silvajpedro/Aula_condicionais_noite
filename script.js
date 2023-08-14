// FORMAS DE ESCRITAS DE UMA STRING

console.log("oi")


// CONCATENAÇÃO DE STRINGS (JUNTAR UMA STRING NA OUTRA)
let corFavorita = "tomato"
let petFavorito = "gato"

petFavorito = "gato e cachorro"

// operador de concatenação +
console.log("Minha cor favorita é " + corFavorita + " e meu pet favorito é " + petFavorito)

// TEMPLATE LITERALS OU TEMPLATE STRINGS

console.log(`Minha cor favorita é ${corFavorita} e meu pet favorito é ${petFavorito}`)

// CONDIÇÕES NO JAVASCRIPT

// CONDIÇÕES SIMPLES

let idade = 18

if(idade > 18){
console.log("você é maior de idade")
}

 // se( o dia estivessse claro){
//     console.log("eu iria sair pra correr")
// }

// operadores de comparação

// > VAI VERIFICAR SE UM VALOR É MAIOR QUE O OUTRO
let velocidade = 120

if(velocidade > 100){
    console.log("Parabéns!!! Você foi multado porque estava acima da velocidade da via")
}

// < VAI VERIFICAR SE UM VALOR E MENOR QUE O OUTRO

// >= MAIOR OU IGUAL, VERIFICAR SE UM VALOR É MAIOR OU IGUAL AO OUTRO
let carros = 10

if(carros >= 10){
    console.log("você tem muitos carros")
}


// <= MENOR OU IGUAL, VERIFICAR UM VALOR É MENOR OU IGUAL AO OUTRO

let saldoVnw = 50

if(saldoVnw <= 100){
    console.log(`O meu saldo é meu ${saldoVnw}`)
}

// == IGUAL A, ELE VAI VERIFICAR SE UM VALOR É IGUAL AO OUTRO

let pratoDoDia = "salada"

if(pratoDoDia == "salada"){
    console.log(`O prato do dia é ${pratoDoDia}`)
}


// === ESTRITAMENTE IGUAL, VAI VERIFICAR O VALOR E TIPO SE SÃO IGUAIS

let numeroDaSorte = "3"

if(numeroDaSorte === 3){
    console.log(`O numero da sorte é ${numeroDaSorte}`)
}

// != DIFERENTE DE, VAI VERIFICAR SE OS VALORES SÃO DIFERENTES

let lancheDoDia = "suco com coxinha"

if(lancheDoDia != "pão com ovo"){
    console.log("socorro me ajude")
}

// !== ESTRITAMENTE DESIGUAL, VAI VERIFICAR SE O VALOR E TIPO SÃO DIFERENTES







// CONDIÇÕES COMPOSTAS
