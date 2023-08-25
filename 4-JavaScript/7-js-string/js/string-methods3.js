let str = "Hello World"
console.log(str.slice(-11, -6))
// substring like slice but dose not except negative values
console.log(str.substring(0, 5))

console.log(str.substr(6, 3))
// replace only first found reult
console.log(str.replace('o', 'x'))

let str2 = "I love life , i love programming, I love you"
console.log(str2.replace(/i /ig, 'you '))

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.concat(" ", str2,"ddd ", " dfdf" ))
 let str3 = " ahmad@ahmad-osman.com sdsd "
 // trim will remove whitespaces from both sides od a string
 console.log(str3.trim())

 console.log(str3.charAt(2))
 console.log(str3.charCodeAt(0))

