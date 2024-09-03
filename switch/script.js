document.addEventListener('DOMContentLoaded', function() {
    // Selecionar os elementos do DOM
    const inputDia = document.getElementById('dia');
    const button = document.getElementById('but');
    const resultParagraph = document.getElementById('p');

    // Adicionar um evento de clique ao botão
    button.addEventListener('click', function() {
        // Obter o valor do input e convertê-lo para número
        const dia = parseInt(inputDia.value, 10);
        let diaSemana;

        // Verificar se o valor é válido e dentro do intervalo permitido
        if (isNaN(dia) || dia < 1 || dia > 7) {
            diaSemana = "Número inválido. Por favor, insira um número de 1 a 7.";
        } else {
            // Usar switch para determinar o dia da semana
            switch (dia) {
                case 1:
                    diaSemana = "Segunda-feira";
                    break;
                case 2:
                    diaSemana = "Terça-feira";
                    break;
                case 3:
                    diaSemana = "Quarta-feira";
                    break;
                case 4:
                    diaSemana = "Quinta-feira";
                    break;
                case 5:
                    diaSemana = "Sexta-feira";
                    break;
                case 6:
                    diaSemana = "Sábado";
                    break;
                case 7:
                    diaSemana = "Domingo";
                    break;
            }
        }

        // Atualizar o conteúdo do parágrafo com o resultado
        resultParagraph.textContent = diaSemana;
    });
});
