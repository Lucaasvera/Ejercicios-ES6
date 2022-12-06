//Ejercicio 1 Compara el alcance de var y let
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

//Ejercicio 2 Muta un arreglo declarado con const

const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

//Ejercicio 3 Prevenir la mutación del objeto

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Ejercicio 4 Usa funciones flecha para escribir funciones anónimas de manera breve

let magic = () => new Date();

//Ejercicio 5 Escribe funciones flecha con parámetros
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//Ejercicio 6 Establece parámetros por defecto para tus funciones
const increment = (number, value = 1) => number + value;

//Ejercicio 7 Utiliza el parámetro rest con parámetros de función
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

//Ejercicio 8 Utiliza el operador de propagación para evaluar los arreglos en el lugar
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1];

console.log(arr2);

//Ejercicio 9 Usa sintaxis de desestructuración para extraer valores de objetos
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;

//Ejercicio 10 Usa sintaxis de desestructuración para asignar variables desde objetos
const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES1;

//Ejercicio 11 Usa sintaxis de desestructuración para asignar variables desde objetos anidados
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday, high: highToday1 },
} = LOCAL_FORECAST;

//Ejercicio 12 Usa sintaxis de desestructuración para asignar variables desde arreglos
