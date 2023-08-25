window.onload = () =>{
    let ball = document.querySelector('#ball')
    let down = true
    let counter = 0
    setInterval(() => {
        ball.style.top = counter+ 'px';
        if(down){
            counter++;
        } else {
            counter--;
        }
        if(counter == 180){
            down = false
        }
        if(counter == 0){
            down = true
        }
    }, 1);
}