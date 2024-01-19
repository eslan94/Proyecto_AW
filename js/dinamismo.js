let containerUno=document.querySelector("#container-uno")
let containerDos=document.querySelector("#container-dos")


const containerColor=(elemento, evento)=>{
    switch(evento){
        case 'mouseover':
            elemento.style.backgroundColor = 'bisque';
            elemento.style.fontWeight = 'bold';
            break;
        case 'mouseout':
            elemento.style.backgroundColor = 'white';
            elemento.style.fontWeight = 'normal'
            break;
    }
}

containerUno.addEventListener('mouseover',()=>{
    containerColor(containerDos, 'mouseover');
})

containerUno.addEventListener('mouseout',()=>{
    containerColor(containerDos, 'mouseout');
})









container-flex
contenedor-info