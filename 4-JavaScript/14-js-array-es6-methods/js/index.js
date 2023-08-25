let fruits = ['Banana', 'Apple', 'watermelon' ]
// for(let i = 0 ; i < fruits.length ; i++) {
//     document.write(fruits[i] + '<br>')
// }
let check = false
fruits.forEach((blaFruit) => {
    //document.write(blaFruit + '<br>')
    if (blaFruit.indexOf('water') != -1){
        check = true
    }
})
//document.write(check + '<br>')
function counterForeach(arr, num) {
    let stor = 0
    arr.forEach(item => {
        if(item == num){
            stor++
        }
    })
    return stor
  }
  function counterFor(arr, num){
      let stor = 0
      for(let i = 0 ; i < arr.length ; i++){
          if(arr[i] == num){
              stor++
          }
      }
      return stor
  }


  let ourArray = [1,5,5,6,1,1,5,7,8,-1]
  //document.write(counterFor(ourArray, 5))


  let ourClass=['Ahmad',
  "Tim",'Safa',
  'Shirin','Wael',
  'Alen',
  'Abdulrahman',
  'Hamoud',
  'Felix',
  'Nada',
  'Manish',
  'shumky',
  'Bashar']
function characterFinder(arr,char){
    let stor=0
    arr.forEach(item=>{
        if(item.indexOf(char.toLowerCase())!= -1 ||
         item.indexOf(char.toUpperCase())!= -1)
        stor++
    }
        )
        return stor
}
document.write(characterFinder(ourClass,'a'))