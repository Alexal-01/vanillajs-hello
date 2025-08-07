
function randomValueFromArray(customArray) {
  const randomIndex = Math.floor(Math.random() * customArray.length);

  return customArray[randomIndex];
}

window.onload = function () {
  let who = ['El Profe Javier', 'El profe Sergio', 'La academia', 'Un perro se coló en la academia y'];
  let action = ['suspendió', 'rompió', 'aprobó', 'saltó sobre', 'lloró sobre'];
  let what = ['el proyecto de moises', 'los apuntes de Erick', 'su propio proyecto', 'el trabajo final de Jose', 'los derebes de omar'];
  let when = ['por preguntar mucho', 'por no estudiar', 'por usar IA', 'por cantar durante la clase', 'por ser demasiado listo', 'por no usar html semántico'];

  document.getElementById("excuse").innerHTML = `${randomValueFromArray(who)} ${randomValueFromArray(action)} ${randomValueFromArray(what)} ${randomValueFromArray(when)}`;
}





