// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
   for ( var i=0 ; i<array.length ; i++){
     array[i] = array[i] + 1
   }
   return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array.push(elemento);
return array;
}



function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift(elemento);
return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0 ; i<array.length; i++){
  if (array[i]===elemento){
    return true;
  }
}
return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var acum = 0;
  for(var i =0; i< numeros.length ; i++){
    acum = acum + numeros[i];
  }
  return acum
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  //[2,4,1,3,5] === 15
  //lenght = 5
  //promedio 3
  var totalDeElementos = resultadosTest.length;
  var suma = 0;
  for (var i = 0; i<resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  }
  var promedio = suma / totalDeElementos;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  //[1,7,14,8,15]
  var bigger = 0;
  for (var i = 0; i < numeros.length; i++){
    if (numeros[i] > bigger) {
      bigger = numeros[i];
    }
  }
  return bigger
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  // if(!arguments) es lo mismo
  if (arguments.length === 0) {
    return 0
    }
    else{
      var acum = 1;
      //[2,5,7]
      for (var i = 0 ; i < arguments.length; i++)
      acum = acum * arguments[i]
    }
    return acum
}  


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

//var mayorADieciocho = arreglo.filter(element => element > 18);
//var total = mayorADieciocho.length;
//return total

var mayorADieciocho = []; //[56,19]
//[4,56,7,19,3]
for ( var i = 0; i< arreglo.length; i++){
  if (arreglo[i] > 18){
    mayorADieciocho.push(arreglo[i])
  }
}
var LargoTotalDelArray = mayorADieciocho.length; //2
return LargoTotalDelArray;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  //el 1 y el 7 === El fin de semana 
  //2,3,4,5,6 === Es dia laboral

  switch (numeroDeDia) {
    case 1:
      return "Es fin de semana";
    case 7:
      return "Es fin de semana"
    case 2:
      return "Es dia Laboral";
    case 3:
      return "Es dia Laboral";
    case 4:
      return "Es dia Laboral";
    case 5:
      return "Es dia Laboral";
    case 6:
      return "Es dia Laboral";
    default:
      return "No es un dia";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  // 75 --> "75"
  var str = String(n);
  if (str[0] === '9'){
    return true;
  }else {return false
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  //[2,2,2,2,2,87]
  for (var i =0 ; i < arreglo.length - 1; i++){
    if (arreglo[i] !== arreglo[i+1]){
      return false;
    }
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  // si no estan los 3, tengo que devolver no se encontraron ..
  var mesesBuscados = [];

  for (var i = 0; i < array.length; i++){
    if (array [i] === "Enero" || 
    array [i] === "Marzo" || 
    array [i] ==="Noviembre"){
      mesesBuscados.push(array[i]);
    }
  }
  if (mesesBuscados.length === 3){
    return mesesBuscados;
  }else{
    return "No se encontraron los meses pedidos"
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var biggers = [] ;
  for (var i = 0; i< array.length ; i++){
    if(array[i] > 100){
      biggers.push(array[i]);
    }
  }
  return biggers
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  for (var i = 0; i < 10; i++){
     var numero = numero +2;
     if (numero === i){
       break;
     }
     else {array.push(numero)
    }
  }
  if (i < 10){
    return "Se interrumpió la ejecución"
  } else {return array}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  for (var i = 0; i < 10; i++){
    if (i === 5){
      continue;
    } else { 
      numero = numero +2
      array.push(numero);
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
