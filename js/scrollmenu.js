/*Logoscroll*/
$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});

/*portada*/
$(window).on('load', function () {
    $('#slider').nivoSlider();
});

/*Desaparece menu al hacer scroll*/
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
    let Desplazamiento_Actual = window.pageYOffset;
    if (ubicacionPrincipal >= Desplazamiento_Actual) {
        document.getElementById('nav').style.top = '25px';
    }
    else {
        document.getElementById('nav').style.top = '-600px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}

/*boton-Menu-reposive*/
const mostrarMenu = document.querySelector('#menu')
const contenidoMenu = document.querySelector('#options')
mostrarMenu.addEventListener('click', () => {
    mostrarMenu.classList.toggle('animacionMenu')
    contenidoMenu.classList.toggle('activeMenu')
});
