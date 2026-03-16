
const sumar = (num1, num2) => num1+num2;

const alCuadrado = num1 =>  num1 *  num1;

const PI = 3.141592653;

function calcularAreaCirculo(radio) {
  return PI * radio * radio;
}

function calcularPerimetroCirculo(radio) {
  return  PI * radio * 2;
}

export {sumar, alCuadrado, calcularAreaCirculo, calcularPerimetroCirculo};
