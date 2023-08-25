let str = "Hello World"
// search like indexOf
//console.log(str.search("l"))

console.log(str.slice(6, 11))


let findIndexSecond = txt => {
    return txt.indexOf(' ') + 1 
}
console.log(findIndexSecond("blablablabla bla"))

let findIndexThird = txt => {
    // let firstSpaceIdx = txt.indexOf(' ')
    // let secondSpaceIdx = txt.indexOf(' ',firstSpaceIdx + 1 )
    // return secondSpaceIdx + 1

    return txt.indexOf(' ',findIndexSecond(txt) ) + 1
}
console.log(findIndexThird('Hello My Name is Ahmad'))
console.log('//////////////////////////////')

function getSecondWord(txt) {
    return txt.slice(findIndexSecond(txt), findIndexThird(txt) - 1)
}
console.log(getSecondWord("this is something different"))
