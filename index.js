    // Variables

    const $iniciar = document.querySelector('#iniciar');
    const $temporizador = document.querySelector('#temporizador');
    const $resultado = document.querySelector('#resultado');
    const $puntos = document.querySelector('#puntos');
<<<<<<< Updated upstream
=======

    const $desafioColores = document.querySelector('#desafio-colores');

    const $desafioNumeros = document.querySelector('#desafio-numeros');
    const $problema = document.querySelector('#problema');
    const $enviar = document.querySelector('#enviar');
    let $respuesta = document.querySelector('#respuesta');
    let resultadoCorrecto;
>>>>>>> Stashed changes

    const mensajeEsCorrecto = 'Tu respuesta es correcta!';
    const mensajeEsIncorrecto = 'Tu respuesta es incorrecta!';

<<<<<<< Updated upstream
=======
    class desafio{
        constructor(elem, func){
            this.elem = elem; // Guarda el elemento
            this.func = func; // Guarda la funcion a llamar
        }
    };

    let desafioColores = new desafio($desafioColores, llamarDesafioColores);
    let desafioNumeros = new desafio($desafioNumeros, llamarDesafioNumeros);

    const desafios = [desafioColores, desafioNumeros];

    const segundos = 5; // Intervalo entre cada juego
>>>>>>> Stashed changes

    let yaRespondio = true; // Para que el usuario no cambie la respuesta cuando ya respondio
    let cantidadPuntos = 0;
    let desafioActual = desafios[0]; 

    // Funciones
    
    ///////////////////////////////////////////////////////////////////

    function respuestaIncorrecta(){
        if (!yaRespondio){
            $resultado.textContent = mensajeEsIncorrecto;
            $resultado.classList.remove('ocultar');
        }

        yaRespondio = true;
    };

    function respuestaCorrecta(){
        if (!yaRespondio){
            $resultado.textContent = mensajeEsCorrecto;
            $resultado.classList.remove('ocultar');
        }

        yaRespondio = true;
    };

    function reiniciarRespuesta(){
        $resultado.classList.add('ocultar');
        $resultado.textContent = '';

        yaRespondio = false;
    };

    ///////////////////////////////////////////////////////////////////
    
    function ocultarElemento(elemento){
        elemento.classList.add('ocultar');
    };

    function mostrarElemento(elemento){
        elemento.classList.remove('ocultar');
    }

    function llamarDesafioColores(){
        limpiarColores() // Limpia los colores sino itera infinitamente
        asignarColores(); // Asigna los colores a cada caja
        asignarObjetivo(); // Toma un color de los colores presentes
    };

    function llamarDesafioNumeros(){
        let numeros = generarNumeros(); console.log(numeros);
        let operador = generarOperador();

        resultadoCorrecto = hacerOperacion(operador, numeros.x, numeros.y);
        
        $problema.textContent = generarMensaje(operador, numeros)
    };

    ///////////////////////////////////////////////////////////////////

    function elegirDesafioRandom(){
        return desafios[generarNumero(0,desafios.length - 1)];
    };

    function llamarNuevoDesafio(){
        ocultarElemento(desafioActual.elem); // Oculta el desafio anterior
        cambiarPuntos();
        reiniciarRespuesta(); // Oculta la respuesta y asigna yaRespondio a false
        
        desafioActual = elegirDesafioRandom(); console.log(`desafio actual: ${desafioActual.elem.id}`);
        mostrarElemento(desafioActual.elem);
        desafioActual.func();
    };

    ///////////////////////////////////////////////////////////////////

    function cambiarPuntos(){
        if ($resultado.textContent == mensajeEsIncorrecto){
            cantidadPuntos--;
        } else if ($resultado.textContent == mensajeEsCorrecto){
            cantidadPuntos++;
        } else if (!yaRespondio){   // El usuario no respondio
            cantidadPuntos--; 
        }

        $puntos.textContent = cantidadPuntos;
    };

    ///////////////////////////////////////////////////////////////////

    function asignarOnClick(){
        const keys = Object.keys(cajas);

        keys.forEach(key => { // Asigna los eventos para cada caja de colores
            cajas[key].elem.onclick = (event) => {
                if (cajas[key].color == cajaObjetivo.color && cajas[key].color !== undefined){ // Si el color de la caja clickeada es el mismo que el de la caja objetivo, y el color es distinto a undefined, entonces
                    respuestaCorrecta();
                } else {
                    respuestaIncorrecta();
                }};
        });

        $enviar.onclick = (event) => {
            if (($respuesta.value | 0) == resultadoCorrecto){
                respuestaCorrecta();
            } else {
                respuestaIncorrecta();
            };

            event.preventDefault();
        };
    };

    asignarOnClick(); // Se encarga de asignar todos los eventos

    ///////////////////////////////////////////////////////////////////

    function cuentaAtras(){ // Funcion a ejecutar cada 1000 milisegundos
        if ($temporizador.textContent <= '0'){ // Si el temporizador llega a 0
            $temporizador.textContent = segundos; // Reiniciar contador

            llamarNuevoDesafio();
        } else {
            $temporizador.textContent = Number($temporizador.textContent) - 1; // Reduce en 1
        };
    };

<<<<<<< Updated upstream
    function inicializar(){
        asignarColores(); 
        asignarObjetivo(); 
        reiniciarRespuesta();
    };


    // Temporizador

    const segundos = 5;
    $temporizador.textContent = segundos;
=======
    function iniciarJuego(){
        $temporizador.textContent = 3;
        $temporizador.classList.remove('ocultar');

        $puntos.classList.remove('ocultar');

        $iniciar.classList.add('ocultar');

        setInterval(cuentaAtras,1000);
    };
>>>>>>> Stashed changes

    inicializar();
    setInterval(cuentaAtras,1000);
    