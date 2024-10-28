// Variáveis globais
let velocidadeMosquito; // Velocidade do mosquito
let pontuacao = 0; // Pontuação do jogador
let vidas = 3; // Vidas do jogador
let tempoLimite; // Timeout para controle de vida
let tempoRestante; // Tempo restante para perder vida
let movimentoMosquito; // Variável para o setInterval

// Função para atualizar a exibição da pontuação
function atualizarPontuacao() {
    document.getElementById('pontuacao').textContent = `Pontuação: ${pontuacao}`;
}

// Função para clicar no mosquito
function clicarMosquito() {
    pontuacao++; // Incrementa a pontuação
    atualizarPontuacao(); // Atualiza a exibição da pontuação

    const mosquit = document.getElementById('mosquit');
    mosquit.style.opacity = '0'; // Faz o mosquito desaparecer

    // Move o mosquito após um breve tempo
    setTimeout(() => {
        moverMosquito(window.innerWidth, window.innerHeight); // Move o mosquito
        mosquit.style.opacity = '1'; // Faz o mosquito reaparecer
    }, 300); // Tempo em milissegundos antes de reaparecer

    // Reinicia o tempo limite
    clearTimeout(tempoLimite);
    iniciarTempoLimite();
}

// Função para mover o mosquito para uma posição aleatória
function moverMosquito(largura, altura) {
    const mosquit = document.getElementById('mosquit');
    const posX = Math.random() * (largura - mosquit.clientWidth);
    const posY = Math.random() * (altura - mosquit.clientHeight);

    mosquit.style.position = 'absolute';
    mosquit.style.left = `${posX}px`;
    mosquit.style.top = `${posY}px`;
}

// Função para iniciar o tempo limite
function iniciarTempoLimite() {
    tempoRestante = 2; // Tempo inicial em segundos
    atualizarTempoLimite(); // Atualiza a exibição inicial

    tempoLimite = setInterval(() => {
        tempoRestante--; // Decrementa o tempo
        atualizarTempoLimite(); // Atualiza a exibição do tempo

        // Se o tempo acabar, perde vida
        if (tempoRestante <= 0) {
            clearInterval(tempoLimite);
            perderVida(); // Chama a função para perder vida
        }
    }, 1000); // Atualiza a cada segundo
}

// Atualiza a exibição do tempo limite
function atualizarTempoLimite() {
    document.getElementById('tempo-limite').textContent = `Tempo restante: ${tempoRestante}s`;
}

// Lógica para perder vida
function perderVida() {
    if (vidas > 0) {
        vidas--;
        atualizarVidas(); // Atualiza a exibição das vidas

        // Verifica se o jogo acabou
        if (vidas === 0) {
            clearInterval(movimentoMosquito); // Para o movimento do mosquito
            document.getElementById('gameover').style.display = 'block';
            alert("Game Over! Sua pontuação final é: " + pontuacao);
        }
    }
}

// Atualiza a exibição das vidas
function atualizarVidas() {
    const vidasCheias = document.querySelectorAll('.vida-cheia');
    const vidasVazias = document.querySelectorAll('.vida-vazia');

    // Mostra as vidas cheias
    for (let i = 0; i < vidas; i++) {
        vidasCheias[i].style.display = 'inline-block';
        vidasVazias[i].style.display = 'none'; // Esconde vidas vazias
    }

    // Esconde as vidas cheias restantes
    for (let i = vidas; i < vidasCheias.length; i++) {
        vidasCheias[i].style.display = 'none';
        vidasVazias[i].style.display = 'inline-block'; // Mostra vidas vazias
    }
}

// Inicia o jogo
function startGame() {
    document.getElementById('mosquit').style.display = 'block'; // Torna o mosquito visível
    document.getElementById('vidas').style.display = 'block'; // Torna as vidas visíveis
    pontuacao = 0; // Reseta a pontuação
    atualizarPontuacao(); // Atualiza a exibição da pontuação

    // Move o mosquito a cada intervalo
    movimentoMosquito = setInterval(() => {
        moverMosquito(window.innerWidth, window.innerHeight);
        iniciarTempoLimite(); // Reinicia o tempo limite
    }, velocidadeMosquito);

    // Chama uma vez inicialmente para posicionar o mosquito
    moverMosquito(window.innerWidth, window.innerHeight);
}

// Define a velocidade do mosquito com base na dificuldade
function setDificuldade(dificuldade) {
    switch (dificuldade) {
        case 'facil':
            velocidadeMosquito = 1500; // 1,5 segundos
            break;
        case 'normal':
            velocidadeMosquito = 1000; // 1 segundo
            break;
        case 'dificil':
            velocidadeMosquito = 500; // 0,5 segundos
            break;
        default:
            velocidadeMosquito = 1500; // Padrão para fácil
            break;
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    const menu = document.getElementById("divmenu");
    const selectedDifficulty = document.createElement("div");

    selectedDifficulty.className = "selected-difficulty";
    document.body.appendChild(selectedDifficulty);

    button.addEventListener("click", () => {
        menu.style.display = "none"; // Esconde o menu

        const selectedRadio = document.querySelector('input[name="value-radio"]:checked');
        if (selectedRadio) {
            const dificuldade = selectedRadio.value;
            setDificuldade(dificuldade); // Define a velocidade com base na dificuldade
        } else {
            selectedDifficulty.textContent = "Dificuldade não selecionada!";
        }

        startGame(); // Inicia o jogo
    });

    // Adiciona evento de clique ao mosquito
    const mosquit = document.getElementById('mosquit');
    mosquit.addEventListener('click', clicarMosquito);
});

// Atualiza a posição do mosquito ao redimensionar a janela
window.addEventListener('resize', () => {
    moverMosquito(window.innerWidth, window.innerHeight);
});

// Lógica para mudar o cursor ao mover o mouse
document.addEventListener('mousemove', (event) => {
    const largura = window.innerWidth;
    const espelharHorizontal = event.clientX < 20 || event.clientX > largura - 20;

    // Alterar o cursor com base na posição
    document.body.style.cursor = `url(mata_mosquito.png) 32 32, auto`;
});
