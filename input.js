//Declaración de las variables
let nombre;
let edad;
let genero;
let lenguaje;

//Importar el módulo prompt-sync
const prompt = require('prompt-sync')();

//Solicitar datos al usuario
nombre = prompt('Me indica su nombre, por favor: ');
genero = prompt('¿Cuál es su género? (M/F): ');
edad = parseInt(prompt('¿Cuál es su edad?: '));
lenguaje = prompt('¿Qué lenguaje de programación está estudiando?: ');

//Imprimir las respuestas dadas por la persona
console.log(`¡Hola ${nombre}! Usted tiene ${edad} años y está aprendiendo ${lenguaje},\
 su género es ${genero}!`);

 //Solicitar nuevos datos al usuario
 console.log(`${nombre}, ¿Le gusta estudiar ${lenguaje}? Responde con el número 1 para el SÍ o 2 para NO.`);
 respuesta = parseInt(prompt(':'));

 //Comparación de respuesta del usuario
if (respuesta === 1) {
    console.log(`¡Muy bien ${nombre}! Sigue estudiando y tendrá mucho éxito.`);
 } else if (respuesta < 1 || respuesta > 2){
    console.log(`Lo siento ${nombre}, pero no puedo entender su respuesta.`);
 } 
 else {
    console.log('Oh, qué pena... ¿Ya intentó aprender otros lenguajes?');
 }