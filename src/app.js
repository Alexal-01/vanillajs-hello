

// CODIGO ANTERIOR:

//function randomValueFromArray(customArray) {
//  const randomIndex = Math.floor(Math.random() * customArray.length);

//return customArray[randomIndex];
//}

//window.onload = function () {
//let who = ['El Profe Javier', 'El profe Sergio', 'La academia', 'Un perro se coló en la academia y'];
//let action = ['suspendió', 'rompió', 'aprobó', 'saltó sobre', 'lloró sobre'];
//let what = ['el proyecto de moises', 'los apuntes de Erick', 'su propio proyecto', 'el trabajo final de Jose', 'los derebes de omar'];
// let when = ['por preguntar mucho', 'por no estudiar', 'por usar IA', 'por cantar durante la clase', 'por ser demasiado listo', 'por no usar html semántico'];

//document.getElementById("excuse").innerHTML = `${randomValueFromArray(who)} ${randomValueFromArray(action)} ${randomValueFromArray(what)} ${randomValueFromArray(when)}`;
//}


// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------CON ARRAYS:

function randomValueFromArray(customArray) {
  const randomIndex = Math.floor(Math.random() * customArray.length);

  return customArray[randomIndex];
}

window.onload = function () {
  const arrayCustom = [
    ['El Profe Javier', 'El profe Sergio', 'La academia', 'Un perro se coló en la academia y'],
    ['suspendió', 'rompió', 'aprobó', 'saltó sobre', 'lloró sobre'],
    ['el proyecto de moises', 'los apuntes de Erick', 'su propio proyecto', 'el trabajo final de Jose', 'los derebes de omar'],
    ['por preguntar mucho', 'por no estudiar', 'por usar IA', 'por cantar durante la clase', 'por ser demasiado listo', 'por no usar html semántico']
  ];

  //---------------------- CON MAP:
  // Uso el .map con una función flecha, map devuelve siempre un array, que al hacerlo string (.toString) siguen las comas, 
  // por lo que le aplico un replaceAll y cambio las comas por espacios.

  document.getElementById("excuse").innerHTML = arrayCustom.map((nestedArray) => { return randomValueFromArray(nestedArray) }).toString().replaceAll(",", " ");

  //----------------------- CON FOREACH:
  // En el caso de forEach hago una variable para guardar la información del loop, ya que forEach no devuelve como map.

  let arrayResult = "";
  arrayCustom.forEach((nestedArray) => {
    arrayResult += " " + randomValueFromArray(nestedArray);
  });

  document.getElementById("excuse").innerHTML = arrayResult;
}



