window.onload = () => {

    let div1 = document.querySelector('.container>div:nth-child(1)')
    let div2 = document.querySelector('.container>div:nth-child(2)')

    let div1touched = false
    div1.addEventListener("touchstart",(e) => {
        div1touched = true
        checkTouched()
    })
    div1.addEventListener("touchend",(e) => {
        div1touched = false
    })

    let div2touched = false
    div2.addEventListener("touchstart",(e) => {
        div2touched = true
        checkTouched()
    })
    div2.addEventListener("touchend",(e) => {
        div2touched = false
    })
    function checkTouched() {
        if (div1touched && div2touched) {
            alert("both are touched")
            div2touched = false;
            div1touched = false;
        }
      }
}






