(() => {

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    //declaracion del tipo de dato que acepta la variable Sizes.

    function createProductToJson(title: string, createAt: Date, stock: number, size: Sizes) {
        //Se declaran las variables 
        return {
            title, createAt, stock, size
            //regresa las variables
        }

    }
    const producto1 = createProductToJson('Producto 1', new Date(), 12, 'S');
    console.log(producto1);

    //otra manera de hacer funciones

    //se declara una variable que recibe los parametros seguidos por un = 
    const funcionChida = (parametro: number, parametro1: string) => {
        //Se crea el return seguidod e un => que regresa los parametros de la funcion
        return {
            parametro, parametro1
            //Una funcion puede regresar uno o varios parametros de la misma, no es obligatioro que sean todos los parametros

        }
    }
    const funcion1 = funcionChida(1,'Hola')
    console.log(funcion1)

    //cuando por defecto no se le envia algo a una funcion, por defecto es Undefined, solo se usa null para establecer un objeto 
    //vacio por el usuario
    //Undefinde se utiliza para campos "opcionales" pueden o no estar vacios por muchos motivos y son manejables

})();