// task1

// on save button click username and email values should be save inside 
// the local storage uding ONE key 

window.onload = () => {
    // get HTML elements
    const btn = document.querySelector('#btn1')
    const usernameInput = document.querySelector('#username')
    const emailInput = document.querySelector('#email')

    // addclick event to the btn
    btn.addEventListener('click',function (e) {
        // create an object with properties from inputs values
        const personObj = {
            username: usernameInput.value,
            email: emailInput.value
        }
        // save the object inside the local storag as json string
        localStorage.setItem('blaPerson',JSON.stringify(personObj) )

      })

      // task 2
      // fill the inputs with data inside the local storage IF EXIST
      // code here
      // get string data from local storage using the key 'blaPerson'
      const jsonData = localStorage.getItem('blaPerson')
      // check if data is not empty or exist 
      if(jsonData){
          // convert the json text to object
          let obj = JSON.parse(jsonData)
          // fill inputs with data from the object
          usernameInput.value = obj.username
          emailInput.value = obj.email

      }
  }