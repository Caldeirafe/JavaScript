let a = document.getElementById('vel')
let b = document.getElementById('but')
let p = document.getElementById('p')

b.addEventListener('click', clicar)
function clicar(){

    if (a.value > 80)
        p.innerText=('Multado')
    else
        p.innerText=('Não multou')
}