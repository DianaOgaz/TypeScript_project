(() => {
    //Permite alamcenar cualquier tipo de dato dentro de esta variable 
    //Se aconsseja que no se utiliza.
    //Es utilizado para migraciones, se recomienda utilizarlo para la migracion. 

    let myDynamicVar: any;//Cualquiera 
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';


    myDynamicVar = 'hola';
    //myDynamicVar. //No aparece ningun tipo de ayuda porque no sabe que tipo de dato es

    const rta = (myDynamicVar as string).toLowerCase;
    //Hace que sea tratado como un string (hacer Cast)
    console.log('rta',rta);


    const rta2 = (<number> myDynamicVar).toFixed;
    console.log('rta2',rta2);


})();