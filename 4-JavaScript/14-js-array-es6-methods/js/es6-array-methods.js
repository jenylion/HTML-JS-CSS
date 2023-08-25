let arr = [2, -2, 6, 3, 4]

let newArr = []
arr.forEach(function(num){
    newArr.push(num * 2)
})
document.write(arr + '<br>')
document.write(newArr + '<br>')

// map will return a NEW array with the changes of orginal array items
let someFunc = function (param) { return param + 2  }
let newArr2 = arr.map(someFunc)
document.write(newArr2 + '<br>')

// let blaArr = []
// arr.forEach(item => {
//     if (item > 0){
//         blaArr.push(item)
//     }
// })
let blaArr = arr.filter(item => { return item > 0 && item < 4  })
document.write(blaArr + '<br>')

