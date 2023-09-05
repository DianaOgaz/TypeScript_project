//instalamos la libreria en la terminal y luego la importamos desde aqui mero

import {subDays, format} from 'date-fns';
//Subday: Nos resta una fecha a otra
// fromat: regresa el formato de la fecha solicitada
const date = new Date (2000,2,10);
const rta = subDays(date, 10);
const str = format(rta, 'dd/MM/yyyy');
console.log(str);