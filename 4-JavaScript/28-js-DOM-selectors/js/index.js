window.onload = ()=>{
    let elements = document.getElementsByClassName('card-head')
    console.log(elements.length);
    let h3 = document.getElementsByTagName('h3')
    console.log(h3);
    // querySelector get the first element in the document 
    let elm = document.querySelector(".card-content")
    console.log(elm);
let someVar = '.contact-container li'
    let elms = document.querySelectorAll(someVar)
    console.log(elms);
    let eelm = blaSelector('.social a')
    console.log(eelm[1]);
    console.log(eelm[0]);
     
    
}

function blaSelector(selectorText) {
return document.querySelectorAll(selectorText)  
}