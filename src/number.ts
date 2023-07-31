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

  let productInStock: Number = 1;
  //Para inicializar una variable A FUERZA se debe colocar el tipo de dato.
  console.log('productInStock', productInStock);
  //El motor de inferencia nos detecta que la varaible esta sin asignar

  //Tambien detecta el error si la variable se utiliza dentro de una funcion.

  let bin = 0b0101; //Se utiliza 0b para identificar binarios
  console.log('bin', bin);
  let hex = 0xfff; //Se utiliza 0x para identificar hexadecimales
  console.log('hex', hex);

  let price: number;
// Utilizar minusculas para el tipado ya que en mayusculas se usa para una palabra reservada

})();
