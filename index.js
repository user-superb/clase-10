    // Variables

    const $temporizador = document.querySelector('#temporizador');
    const $desafioColores = document.querySelector('#desafio-colores');
    const $resultado = document.querySelector('#resultado');
    const $puntos = document.querySelector('#puntos');

    const mensajeEsCorrecto = 'Tu respuesta es correcta!';
    const mensajeEsIncorrecto = 'Tu respuesta es incorrecta!';


    let yaRespondio; // Para que el usuario no cambie la respuesta cuando ya respondio
    let cantidadPuntos = 0;

    

    // Funciones

    function cuentaAtras(){ // Funcion a ejecutar cada 1000 milisegundos

        if ($temporizador.textContent <= '0'){ // Si el temporizador llega a 0
            $temporizador.textContent = segundos; // Reiniciar contador

            cambiarPuntos(); // Segun lo que diga resultado, aumenta o disminuye puntos
            limpiarColores() // Limpia los colores sino itera infinitamente
            asignarColores(); // Asigna los colores a cada caja
            asignarObjetivo(); // Toma un color de los colores presentes
            reiniciarRespuesta(); // Oculta la respuesta y asigna yaRespondio a false

        } else {
            $temporizador.textContent = Number($temporizador.textContent) - 1; // Reduce en 1
        };
    };

    function inicializar(){
        asignarColores(); 
        asignarObjetivo(); 
        reiniciarRespuesta();
    };


    // Temporizador

    const segundos = 5;
    $temporizador.textContent = segundos;

    inicializar();
    setInterval(cuentaAtras,1000);
    