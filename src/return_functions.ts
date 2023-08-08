(()=>{
//Funcion con retorno
    //Usando la nueva manera de hacer funcionesa apartir de una constante 
    //se puede agregar el tipo inferido pero por lo que recibe el array se supone (eliminar :number)
const calcTotal = (prices:number[]):number =>{
    let total = 0;
    prices.forEach((item) => {
        //este bloque ese ejecuta por cada que se pasan los elementos
        console.log(item)
        total += item;//se utiliza para sumar los elementos del array
    });
    return total;
}
//los retornos pueden ser de más de un tipo de dato

const rta = calcTotal([1,2,3,4,5]);
console.log('Total',rta);

//funcion sin retorno
//Se coloca void en el tipado de la misma funcion
 const calcVoid = (miNombre:string): void => {
console.log(miNombre);
 }
calcVoid('Diana');

})();