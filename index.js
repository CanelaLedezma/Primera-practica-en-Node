
import { URL } from 'url';
import {sumar, alCuadrado, calcularAreaCirculo, calcularPerimetroCirculo} from "./modules/matematica.js";
import countryToCurrency from 'country-to-currency';

let palabra1 = 'auto';
let palabra2 = 'rueda';
console.log(palabra1 + " "+ palabra2);

console.log(`hola ${palabra1}, ${palabra2}`);

//EJ02//


console.log(`1+2 =  ${sumar(1,2)}, 
6 * 6 =  ${alCuadrado(6)}, 
Area del circulo cuya radio es 5:  ${calcularAreaCirculo(5)}, 
Perímetro del circulo cuya radio es 5: ${calcularPerimetroCirculo(5)}`);

//EJ05/6//

const parsearUrl = (url) =>
{
   try {
    url = new URL(url);
    return {
    "host": 'https://'+url.hostname,
    "pathname": url.pathname,
    "parametros": Object.fromEntries(url.searchParams)
   };
   } catch (error) {
    console.error(error.message)
   } 
}

const url2 = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
let parsear = parsearUrl(url2);
let parsear2 = parsearUrl("uuu");
console.log(parsear);

//EJ07//

const obtenerMoneda = (pais) =>{
    return countryToCurrency[pais];
}

let arg = obtenerMoneda('AR');
console.log(arg);