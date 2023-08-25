window.onload = () => {
    // get html elements
    const container = document.querySelector('#container')
    const img = document.querySelector('#container>img')
    // add event listener wheel to container
    let zoom = 1
    container.addEventListener('mousewheel', function(e) {
        //console.log(e)
        // check whhel direction
        if (e.deltaY > 0){
            // zoom in
            zoom += 0.1
        } else {
            // zoom Out
            if(zoom > 0.2){
                zoom -= 0.1
            }
            
        }
        //img.style.transform = `scale(${zoom})`
        img.style.transform = 'scale('+zoom+')'

    })
}