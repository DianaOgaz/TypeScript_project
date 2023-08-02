(()=>{

let prices = [1,2,3,4,5,6, 'hola', true];
//Un arreglo puede almacenar varios tipos de datos.
//let numbers:number = [1,1,1,1,'hola'];
//Si le das el tipado, ahora el arreglo será de un solo tipo de dato.

//prices.push('sas');
prices.push(212131212);

let aMixto: (boolean | string | number)[] = ['hola', 24];
//tipo de dato, nombre, tipado, llaves (especificando que es un arreglo)
aMixto.push(12);
console.log(aMixto);

let aObjetos: (boolean | string | number | object)[] = ['hola', 24];
aObjetos.push({}); //Objeto vacio
aObjetos.push([]); //Tambien deja incertar arreglos, eso esta raro

let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.map(numero => numero * 2);
//numero dentro de la funcion puede tener cualquier nombre, esto hace referencia al nombre del componente dentro del arreglo 

})();