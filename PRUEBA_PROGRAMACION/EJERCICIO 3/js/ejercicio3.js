//Funcion que retorna un numero al azar entre 2 numeros dados como parametros
const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
//Funcion Lottery retorna un array de 6 numeros utilizando
//La funcion randomintfrominterval el cual no repite ningun numero dentro del mismo.
  const lottery = () => {
    var numero1=prompt("Ingresar numero 1",0);
    var numero2=prompt("Ingresar numero 2",0);
    const array = [];

    while (array.length < 6) {
  
      let randomNumber = randomIntFromInterval(numero1, numero2);
    //Si no encuentra un elemento repetido dentro del array
    //Este numero recibido es ingresado en la ultima posicion del array
    //De lo contrario el numero repetido no es tomado en cuenta
      if ( !array.some( (element) => {return element === randomNumber;} ) ) {
          array.push(randomNumber);
      }
      
    }
    document.getElementById("resultado").innerHTML=`GRACIAS POR SU COMPRA, SU NUMERO DE LOTERIA ES <br> <b>${array}</b>`;
  };
  lottery();