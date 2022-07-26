    class colorBox {
        constructor(elem, color, colorNombre){
            this.elem = elem;
            this.color = color; // Para facil acceso, asi en vez de 'cajas[key].elem.style.backgroundColor' hago 'cajas[key].color'.
        }
    };

    const cajas = {
        c1: new colorBox(document.querySelector('#caja1')),
        c2: new colorBox(document.querySelector('#caja2')),
        c3: new colorBox(document.querySelector('#caja3')),
        c4: new colorBox(document.querySelector('#caja4')),
        c5: new colorBox(document.querySelector('#caja5')),
        c6: new colorBox(document.querySelector('#caja6')),
        c7: new colorBox(document.querySelector('#caja7')),
        c8: new colorBox(document.querySelector('#caja8')),
        c9: new colorBox(document.querySelector('#caja9')),
        c10: new colorBox(document.querySelector('#caja10'))
    };

    // Desafortunadamente hay que poner manualmente cada caja, en este objeto y en el index.html
    // 

    const cajaObjetivo = new colorBox(document.querySelector('#cajaObjetivo'));

    const valores = {
        rojo: 'rgb(224,102,102)',
        verde: 'rgb(147,196,125)',
        azul: 'rgb(111,168,220)',
        amarillo: 'rgb(255,217,102)',
        purpura: 'rgb(103,78,167)',
        naranja: 'rgb(246,178,107)',
        rosa: 'rgb(194,123,160)',
        blanco: 'rgb(255,255,255)',
        gris: 'rgb(194,194,194)',
        negro: 'rgb(0,0,0)'
    };

    const colores = generarArrayColores(valores);
    let coloresPresentes = [];

    //// FUNCIONES

    function generarArrayColores(valores){ // Toma un objeto
        const color_key = Object.keys(valores);
        const colores = [];

        color_key.forEach(color => {        // Esto transforma un Objeto a un Array, el cual este Array guarda unicamente los valores
        colores.push(valores[color]);
        });

        return colores; // Devuelve un array
    }

    function colorEstaPresente(color){ // Comprueba si el color ya se encontraba en alguna caja
        const keys = Object.keys(cajas);
        
        let colorPresente = false;

        keys.forEach(key => {
            if (cajas[key].color === color){
                return colorPresente = true;
            }
        });

        return colorPresente;
    };

    function limpiarColores(){
        const keys = Object.keys(cajas);

        keys.forEach(key => {
            cajas[key].color = '';
            cajas[key].elem.style.backgroundColor = cajas[key].color;
        });

        coloresPresentes = [];
    };


    function asignarColores(){ // Asigna un color distinto a cada caja
        const keys = Object.keys(cajas); // Necesario para iterar en un objeto
    
        keys.forEach(key => {
            let numeroRandom = Math.floor(Math.random() * colores.length);
            let colorRandom = colores[numeroRandom];

            while (colorEstaPresente(colorRandom)){ // Mientras el color generado aleatoriamente este presente entonces..
                numeroRandom = Math.floor(Math.random() * colores.length); // Genera un nuevo indice
                colorRandom = colores[numeroRandom]; // Saca del array colores el color que se encuentre en el indice
                                                     // Si vuelve a sacar un color que ya se encontraba presente entonces vuelve a iterar
            };

            cajas[key].color = colorRandom;
            cajas[key].elem.style.backgroundColor = cajas[key].color;

            coloresPresentes.push(colorRandom);
        });
    };

    function asignarObjetivo(){
        let numeroRandom = Math.floor(Math.random() * coloresPresentes.length);
        let colorRandom = coloresPresentes[numeroRandom];

        cajaObjetivo.color = colorRandom;
        cajaObjetivo.elem.style.backgroundColor = cajaObjetivo.color;
    };
