window.onload = () =>{
let div = document.querySelector('#div1')
console.log(div.getAttribute('class'));
div.setAttribute('class', 'something')

//  document.querySelector('#someInput').setAttribute('type','checkbox')
//  document.querySelector('#someInput').setAttribute('class','someclass')
let input = document.querySelector('#someInput')
// higher quality code than lines number 6, 7
// input.setAttribute('type','checkbox')
// input.setAttribute('class','someclass')
let placeholder = input.getAttribute('placeholder')
let counter = 0
setInterval(() => {
    counter++
    let txt = placeholder.substr(0,counter)
    input.setAttribute('placeholder',txt)
    if(counter == placeholder.length){
        counter = 0
    }
    
}, 200);

}