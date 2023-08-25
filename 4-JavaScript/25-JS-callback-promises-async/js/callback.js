function someFun(word, cb) {
    cb()
    console.log(word)
    
  }

  someFun('hi',()=> {
      console.log('I am  a callback function')
    })