let a = document.getElementsByClassName('tabela')[2]

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'clicou'
    a.style.background = 'red'
}

function entrar(){
    a.innerText = 'Entrou!'
}

function sair(){
    a.innerText = 'Saiu'
    a.style.background = 'green'
}
