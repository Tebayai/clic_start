/*event d'ecriture */
$('.menu').on('click', function(){
    $('.toggle').click();
  });
  
  $(document).ready(function(){
  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Tout commence par un clic"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: false
  });
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
    width: 0,
    ease: 'power1.out' // Optional easing for smoother animation
})


document.addEventListener('DOMContentLoaded', function() {
    // Récupérer toutes les sections et éléments de menu
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Enlever la classe 'active' de tous les éléments <li>
                navLi.forEach(li => li.classList.remove('active'));
                
                // Ajouter la classe 'active' à l'élément correspondant
                const activeSection = entry.target.getAttribute('id');
                document.querySelector(`nav ul li a[href="#${activeSection}"]`).parentElement.classList.add('active');
            }
        });
    }, {
        threshold: 0.3 // 70% visible pour être considéré comme "active"
    });

    // Observer chaque section
    sections.forEach(section => observer.observe(section));
});

