
// diseñar un programa que obtenga el 
// numero de veces que se repite una palabra en el texto

const texto = prompt("Ingrese el ejercicio a validar");
//Variables para contar la cantidad de veces que se repite
//Un elemento dentro del array
let corchetes_1 = 0;
let corchetes_2 = 0;

let parentesis_1 = 0;
let parentesis_2 = 0;

let llaves_1 = 0;
let llaves_2 = 0;

let otros = 0
//Por cada vez que encuentre un elemento dentro del string
//a;adira dentro un +1 a cada varible segun la condicion encontrada
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
/*
Al final se realiza una comparacion de las variables para revisar si la cantidad
de elementos coincide y asi si encuentra que los elementos de apertura
y cierre son iguales el string esta correcto, sino, el elemento esta incorrecto
*/
if (corchetes_1 != corchetes_2 || parentesis_1 != parentesis_2 || llaves_1 != llaves_2) {
    document.querySelector("#resultado").innerHTML=`El string <b>${texto}</b> recibido, esta <b>INCORRECTO</b>`;
} else     document.querySelector("#resultado").innerHTML=`El string <b>${texto}</b> recibido, esta <b>CORRECTO</b>`;