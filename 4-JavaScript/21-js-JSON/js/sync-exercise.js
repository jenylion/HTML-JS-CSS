function norrisJoke(cb) {
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
xhr.send();

xhr.onload = function () {
    if(xhr.status == 200){
        let result =JSON.parse( xhr.response)
        cb(result.value)
// or
        // cb(JSON.parse( xhr.response).value)
    } 
  }
  }

  norrisJoke(callBackFun)
  function callBackFun(toPrint){
      console.log(toPrint)
  }
  