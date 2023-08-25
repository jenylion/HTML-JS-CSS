let fruits = ['Apple', 'banana', 'watermelon', 'grape', 'orange', 'cherry']
// fid the first fruit inside array which contain char 'a'
let  blaValue = fruits.find(fruit => fruit.indexOf('a') > -1)
document.write(blaValue+ '<br>')
document.write(typeof blaValue+ '<br>')

// find the first fruit inside the array which char 'a' is the third character
let  blaValue1 = fruits.find(fruit => fruit.indexOf('a') == 2)
document.write(blaValue1+ '<br>')
document.write(typeof blaValue1+ '<br>')

document.write('///////////////<br>')
// (for of) will iterate over array Items
for (let item of fruits) {
    document.write(item+ '<br>')
}

document.write('///////////////<br>')
// (for in) will iterate over array indexes
for (let blaIdx in fruits) {
    document.write(blaIdx+ ':'+  fruits[blaIdx] +'<br>')
}