let menu = document.getElementById('menu-hover')

// Menu index -==-=-=-=-=-=-=-=-=-=-=-=--=-==-=-=-=-=-=-=-=-=-=-=-=--=-==-=-=-=-=-=-=-=-=-=-=-=--=-==-=-=-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=--=

function paginaInicial(){
    if (menu.style.display == 'none'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

// Sistema de avaliação -=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-==-=-=

let oneStar = document.getElementById('one-star')
let twoStar = document.getElementById('two-star')
let threeStar = document.getElementById('three-star')
let fourStar = document.getElementById('four-star')
let fiveStar = document.getElementById('five-star')

function starFillClickOne(){
    oneStar.src = 'assets/img/fill-star.png'
    twoStar.src = 'assets/img/star.png'
    threeStar.src = 'assets/img/star.png'
    fourStar.src = 'assets/img/star.png'
    fiveStar.src = 'assets/img/star.png'
}

function starFillClickTwo(){
    oneStar.src = 'assets/img/fill-star.png'
    twoStar.src = 'assets/img/fill-star.png'
    threeStar.src = 'assets/img/star.png'
    fourStar.src = 'assets/img/star.png'
    fiveStar.src = 'assets/img/star.png'
}

function starFillClickThree(){
    oneStar.src = 'assets/img/fill-star.png'
    twoStar.src = 'assets/img/fill-star.png'
    threeStar.src = 'assets/img/fill-star.png'
    fourStar.src = 'assets/img/star.png'
    fiveStar.src = 'assets/img/star.png'
}

function starFillClickFour(){
    oneStar.src = 'assets/img/fill-star.png'
    twoStar.src = 'assets/img/fill-star.png'
    threeStar.src = 'assets/img/fill-star.png'
    fourStar.src = 'assets/img/fill-star.png'
    fiveStar.src = 'assets/img/star.png'
}

function starFillClickFive(){
    oneStar.src = 'assets/img/fill-star.png'
    twoStar.src = 'assets/img/fill-star.png'
    threeStar.src = 'assets/img/fill-star.png'
    fourStar.src = 'assets/img/fill-star.png'
    fiveStar.src = 'assets/img/fill-star.png'
}

let containerRating = document.getElementById('container-avaliacao-manobrista')
let okClick = document.getElementById('notificacao-agradecimento')

function fadeNotification() {
    okClick.style.display = 'block'
}

//Edicao-rotina -=-=-=-=-=-=-==-=-=-=--=-=-=-=-=-=-==-=-=-=--=-=-=-=-=-=-==-=-=-=--=-=-=-=-=-=-==-=-=-=--=-=-=-=-=-=-==-=-=-=--=-=-=-=-=-=-==-=

let inputTitulo = document.getElementById('input-titulo')
let diaSemana = 'nada'
let timeChegada = document.getElementById('time-chegada')
let timeSaida = document.getElementById('time-saida')

let tituloRotina = document.getElementById('titulo')
let horario = document.getElementById('horario1')


function Sunday(){
    diaSemana = 'sunday'
}

function Monday(){
    diaSemana = 'monday'
}

function Tuesday(){
    diaSemana = 'tuesday'
}

function Wednesday(){
    diaSemana = 'wednesday'
}

function Thursday(){
    diaSemana = 'thursday'
}

function Friday(){
    diaSemana = 'friday'
}

function Saturday(){
    diaSemana = 'saturday'
}

function confirmaEdicao(){
    tituloRotina.innerHTML = `${inputTitulo}`
    horario.innerHTML = `${timeChegada} <br>
    ${timeSaida} <br>
    ${diaSemana}` 
}