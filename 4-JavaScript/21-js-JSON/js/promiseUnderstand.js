
let somePromise = new Promise((resolve, reject)=>{
if(true){
    resolve('hi')
} else{
    reject('there is an error')
}
});


somePromise.then((value)=>{
console.log(value)
}).catch((value)=>{
    console.log(value)
})