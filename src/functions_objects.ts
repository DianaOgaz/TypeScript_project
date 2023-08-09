(()=>{
    //declaramos nuestra fusion que nos mostrará nombre y correo
    //cuando una funcion recibe un objeto, su estructura cambia por la siguiente
    //Se encapsula el objeto, se coloca el nombe de este y dentro de los corchetes colocamos el nombre de las variables junto con su tipado
const dataUser =  (dataUser: {nombre:string, correo:string}) => {
    //console.log('nombre', dataUser.nombre, 'correo', dataUser.correo);
    //para obtener los datos almacenados del objeto, solo se le llama y  se coloca un punto y con eso se tiene acceso a los datos de ese objeto
}

//estructura para declarar un objeto
dataUser({
    //se declaran los valores del objeto
nombre: 'Diana Ogaz',
correo: 'ogazdiana7@gmail.com'
});

//Se delcara el tipado para el size 
type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'
//Creamos un arreglo para guardar los valores que le daremos a la funcion
const products: any[] = [];
//creamos una funcion con una constante que recibe un objeto con las siguientes variables y su tipado
const addProduct = (data:  {title:string, createAt:Date, stock: number, size?:Sizes}) => {
    //Lo que hace la funcion es llenar el arreglo previamente declarado con los valores almacenados dentro del objeto
products.push(data);


}

//aqui tenemos declarado nuestro objeto
addProduct({
    //lo llenamos con el nombre de la variable y lo llenamos con los datos
    title: 'Ashu',
    createAt: new Date(2000,3,10),
    stock: 11,
    size: 'M'
});

//hacemos una llamada a la consola para que imprima los valores del arreglo que deben de ser los que guardamos dentro del objeto
console.log(products)

})();