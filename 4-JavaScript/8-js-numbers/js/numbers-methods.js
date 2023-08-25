let num1 = 151
console.log(num1.toString().replace(/1/g, '8'))

let num2 =parseFloat("123.9")
// parsInt convert to integer, eval convert to number
// parsFloat convert to decimal number
console.log(typeof(num2))
console.log(num2)

let num3 = 2.987
// toFixed will round the number and covert it to string
console.log(num3.toFixed(2))