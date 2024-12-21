document.addEventListener("DOMContentLoaded",function() {
    crearGaleria()
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    const cantidad_imagenes = 16;

    for(let i = 1; i <= cantidad_imagenes; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = `Imagen Galeria`

        //event handler

        imagen.onclick = function(){
           mostrarImagen(i);
        }

        galeria.appendChild(imagen)
        
    }
}

function mostrarImagen(i){
    //generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    //Agreagr al HTML
    const body = document.querySelector('body');
    body.appendChild(modal);

    console.log(modal);
}

function cerrarModal(){
    const modal = document.querySelector('.modal');
    modal?.remove();
}