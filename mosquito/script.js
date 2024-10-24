// script.js

let velocidadeMosquito; // Variável para armazenar a velocidade do mosquito
let pontuacao = 0; // Variável para armazenar a pontuação
let vidas = 3; // Inicialmente, 3 vidas
let tempoLimite; // Variável para armazenar o timeout que controla a perda de vida

// Função para atualizar a posição do mosquito
function atualizarTamanho() {
    let largura = window.innerWidth;
    let altura = window.innerHeight;
    moverMosquito(largura, altura);
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

// Função para aumentar a pontuação e atualizar a tela
function clicarMosquito() {
    pontuacao++;
    document.getElementById('pontuacao').textContent = `Pontuação: ${pontuacao}`;

    const mosquit = document.getElementById('mosquit');
    mosquit.style.opacity = '0'; // Faz o mosquito desaparecer
    setTimeout(() => {
        mosquit.style.opacity = '1'; // Faz o mosquito reaparecer
        moverMosquito(window.innerWidth, window.innerHeight); // Move o mosquito após o clique
    }, 300); // Tempo em milissegundos antes de reaparecer

    // Resetar o tempo limite para não perder vida
    clearTimeout(tempoLimite);
    iniciarTempoLimite();
}

// Função para iniciar o tempo limite
function iniciarTempoLimite() {
    tempoLimite = setTimeout(() => {
        perderVida(); // Chama a função para perder vida se não clicar
    }, 2000); // 2 segundos para perder vida se não clicar
}

// Função para perder vida
function perderVida() {
    if (vidas > 0) {
        vidas--;
        atualizarVidas(); // Atualiza a exibição das vidas

        // Se as vidas chegarem a 0, exibe Game Over
        if (vidas === 0) {
            document.getElementById('gameover').style.display = 'block'; // Exibe a imagem de Game Over
            alert("Game Over! Sua pontuação final é: " + pontuacao);
            // Aqui você pode adicionar lógica para reiniciar o jogo ou parar tudo
        }
    }
}

// Função para atualizar a exibição das vidas
function atualizarVidas() {
    const vidasCheias = document.querySelectorAll('.vida-cheia');
    const vidasVazias = document.querySelectorAll('.vida-vazia');

    // Mostra as vidas cheias
    for (let i = 0; i < vidas; i++) {
        vidasCheias[i].style.display = 'block';
        vidasVazias[i].style.display = 'none'; // Esconde vidas vazias
    }

    // Esconde as vidas cheias restantes e mostra as vazias
    for (let i = vidas; i < vidasCheias.length; i++) {
        vidasCheias[i].style.display = 'none';
        vidasVazias[i].style.display = 'block'; // Mostra vidas vazias
    }
}

// Função para iniciar o jogo
function startGame() {
    // Torna o mosquito e as vidas visíveis
    document.getElementById('mosquit').style.display = 'block';
    document.getElementById('vidas').style.display = 'block';

    // Atualiza a posição do mosquito a cada intervalo baseado na velocidade
    setInterval(() => {
        moverMosquito(window.innerWidth, window.innerHeight);
        iniciarTempoLimite(); // Reinicia o tempo limite a cada movimento
    }, velocidadeMosquito);

    atualizarTamanho(); // Chama inicialmente para posicionar o mosquito
}

// Função para definir a velocidade do mosquito com base na dificuldade
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

// Event listener para o botão "Começar!"
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
            const dificuldade = selectedRadio.value; // Usar o value diretamente
            setDificuldade(dificuldade); // Define a velocidade com base na dificuldade
        } else {
            selectedDifficulty.textContent = "Dificuldade não selecionada!";
        }

        startGame(); // Inicia o jogo
    });
});

// Atualiza a posição do mosquito ao redimensionar a janela
window.addEventListener('resize', atualizarTamanho);

// Lógica para mudar o cursor ao mover o mouse
document.addEventListener('mousemove', (event) => {
    const largura = window.innerWidth;
    const altura = window.innerHeight;

    const espelharHorizontal = event.clientX < 20 || event.clientX > largura - 20;

    if (espelharHorizontal) {
        document.body.style.cursor = `url(mata_mosquito.png) 32 32, auto`;
    } else {
        document.body.style.cursor = `url(mata_mosquito.png) 32 32, auto`;
    }
});

// Adiciona o evento de clique ao mosquito
document.addEventListener('DOMContentLoaded', () => {
    const mosquit = document.getElementById('mosquit');
    mosquit.addEventListener('click', clicarMosquito);
});
