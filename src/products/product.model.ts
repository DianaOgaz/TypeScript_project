//Archivo modelasdo de los datos
//Ingresamos los tipos de datos
//la palabra export nos permite utilizar este archivo en otro 

export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'
export type Product = ({
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
});
//se pueden exportar tipos de datos para usarlos en otros scripts 