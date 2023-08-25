window.onload = ()=>{

    let div = document.querySelector('#someDiv');
    // div.style.height = '50px';
    // div.style.backgroundColor = 'red';
    // div.style.borderRadius = '10px 0 10px 0';
    div.classList.add('mystyle')
    div.classList.add('mystyle1')
    div.classList.remove('mystyle1')
    let father = div.parentElement
    father.style.border = '1px solid black'
    // let switcher = true
    setInterval(() => {
        div.classList.toggle('mystyle')
        // if(switcher){
        //     div.classList.add('mystyle')
        //     switcher = false
        // } else{
        //     div.classList.remove('mystyle')
        //     switcher = true
        // }
    }, 1000);

}