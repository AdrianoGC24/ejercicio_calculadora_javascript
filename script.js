const botones = document.querySelectorAll('.btn');
const panelNumero1 = document.querySelector('#numero1');
const panelOperacion = document.querySelector('#operacion');
const panelNumero2 = document.querySelector('#numero2');
const panelResultado = document.querySelector('#resultado');

let numero1 = ''
let numero2 = ''
let operacion = ''

panelNumero1.textContent = numero1;
panelOperacion.textContent = operacion;
panelNumero2.textContent = numero2;

function actualizarPantalla () {
    panelNumero1.textContent = numero1;
    panelOperacion.textContent = operacion;
    panelNumero2.textContent = numero2;
    panelResultado.textContent = '';
}

botones.forEach(boton => {
    boton.addEventListener('click', () => {

        const botonseleccionado = boton.textContent;

        if(boton.id === 'c') {
            numero1 = ''
            numero2 = ''
            operacion = ''
            actualizarPantalla();
            return;
        }

        if (!isNaN(botonseleccionado)) {

            if (operacion === '') {
                numero1 += botonseleccionado;
            } else {
                numero2 += botonseleccionado;
            }

            actualizarPantalla();
            return;
            }

        if (boton.id === 'borrar'){
            if (numero2 !== '') {
                numero2 = numero2.slice(0, -1)
            } else if (operacion !== ''){
                operacion = ''
            } else {
                numero1 = numero1.slice(0,-1)
            }

            actualizarPantalla();
            return;
        }
        

        if (botonseleccionado === '+' || botonseleccionado === '-' || botonseleccionado === '*' || botonseleccionado === '/') {
            if (numero1 === '') {
                return;
            }
            operacion = botonseleccionado
            actualizarPantalla()
            return;
        }


        if (boton.id === 'igual') {
            
        }
    })
})