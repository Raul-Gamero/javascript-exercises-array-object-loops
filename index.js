//ARRAYS

// 1. Crea un array vacío llamado stack.
let stack = [];

// 2. Crea un array numbers con los números del 1 al 5 en orden ascendente.
let numbers = [1, 2, 3, 4, 5];

// 3. La función multiplyByTwo tiene que multiplicar por 2 cada elemento del array numbers utilizando un bucle for.
function multiplyByTwo(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }

  return arr;
}

// 4. La función evenNumbers tiene que devolver los números pares del array numbers.
function evenNumbers(arr) {
  let evenNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNums.push(arr[i]);
    }
  }
  return evenNums;
}

// 5. La función numbersBackwards tiene que devolver los números del array numbers en orden inverso.
function numbersBackwards(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// 6. La función sum tiene que devolver la suma de todos los números del array numbers.
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// 7. La función average tiene que devolver el promedio de todos los números del array numbers.
function average(arr) {
  let total = sum(arr);
  return total / arr.length;
}

// 8. La función biggestPrime tiene que devolver el número primo más grande de los primeros 100 números.
function biggestPrime(limit) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  let largestPrime = 0;
  for (let i = 0; i <= limit; i++) {
    if (isPrime(i)) {
      largestPrime = i;
    }
  }
  return largestPrime;
} 

//OBJETOS
// 1. Crea una variable person y asígnale un objeto vacío.
let person = {};

// 2. Agrega una propiedad name al objeto y asígnale "Jorge" como valor.
person.name = "Jorge";

// 3. Agrega una propiedad lastName al objeto y asígnale "Gonzalez" como valor.
person.lastName = "Gonzalez";

// 4. Agrega una propiedad birthYear al objeto y asígnale 1995 como valor.
person.birthYear = 1995;

//5. Agrega una función getFullName al objeto que devuelva el nombre completo.
person.getFullName = function() {
  return `${this.name} ${this.lastName}`;
} 

// 6. Agrega una función getBirthYear al objeto que devuelva la edad (asumiendo que es el año 2023).
person.getAge = function() {
  return 2023 - this.birthYear;
}