document.addEventListener("DOMContentLoaded", function () {
    crearGaleria()
    navegacionFija()
    resaltarEnlace();
    scrollNav();
})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFertival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function () {
        if (sobreFertival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })

}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')

    const cantidad_imagenes = 16;

    for (let i = 1; i <= cantidad_imagenes; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = `Imagen Galeria`

        //event handler

        imagen.onclick = function () {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen)

    }
}

function mostrarImagen(i) {

    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = `Imagen Galeria`


    //generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    modal.appendChild(imagen);

    // Boton cerar modal
    const btnCerrarModal = document.createElement('BUTTON');
    btnCerrarModal.textContent = 'X';
    btnCerrarModal.classList.add('btn-cerrar');
    btnCerrarModal.onclick = cerrarModal;

    modal.appendChild(btnCerrarModal);

    //Agreagr al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');

    setTimeout(() => {
        modal?.remove();

        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500)

}

function resaltarEnlace() {
    document.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');
        let actual = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id;
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + actual) {
                link.classList.add('active');
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'});
        })
    })
 
}