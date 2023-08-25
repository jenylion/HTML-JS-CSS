let study2Hours = false

let ahmadPromise = new Promise((resolve, reject)=>{
if (study2Hours){
    resolve('you will be a developer')
} else {
    reject('I dont know , maybe you will or maybe you will not')
}
})

ahmadPromise.then(message=>{
    console.log(message)
}).catch(errorMessage =>{
    console.log(errorMessage)
})