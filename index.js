import {sumar, alCuadrado, calcularAreaCirculo, calcularPerimetroCirculo} from "./modules/matematica.js";

let palabra1 = 'auto';
let palabra2 = 'rueda';
console.log(palabra1 + " "+ palabra2);

console.log(`hola ${palabra1}, ${palabra2}`);

console.log(`1+2 =  ${sumar(1,2)}, 
6 * 6 =  ${alCuadrado(6)}, 
Area del circulo cuya radio es 5:  ${calcularAreaCirculo(5)}, 
Perímetro del circulo cuya radio es 5: ${calcularPerimetroCirculo(5)}`);
