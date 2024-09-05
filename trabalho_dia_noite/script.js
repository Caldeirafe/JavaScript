function myfunction() {
    let body = document.getElementById('body')
    let mens = document.getElementById('hora')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let img = document.getElementById('img')

    if (hora >= 6 && hora <= 11) {

        mens.innerText = ("Bom dia! Agora são " + hora + " Horas " + " e " + min + " Minutos")

    } else if (hora >= 12 && hora <= 17) {

        mens.innerText = (" Boa Tarde! Agora são " + hora + " Horas " + " e " + min + " Minutos")
        body.style.backgroundColor = 'orange'
        img.src = 'tarde.jpg'

    } else if (hora >= 18 && hora < 24) {

        mens.innerText = (" Boa Noite! Agora são " + hora + " Horas " + " e " + min + " Minutos")
        body.style.backgroundColor = 'blueviolet'
        img.src = 'noite.jpg'

    } else {

        mens.innerText = (" Boa Madrugada! Agora são " + hora + " Horas " + " e " + min + " Minutos")
        body.style.backgroundColor = 'grey'
        img.src = 'madruga.jpg'
    }
}
