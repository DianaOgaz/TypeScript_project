(()=>{
let isEnable = true; 

//let isEnable = '2'; 
//let isEnable = 123; 
console.log('isEnable',isEnable);
//El enable especfiica implicitamente el tipo de dato.

let inDisable = false; 
let isNew: boolean = false;
console.log('isNew', isNew);

var iVar = 'Variable global'
//Declaracion de variable global

if (iVar == 'Variable global'){
    let iLet = 'Fusion';
    iVar = iVar + iLet;
    console.log(iVar);

}else console.log(iVar);
let iBoleano : Boolean;
iBoleano = iVar =='Variable global' ? true : false;
console.log('iBoleano',iBoleano)


const random = Math.random();
console.log('random',random);
isNew = random >= 0.5 ? true:false;
// condicion ? valor si es verdadero : condicion si es falso
console.log('isNew',isNew);

})();