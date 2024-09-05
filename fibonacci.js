//1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde -
//informado um número ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// Para executar o codigo será necessario o node com o seguinte comando no Terminal: node fibonacci.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(num) {
    let a = 0, b = 1, nextTerm = a + b;

    if (num === a || num === b) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    while (nextTerm <= num) {
        if (nextTerm === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = nextTerm;
        nextTerm = a + b;
    }

    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

rl.question('Informe um número: ', (numero) => {
    const num = parseInt(numero);
    console.log(isFibonacci(num));
    rl.close();
});
