window.onload = () => {
    // get html element
    let input = document.querySelector('#test')
    input.addEventListener('blur', e => {
        alert('out Input')
    })
    // window.onhashchange = function() {
    //     alert('please dont go')
    //    }

}