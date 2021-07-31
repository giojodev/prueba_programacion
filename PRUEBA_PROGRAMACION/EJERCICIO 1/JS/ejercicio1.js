// De una cadena de texto de n longitud, 
// diseñar un programa que obtenga el 
// numero de veces que se repite una palabra en el texto

const texto = '[(]]'

let corchetes_1 = 0;
let corchetes_2 = 0;

let parentesis_1 = 0;
let parentesis_2 = 0;

let llaves_1 = 0;
let llaves_2 = 0;

let otros = 0

for (let c of texto) {
    if (c === '[') {
        corchetes_1 += 1;
    } else if (c === ']') {
        corchetes_2 += 1;
    } else if (c === '(') {
        parentesis_1 += 1;
    } else if (c === ')') {
        parentesis_2 += 1;
    } else if (c === '{') {
        llaves_1 += 1;
    } else if (c === '}') {
        llaves_2 += 1;
    } else otros += 1;
}

if (corchetes_1 != corchetes_2 || parentesis_1 != parentesis_2 || llaves_1 != llaves_2) {
    console.log('Incorrecto');
} else console.log('Correcto');