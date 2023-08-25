let matrix = [
    [3,4,-4,41,52,6,22,4,55,11],
    [4,22,89,74,74,63,85,4,55,11],
    [9,-33,0,41,52,23,12,96,74,85],
    [22,445,90,67,5,6,23,4,55,45],
    [-5,4-66,89,56,5,6,34,4,55,56],
    [32,66,78,7,5,6,22,4,55,78],
    [99,-44,67,7,12,6,34,45,55,55],
    [12,6,56,7,23,6,22,4,55,554]
]
function printNewLine(arr) {
    arr.forEach(item => {
        item.forEach(subItem => {
            document.write(subItem + '<br>')
        });
    });
}

//printNewLine(matrix)

function printSum(arr) {
    let mainStor = 0
    arr.forEach(item => {
        let stor = 0
        item.forEach(subItem => {
            stor += subItem
        })
        mainStor += stor
        document.write(stor + '<br>')
    })
    document.write(mainStor + '<br>')
  }
  //printSum(matrix)

  function findMax(arr){
      let max = arr[0][0]
      arr.forEach(item => {
        item.forEach(subItem => {
            if(max < subItem) {
                max = subItem
            }
        })
      })
      return max
  }
  //document.write(findMax(matrix) + '<br>')

  function findMin(arr){
    let min = arr[0][0]
    arr.forEach(item => {
      item.forEach(subItem => {
          if(min > subItem) {
              min = subItem
          }
      })
    })
    return min
}
//document.write(findMin(matrix) + '<br>')

let treeArray = ['ahmad',30,['omar', 5,['Ali',2,['fbw5',20,[['hi', 50, []]]]]],['blabla',99,[]]]

function recursivePrint(arr){
    arr.forEach(item => {
        if(typeof(item) == 'string'){
            document.write(item + '<br>')
        } else {
            if(typeof(item) == 'object'){
                recursivePrint(item)
            }
        }
    })
}

recursivePrint(treeArray)