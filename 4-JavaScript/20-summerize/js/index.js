let arr = [-5,6,0,6,12,3,3]
function removeDupel(array) {
    let result = []
    array.forEach(element => {
        if(result.indexOf(element) == -1){
            result.push(element)
        }
    });
    return result
  }


  console.log( removeDupel(arr))

  let arr1 = [1,2,3,4]
  let arr2 = [1,2,3,4]
  let arr3 = arr1
  arr3[0] = 55
  console.log(arr1)
  if(arr1 == arr3){
      console.log('equal')
  } else{
    console.log('not equal')
  }

  function checkEqual(ar1, ar2){
      if(ar1.length == ar2.length){
          for (let i = 0; i < ar1.length; i++) {
              if (ar1[i] != ar2[i] ){
                  return false
              }
          }
          return true
      }
        return false
  }
  console.log(checkEqual([1,2,3,4], [1,2,3,4]))


  function findShared(ar1, ar2){
      let result = []
      ar1.forEach(item => {
          if(ar2.indexOf(item) > -1 && result.indexOf(item) == -1){
                result.push(item)
          }
      })
      return result
  }
  function findShared1(ar1, ar2){
    let result = []
    for (let index = 0; index < ar1.length; index++) {
        if(ar2.indexOf(ar1[index]) > -1 && result.indexOf(ar1[index]) == -1){
            result.push(ar1[index])
      }
    }
    return result
}
  console.log(findShared([1,2,3,4,5,1], [1,2,2]))