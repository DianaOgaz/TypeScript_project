(()=>{
    //declaramos nuestra fusion que nos mostrará nombre y correo
    //cuando una funcion recibe un objeto, su estructura cambia por la siguiente
    //Se encapsula el objeto, se coloca el nombe de este y dentro de los corchetes colocamos el nombre de las variables junto con su tipado
const dataUser =  (dataUser: {nombre:string, correo:string}) => {
    console.log('nombre', dataUser.nombre, 'correo', dataUser.correo);
    //para obtener los datos almacenados del objeto, solo se le llama y  se coloca un punto y con eso se tiene acceso a los datos de ese objeto
}

//estructura para declarar un objeto
dataUser({
nombre: 'Diana Ogaz',
correo: 'ogazdiana7@gmail.com'
});


})();