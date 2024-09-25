function calcularMediaESoma() {
    let N
    let soma = 0
    let vet = [] //vetor para armazenar os numeros

    //solicitar numeros
    do {
        N = parseInt(prompt("Quantos numeros você vai digitar?"))
    } while (N <= 0 || N > 10)

    for (let i = 0; i < N; i++) {
        let numero = parseInt(prompt("Digite o numero:"))
        vet.push(numero) // adicionar numero ao vetor
        soma += numero   //atualizar a soma
    }
    let media = soma / 2

    document.write('<table border="1">');
    document.write('<tr><th>Valores</th></tr>');
    for (let i = 0; i < N; i++) {
        document.write('<tr><td>' + vet[i] + '</td></tr>'); // Exibir os valores
    }
    document.write('<tr><td>Soma: ' + soma + '</td></tr>'); // Exibir a soma
    document.write('<tr><td>Média: ' + media + '</td></tr>'); // Exibir a média
    document.write('</table>');
}


calcularMediaESoma()
