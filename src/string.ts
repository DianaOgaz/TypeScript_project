(() => { //funcion anonima que se ejecuta sola
    let miProducto = 'Producto chido';
    miProducto = 'Producto chido nuevo';
    console.log('miProducto', miProducto);
    //Se pueden sobreescribir

    //const miNombre = 'i'm Diana';
    const miNombre = "i'm Diana";
    console.log(miNombre);
    //Se pueden utilizar dobles comillas o una sola comilla, depende del uso del string

    const summary = `
    title: ${miProducto}
    description: ${miNombre}
    `
    console.log(summary);
    //El acento grave se usa para concatenar lineas de código
    //el uso de $ seguido de las llaves es predeterminado para el tipo de concatenacion del código, es el fomrato por defecto

})();