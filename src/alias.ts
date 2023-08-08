(()=>{

    type userId = string | number
   //Se puede asignar el type a la variable para evitar tener que escribir el tipo de dato cada vez que se le haga referencia

    function greeting(userId: userId) {
        
        if (typeof userId == 'string') {
            //El typeof funciona para extraer el tipo de dato determinado de la variable
            console.log(`string ${userId.toLowerCase()} `);
            //se tiene que concatenar para poder imprimir 

        } 
    }

    //Esto permite establecer solo los valores permitidos que puede recibir la variable
    let tamaño1: 'S' | 'M'  | 'L'  |  'XL'  ;
    tamaño1 = 'S';
    tamaño1 = 'M';
    tamaño1 = 'L';
    //tamaño1 = 'asdkashd';
    
    //Tambien puede hacerse de la siguiente manera
    type sizes = 'S' | 'M'  | 'L'  |  'XL'  ; 
    let tamaño: sizes;
    tamaño = 'S';
    tamaño = 'M';
    tamaño = 'L';
    //tamaño = 'asdkashd';

})();