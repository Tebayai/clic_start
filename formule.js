

$('.menu').on('click', function(){
  $(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.navmenu').addClass("sticky");
    }else{
        $('.navmenu').removeClass("sticky");
    }

    }); 
});

/*ferme le menu quand on clique sur un lien*/
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