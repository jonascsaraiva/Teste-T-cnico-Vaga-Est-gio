//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// Para executar o codigo será necessario o node com o seguinte comando no Terminal: node contarLetraA.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarLetraA(str) {
    const letras = str.split(''); // Para quebra a string em um array de caracteres
    let contador = 0;

    // Percorre o array de letras e conta "a" e "A"
    letras.forEach(letra => {
        if (letra === 'a' || letra === 'A') {
            contador++;
        }
    });

    return contador;
}

rl.question('Informe uma string: ', (input) => {
    const ocorrencias = contarLetraA(input);

    if (ocorrencias > 0) {
        console.log(`A letra "a" ocorre ${ocorrencias} vezes na string.`);
    } else {
        console.log('A letra "a" não foi encontrada na string.');
    }

    rl.close();
});
