(() => {
    let userId: string | number;
    userId = 'Hola'
    userId = 123;

    function greeting(myText: string | number) {
        //una funcion que va a recibir una variable de nombre myText que puede tener dos tipos de datos
        if (typeof myText == 'string') {
            //El typeof funciona para extraer el tipo de dato determinado de la variable
            console.log(`string ${myText.toLowerCase()} `);
            //se tiene que concatenar para poder imprimir 

        } else {
            console.log(`number ${myText.toFixed(5)} `);
            //se concatena para poder imprimir correctamenre los valores
            

        }
    }
    greeting('pepe')
   
    //No puede recibir otro tipo de dato que no este preasignado
    //greeting({}

})();