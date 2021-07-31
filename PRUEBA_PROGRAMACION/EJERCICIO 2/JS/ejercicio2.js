//CONTAR LAS VECES QUE APARECE REPETIDA UNA PALABRA

//Funcion para dividir las palabras quitando los caracteres especiales
//Retorna un array con el texto dividido y cortado por espacios
function dividir_palabras(texto) {
  //Reemplazar los saltos de linea por espacios
  texto = texto.replace(/\r?\n/g, " ");
  //Reemplazar los espacios seguidos por uno solo
  texto = texto.replace(/[ ]+/g, " ");
  //Quitar los espacios del principio y del final
  texto = texto.replace(/^ /, "");
  texto = texto.replace(/ $/, "");
  //Cortar el texto por los espacios
  var textoTroceado = texto.split(" ");

  return textoTroceado;
}
//Funcion para contar las palabras dentro del array
//Recibe como parametro el array trabajado anteriormente y la palabra que se desea buscar
function contar_palabras(texto_dividido, palabra_buscada) {
  let contador = 0;
  texto_dividido.forEach((element) => {if (element === palabra_buscada) {
      contador += 1;
    }
  });

  return contador;
}

var frase=prompt("Ingrese una frase por favor");
var palabra_buscada=prompt("Ingrese una palabra a buscar en la frase anterior");
var array_texto = dividir_palabras(frase);
var resultado = contar_palabras(array_texto, palabra_buscada);

document.getElementById("lista").innerHTML=`La palabra <b>${palabra_buscada}</b> dentro de la frase <b>${frase}</b>, se repite <b> ${resultado} </b>veces`
