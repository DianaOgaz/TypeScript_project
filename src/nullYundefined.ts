(()=>{

//let number: number = undefined;
//let name: string = null;
//No se puede asignar a este tipo de dato

let myName = null;
let mySecondName = undefined;
//Si se usa el tipo inferido, se queda como any, pero se define para màs exactitud

let myNumber: string | number | null = null;
myNumber = 12;

let myFirstName: string | undefined = undefined;
myFirstName = undefined;
//Se utiliza para cuando aun no se desea asignar el tipado a la variable, esto para evitar conflictos

function saludo (name: string | null){
    let hello = 'hola'
    if(name){
        hello += name;
    }else{
        hello += 'nobody';
    }
    console.log(name);
}
/*
saludo('hola');
saludo('');
*/

function saludo2 (name: string | null){
    let hello = 'hola'
    hello += name?.toLowerCase() || 'nobody';
    //se utiliza ? como un if en caso de que este est vacio, lo representa con un null
    console.log(name);
}
//Esta funcion tiene el mismo funcionamiento que la de arrgiba, solo se utilizò un if màs dimplificado e implicito en la funciòn 
saludo2('');

/*
La gran diferencia entre estos dos es que el logical OR operator (||) toma como valores falsos a 0, NaN, strings vacíos ("", '', ``), false, a demás de null y undefined, mientras que nullsh coalescing operator tomo como valores falso solamente a null y undefined.

En el caso de las funciones se ejecuta la misma, realizan todos los cálculos que tienen que hacer, pero ambos operadadores ?? y || únicamente se fijan en lo que retorna dichas funciones.
En el caso del ejemplo del profesor veo más factible utilizar nullish coalescing operator en vez de logical OR operator.
*/

})();