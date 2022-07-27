    function generarArray(object){ // Toma un objeto y lo devuelve como un array
        const array = [];
        
        const keys = Object.keys(object);

        keys.forEach(key => {
            array.push(object[key]);
        });

        return array;
    };

    function generarNumero(min, max){ // Devuelve un Array conteniendo 3 numeros
        const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);

        return numeroRandom;
    };

    function generarNumeros(){
        const nums = {
            x: generarNumero(1, 10),
            y: generarNumero(1, 10)
        };

        return nums;
    };

    function generarOperador(){ // Devuelve un operador aritmetico
        const operadores = ['+', '-', '*'];

        return operadores[generarNumero(0,operadores.length - 1)];
    };

    function hacerOperacion (operador, x, y){
        switch (operador) {
            case '+': return x + y;
            case '-': return x - y;
            case '*': return x * y;
        }
        return '';
    };

    function generarMensaje(operador, numeros){
        return `Haz ${numeros.x} ${operador} ${numeros.y}!: `
    };
