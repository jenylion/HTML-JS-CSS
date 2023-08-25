for (let i = 0 ; i <= 10 ; i++) {
    console.log(i)
}

let storage = ''
for (let i = 0; i <= 10; i++) {
    storage = storage + i 
    if(i != 10){
        storage = storage + ','
    }
}
console.log(storage)

for (let i = 0; i < 10; i+=2) {
    console.log(i)
    
}
console.log('///////////////////////////////')
for (let e = 11; e < 50; e+=2) {
    console.log(e)
    
}
console.log('///////////////////////////////')
for (let i = 10; i < 50; i++) {
    if(i%2!=0){
        console.log(i)
    }
}
console.log('////////////////reverse loop///////////////')
for (let i = 10; i >= 0; i-=2) {
    console.log(i)
}
console.log('////////////////sum///////////////')
let sum = 0
for (let i = 10; i <= 50; i++) {
    sum += i
    // sum = sum + i
}
console.log(sum)

//document.write('hello World <br> and FBW5')
for (let i = 1; i <= 10; i++) {
    for (let x = 1; x <= 10; x++) {
        document.write(x+"<br>")
    }
    document.write('Again<br>')
}