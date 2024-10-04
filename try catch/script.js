function calcularRaizQuadrada(numero) {
    try {
        // Verifica se o argumento é um número
        if (typeof numero !== 'number') {
            throw new Error("O argumento deve ser um número.");
        }
        // Verifica se o número é negativo
        if (numero < 0) {
            throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
        }
        // Calcula a raiz quadrada
        return Math.sqrt(numero);
    } catch (error) {
        return "Erro: " + error.message;
    }
}

function calcular() {
    const input = document.getElementById('numero').value;
    const numero = parseFloat(input);
    const resultado = calcularRaizQuadrada(numero);
    document.getElementById('resultado').innerText = resultado;
}