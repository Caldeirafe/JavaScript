function verificar() {
    // Obtendo o valor do ano de nascimento e o sexo selecionado
    const anoNascimento = document.getElementById('nascimento').value;
    const sexo = document.querySelector('input[name="sexo"]:checked');
    let p = document.getElementById('p')

    if (!anoNascimento || !sexo) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    // Exibindo a idade e a imagem com base no sexo
    p.innerText = (`Sua idade é ${idade} anos.`);

    const img = document.getElementById('img');
    if (sexo.value === 'masculino') {
        img.src = 'caminho/para/imagem/masculino.jpg'; // Substitua pelo caminho real
    } else if (sexo.value === 'feminino') {
        img.src = 'caminho/para/imagem/feminino.jpg'; // Substitua pelo caminho real
    }
}
