//Métodos para poder correr 

import { Product, Sizes } from './product.model'
//Con ese import nos traemos el tipado de models a este script 

export const products: Product[] = [];

//
export const addProduct = (data: Product) => {
    products.push(data);

}

export const calcStock = (): number => {
let total = 0;
products.forEach((item) => {
    total += item.stock;
});
return total;
}