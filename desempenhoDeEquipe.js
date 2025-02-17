/**Boa tarde senhores e senhora!
 
Desafio de hoje está tranquilinho, está lúdico, está sextante! 
 
Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
A quantidade de membros da equipe fica de acordo com o gosto de vocês, desde que seja um mínimo de 3 pessoas. 
 
Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem completadas e, para considerar a nota final, deverão ser levados em conta os seguintes critérios:
 
1) Cada tarefa recebe uma pontuação de 0 a 10
2) o número de tarefas varia entre 5 e 10, por pessoa da equipe.
 
A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o melhor desempenho, e quem teve o pior desempenho */

let equipe = [
    { nome: "Alice", notas: [] },
    { nome: "Bob", notas: [] },
    { nome: "Carlos", notas: [] }
];

for (let i = 0; i < equipe.length; i++) {
    let numTarefas = Math.floor(Math.random() * 6) + 5;

    for (let j = 0; j < numTarefas; j++) {
        let nota = Math.floor(Math.random() * 11);
        equipe[i].notas.push(nota);
    }
}

function calcularMediaPonderada(notas) {
    let somaPonderada = 0;
    let somaPesos = 0;

    for (let i = 0; i < notas.length; i++) {
        let peso;
        if ((i + 1) % 2 !== 0) {
            peso = 2;
        } else {
            peso = 1;
        }

        somaPonderada += notas[i] * peso;
        somaPesos += peso;
    }

    let media = somaPonderada / somaPesos;
    return media;
}

for (let i = 0; i < equipe.length; i++) {
    let media = calcularMediaPonderada(equipe[i].notas);

    if (media > 8) {
        media += 2;
    }

    equipe[i].mediaFinal = media;
}

let melhor = equipe[0];
let pior = equipe[0];

for (let i = 1; i < equipe.length; i++) {
    if (equipe[i].mediaFinal > melhor.mediaFinal) {
        melhor = equipe[i];
    }

    if (equipe[i].mediaFinal < pior.mediaFinal) {
        pior = equipe[i];
    }
}

console.log("Desempenho da equipe:");
for (let i = 0; i < equipe.length; i++) {
    console.log(`${equipe[i].nome} - Média Final: ${equipe[i].mediaFinal.toFixed(2)}`);
}

console.log(`\nMelhor desempenho: ${melhor.nome} com média ${melhor.mediaFinal.toFixed(2)}`);
console.log(`Pior desempenho: ${pior.nome} com média ${pior.mediaFinal.toFixed(2)}`);