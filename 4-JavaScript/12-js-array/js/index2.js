
//let arr = [10,4,1,9,5,7,6,3,2,7,1]
// let arr = [23, 0, 66]
function findLmits(blaArr){
let theSmallest =blaArr[0]
let theGreatest =blaArr[0]
for (let i = 1; i < blaArr.length; i++) {
    if(blaArr[i] < theSmallest){
        theSmallest = blaArr[i]
    }
    if(blaArr[i] > theGreatest){
        theGreatest = blaArr[i]
    }
}
document.write('the smallest: ' + theSmallest + '<br>')
document.write('the greatest: ' + theGreatest + '<br>')
}

findLmits([2,6,-8,9,100,-1])

function avr(blaArr){
    let sum = 0
    for (let i = 0; i < blaArr.length; i++) {
        sum += blaArr[i]
    }d
    return sum / blaArr.length
}
document.write(avr([100,60,50,80]))