
//Nos traemos las funciones de services para poder usaralas aqui en main
import { addProduct, calcStock, products } from './product.service';

addProduct({
    //Deben estar todos los parametros declarados para que no marque error
    title: 'Producto 1',
    createAt: new Date(2000, 3, 10),
    stock: 5,
    size: 'L'

});
addProduct({
    //Deben estar todos los parametros declarados para que no marque error
    title: 'Producto 2',
    createAt: new Date(2000, 1, 1),
    stock: 8,
    size: 'L'

});
//Imprimimos el producto 
console.log(products);
const total = calcStock();
console.log('Total: ',total);