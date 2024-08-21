//Declaración de las variables
let nombre;
let edad;
let genero;
let lenguajeProg;

//Importar el módulo prompt-sync
const prompt = require('prompt-sync')();

//Solicitar datos al usuario
nombre = prompt('Me indica su nombre, por favor: ');
genero = prompt('¿Cuál es su género? (M/F): ');
edad = parseInt(prompt('¿Cuál es su edad?: '));
lenguajeProg = prompt('¿Qué lenguaje de programación está estudiando?: ');

//Imprimir las respuestas dadas por la persona
console.log(`¡Hola ${nombre}! Usted tiene ${edad} años y está estudiando ${lenguajeProg},\
su género es ${genero}!`);