/*Variables*/
//let numeroSecreto = 6;
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo)+1;//math.floor redondea el número random que estoy poniendo.
//se suma 1 porque el random va de 0 a 9.
let numeroUsuario =0;
let intentos = 1;
//let palabraIntento = 'intento';
let maximosIntentos = 3;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt(
    `Me indicas un número entre el 1 y el ${numeroMaximo} por favor:`
  )); //parseInt convierte la string en entero

  console.log(numeroUsuario);

  /*Este codigo realiza la comparación*/

  if (numeroUsuario == numeroSecreto) {

    alert(`Acertaste, el número es: ${numeroUsuario}.
    Lo hiciste en ${intentos} ${intentos == 1 ? 'intento': 'intentos'}.`);
    //el '?' indica que está haciendo una comparación. Y ':' simboliza un else.
    /*Se necesita usar comillas invertidas para poder
    pasarle string y variable */
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor.");
    }
    //intentos = intentos + 1;
    //intentos += 1;
    intentos++;
    //palabraIntento = 'intentos';
    if (intentos > 3){
        alert(`Llegaste el número máximo de ${maximosIntentos} intentos.`);
        break;
    } 
  }
}
