/*
Vamos jogar dados?
 
O jogador inicia com 100 pontos, e pode ganhar ou perder pontos ao "jogar" um dado de 6 faces, de acordo com as regras abaixo:
 
1 - Se o resultado do dado for ímpar, o jogador recebe 10 pontos
2 - Se o resultado do dado for par, o jogador perde 5 pontos.
3 - Se a rodada for múltipla de 3, o jogador ganha 15 pontos
4 - Se a rodada for múltipla de 4, o jogador perde 20 pontos
5 - Se a pontuação do jogador estiver negativa em qualquer momento, ele perde o dobro de pontos até a pontuação estar positiva
 
O jogo é composto por 20 rodadas, e o jogador ganha se ele chegar na 20ª rodada com uma pontuação igual ou superior a 50 pontos.
 
Vocês não podem usar arrays para a execução do desafio
Utilizem os conceitos estudados até o momento para executar
O cálculo da pontuação deverá ser exibido, assim como o número da rodada e o resultado do dado.
A pontuação final deverá ser exibida na última rodada.
Poderá ser exibido em tela avisos de ganho e perda de pontos
*/

function mostrarPopup() {
    document.getElementById("sobreposicao").classList.add("ativo");
    document.getElementById("popup").classList.add("ativo");
}

function fecharPopup() {
    document.getElementById("sobreposicao").classList.remove("ativo");
    document.getElementById("popup").classList.remove("ativo");
}

function atualizarMensagemPopup(mensagem) {
    document.querySelector(".mensagemPontosFim").innerText = mensagem;
    mostrarPopup();
}

let pontos = 100;
let rodada = 1;
let pontosPerdidosOuGanhos = 0;

function rolarDado() {
    if (rodada <= 19) {
       
        let numeroAleatorio = Math.floor(Math.random() * 6) + 1;

        let rotacaoAleatoriaX = 360 * Math.floor(Math.random() * 4);
        let rotacaoAleatoriaY = 360 * Math.floor(Math.random() * 4);

        const dado = document.getElementById("dado");
        dado.style.transform = `rotateX(${rotacaoAleatoriaX}deg) rotateY(${rotacaoAleatoriaY}deg)`;

        
        setTimeout(() => {
            dado.textContent = numeroAleatorio;

            
            if (pontos >= 0) {
                if (numeroAleatorio % 3 === 0) {
                    pontos += 15;
                    pontosPerdidosOuGanhos = 15;

                } else if (numeroAleatorio % 4 === 0) {
                    pontos -= 20;
                    pontosPerdidosOuGanhos = -20;

                } else if (numeroAleatorio === 2 || numeroAleatorio === 4 || numeroAleatorio === 6) {
                    pontos -= 5;
                    pontosPerdidosOuGanhos = -5;

                } else if (numeroAleatorio === 1 || numeroAleatorio === 3 || numeroAleatorio === 5) {
                    pontos += 10;
                    pontosPerdidosOuGanhos = 10;
                }

            } else {
                if (numeroAleatorio % 3 === 0) {
                    pontos += 15;
                    pontosPerdidosOuGanhos = 15;

                } else if (numeroAleatorio % 4 === 0) {
                    pontos -= 40;
                    pontosPerdidosOuGanhos = -40;

                } else if (numeroAleatorio === 2 || numeroAleatorio === 4 || numeroAleatorio === 6) {
                    pontos -= 10;
                    pontosPerdidosOuGanhos = -10;

                } else if (numeroAleatorio === 1 || numeroAleatorio === 3 || numeroAleatorio === 5) {
                    pontos += 10;
                    pontosPerdidosOuGanhos = 10;
                }
            }

            setTimeout(() => {
                if (pontosPerdidosOuGanhos > 0) {
                atualizarMensagemPopup(`Você ganhou ${pontosPerdidosOuGanhos} pontos!`);
            } else if (pontosPerdidosOuGanhos < 0) {
                atualizarMensagemPopup(`Você perdeu ${Math.abs(pontosPerdidosOuGanhos)} pontos!`);
            }
            }, 460); 
            

            rodada++;
            document.querySelector(".rodadas").innerText = `Rodada: ${rodada}`;
        }, 800); 
    } else {
        atualizarMensagemPopup("Fim de jogo! Você chegou ao limite de rodadas.");
        document.querySelector(".rodadas").innerText = `Pontos: ${pontos} | Rodada: ${rodada}`;
    }
}

function tentarNovamente() {
    window.location.reload();
}