function findMaxNumber(array) {
    return Math.max(...array); 
}
const numbersInput = prompt("Ingrese un array de números separados por comas:"); 
const numberArray = numbersInput.split(",").map(Number); 
const maxNumber = findMaxNumber(numberArray); 

alert("El número mayor es: " + maxNumber); 
