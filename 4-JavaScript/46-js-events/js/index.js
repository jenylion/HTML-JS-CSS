window.onload = () => {
    // get html btn
    const btn = document.querySelector('#btn1')
    // add on click event to btn
    btn.addEventListener('click', function(e){
console.log(e);

    })

    // get container element
    let container = document.querySelector('#container')
    // container on click
    container.onclick = (e) => {
        console.log(e.clientX, e.clientY);
        
    }
    // add scroll event to container
    container.addEventListener('scroll', e => {
         // IMPORTANT:
         // e.target  refer to the element that triger the event which is container on this case

        console.log(e.target.scrollTop);
        if(e.target.scrollTop > 400){
            e.target.style.color = 'red'
        } else {
            e.target.style.color = 'black'
        }
        // task 1
        // on scroll change the font size of the content using scrollTop value
        // check if scrollTop is greater than 16 
        if(e.target.scrollTop > 16){
           e.target.style.fontSize = e.target.scrollTop + 'px' 
        }
        
    })
}