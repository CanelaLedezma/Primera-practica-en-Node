
import { URL } from 'url';

let palabra1 = 'auto';
let palabra2 = 'rueda';
console.log(palabra1 + " "+ palabra2);

console.log(`hola ${palabra1}, ${palabra2}`);

const parsearUrl = (url) =>
{
    url = new URL(url)
const urlParsed =
{
    "host": 'https://'+url.hostname,
    "pathname": url.pathname,
    "parametros": Object.fromEntries(url.searchParams)
};

return(urlParsed);
}



const url2 = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
let parsear = parsearUrl(url2);
console.log(parsear)
