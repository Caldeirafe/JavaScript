document.getElementById('btn').addEventListener('click', function() {
//valores dos inputs
let inicio = parseInt(document.getElementById('inicio').value)
let passo = parseInt(document.getElementById('passo').value)
let fim = parseInt(document.getElementById('fim').value)

let resultado = ''
//verificar resultados validos
if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
    resultado = 'Por favor, insira valores válidos.';
} else {
    // Realizando a contagem
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            resultado += `${i} \u{1F449}`;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            resultado += `${i} \u{1F449}`;
        }
    }
}

//resultado
document.getElementById('bandeira').textContent = resultado += `\u{1F3C1}` || 'Contagem finalizada!';
})