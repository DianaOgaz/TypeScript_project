(()=>{
//Otra manera de declarar el tipado de las funciones 

//se declara el tipado para sizes
type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'

//Aqui declaramos el tipado del objeto
type product =  {title:string, createAt:Date, stock: number, size?:Sizes};
//declaramos el arreglo que guardará los valores de la funcion, tendrá el tipado declarado anteriormente
const products: product[] = [];
//se declara la funcion que recibe el parametro data (puede ser cualqueir nombre) y el tipado de este
const addProduct = (data:product) => {   
    //dentro de la funcion llenamos el arreglo con la informacion del objeto 
products.push(data);

}

//declaramos el objeto y lo llenamos con los parametros declarados anteriormente
addProduct({
    title: 'Ashu',
    createAt: new Date(2000,3,10),
    stock: 11,
    size: 'M'
});

console.log(products)

})();