import sumar from "./sumador";
import multiplicar from "./multiplicador"; // Asume que tienes un archivo multiplicador.js

// Elementos para la suma
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const sumForm = document.querySelector("#sumar-form");
const sumDiv = document.querySelector("#resultado-div");

sumForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  sumDiv.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

// Elementos para la multiplicación
const firstMultiplication = document.querySelector("#primer-numero-multiplicacion");
const secondMultiplication = document.querySelector("#segundo-numero-multiplicacion");
const multiplicationForm = document.querySelector("#multiplicar-form");
const multiplicationDiv = document.querySelector("#resultado-multiplicacion-div");

multiplicationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMultiplication.value);
  const secondNumber = Number.parseInt(secondMultiplication.value);

  multiplicationDiv.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
