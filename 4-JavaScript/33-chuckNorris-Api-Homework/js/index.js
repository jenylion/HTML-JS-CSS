// https://api.chucknorris.io/jokes/random

window.onload = function(){
    // first call for the function after the page load
    //getJoke()
    getJokeaSync()

    let jokBtn = document.querySelector('#jokBtn')
    jokBtn.addEventListener('click', function(){
        // call function when user clikc the button
        //getJoke()
        getJokeaSync()
    })
}

// this function gonna be called in first page load and in the click event for the button 
// it use asynce await
async function  getJokeaSync(){
    // getting the elements from html to be filled with data
    let jokImg = document.querySelector('#jokImg')
    let jokId = document.querySelector('#jokId')
    let jokPar = document.querySelector('#jokPar')

    let url = 'https://api.chucknorris.io/jokes/random'
 let data = await fetch(url)
 if(data.status == 200){
     let jokObj = await data.json()
     console.log(jokObj)

     jokImg.src = jokObj.icon_url
     jokId.innerText = jokObj.id
     jokPar.innerText = jokObj.value

 } else {
    jokPar.innerText = 'error with getting data'
 }

}


// this function gonna be called in first page load and in the click event for the button
// it use promises
function getJoke(){
    // getting the elements from html to be filled with data
    let jokImg = document.querySelector('#jokImg')
    let jokId = document.querySelector('#jokId')
    let jokPar = document.querySelector('#jokPar')

    // getting the jok from Api using fetch and promise
    let url = 'https://api.chucknorris.io/jokes/random'
    fetch(url).then(data => {
        if(data.status == 200){
            data.json().then(jokObj =>{
                //console.log(jokObj);
                jokImg.src = jokObj.icon_url
                jokId.innerText = jokObj.id
                jokPar.innerText = jokObj.value

            }).catch(error=>{
                console.log(error)
            })
        }
    }).catch(error => {
        console.log(error);
    })
}

