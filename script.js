const botones = document.querySelectorAll('.btn');
const panelNumero1 = document.querySelector('#numero1');
const panelOperacion = document.querySelector('#operacion');
const panelNumero2 = document.querySelector('#numero2');
const panelResultado = document.querySelector('#resultado');

let numero1 = ''
let numero2 = ''
let operacion = ''

panelNumero1.value = numero1;
panelOperacion.value = operacion;
panelNumero2.value = numero2;



function actualizarPantalla () {

    panelNumero1.value = numero1;
    panelOperacion.value = operacion;
    panelNumero2.value = numero2;
    panelResultado.value = '';
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

        if (!isNaN(botonseleccionado) || botonseleccionado === ".") {

    if (operacion === '') {

        if (botonseleccionado === "." && numero1.includes(".")) return;
        numero1 += botonseleccionado;

        } else {

        if (botonseleccionado === "." && numero2.includes(".")) return;
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

            const n1 = parseFloat(numero1);
            const n2 = parseFloat(numero2);
            let resultado = 0;

            if (operacion === '+') resultado = n1 + n2;
            if (operacion === '-') resultado = n1 - n2;
            if (operacion === '*') resultado = n1 * n2;
            if (operacion === '/') resultado = n2 !== 0 ? n1 / n2 : 'Error';

            panelResultado.value = resultado;

            
        }
    })
})