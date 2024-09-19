document.getElementById('btn').addEventListener('click', function() {
    //valores dos inputs
    let numero = parseInt(document.getElementById('numero').value)

    
    resultado.value = ''; // Limpa resultados anteriores
    //verificar resultados validos
    if (isNaN(numero) || numero <= 0) {
        resultado = 'Por favor, insira valores válidos.';
    } else {
        // Realizando a tabuada

            for (let i = 1; i <= 10; i++) {
            resultado.value += `${numero} x ${i} = ${numero * i}\n`;
            
        }
    }
    })