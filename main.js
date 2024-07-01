

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let liens = document.getElementsByClassName('menu__link');

for(let i = 0 ; i < liens.length ; i++) {
    liens[i].addEventListener('click', function() {
        body.classList.toggle('open');
    })
}

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

let tl = gsap.timeline();

tl.from('.home', {
    duration: 0.25,
    filter: "blur(10px)"
})

tl.from('.overlay', {
    duration: 0.50,
    x: '-100%'
})

tl.from('.logo, .toggle, .menu', {
    duration: 0.25,
    opacity: 0
});

tl.from('.text_top_home, .text_mid_home, .text_bottom', {
    duration: 0.55,
    opacity: 0
})

tl.from('.text_top_home .sep', {
    duration: 0.75,
    width: '0px'
})

/*ferme le menu quand on clique sur un lien*/
$('.menu').on('click', function(){
  $('.toggle').click();
});



