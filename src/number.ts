(() => {

  let myProductPrice = 12;
  myProductPrice = 100;

  console.log('myProductPrice', myProductPrice);
  //Las comillas son para que se imprima el nombre de la variable
  //Notamos que se imprime el ultimo valos de la variable y no es necesario el tipado (no es necesario especificar el tipo de dato).

  let costumerAge: number = 29;
  costumerAge = costumerAge + 1;
  console.log('costumerAge', costumerAge)
  //Se pueden concatenar numeros pero no otro tipo de dato.

  let productInStock: Number;
  //Para inicializar una variable A FUERZA se debe colocar el tipo de dato.
  console.log('productInStock', productInStock);
  //El motor de inferencia nos detecta que la varaible esta sin asignar

  if (productInStock > 10) {
    console.log('productInStock', productInStock);

  }//Tambien detecta el error si la variable se utiliza dentro de una funcion.


})();
