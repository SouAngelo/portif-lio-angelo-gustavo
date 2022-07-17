const btnHamb = document.getElementById('check')
const ul = document.querySelector('.menu')

function menu(){
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}

function menuSair (){
    nav.classList.toggle('active')
}

 btnHamb.addEventListener('click', menu)
 ul.addEventListener('click', menuSair)

// Scroll suave

const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;


        window.scroll({
            top: to,
            behavior: "smooth"
        })
    }
})

let btnVer = document.getElementById('topoBtn')

btnVer.addEventListener('click', function(){
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })
})





// btn galeria

const btnVerMais = document.getElementById('verMais')
const hideOn = document.querySelector('.hide')
const hideOn2 = document.querySelector('.hide2')
const hideOn3 = document.querySelector('.hide3')

btnVerMais.addEventListener('click', function(){
    if(hideOn === 'block'){
        hideOn.style.display = 'none'
    } else{
        hideOn.style.display = 'block'
    }

    btnVerMais.style.display = 'none'
})
btnVerMais.addEventListener('click', function(){
    if(hideOn2 === 'none'){
        hideOn2.style.display = 'none'
    } else{
        hideOn2.style.display = 'block'
    }
})
btnVerMais.addEventListener('click', function(){
    if(hideOn3 === 'block'){
        hideOn3.style.display = 'none'
    } else{
        hideOn3.style.display = 'block'
    }
})