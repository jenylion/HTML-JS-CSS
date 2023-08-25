window.onload=function () {

    // get html elements
    let canvas = document.querySelector('#gameCanvas')
    let scorSpn = document.querySelector('#scorSpn')

    // draw a horzintal line
    let ctx = canvas.getContext('2d');
    ctx.moveTo(0, 100);
    ctx.lineTo(600, 100)
    ctx.stroke()

    

    // // draw another box next to the first one
    // ctx.clearRect(580, 79, 20, 20)
    // ctx.fillRect(560, 79, 20, 20)
    // ctx.clearRect(560, 79, 20, 20)
    // // draw another box next to the first one
    // ctx.fillRect(540, 79, 20, 20)
    // ctx.fillRect(520, 79, 20, 20)
    // ctx.fillRect(500, 79, 20, 20)
    let boxCounter = 580
    // let boxInterval = setInterval(function () {
    //     // draw a box on the right side of the line 20 * 20
    //     ctx.clearRect(boxCounter + 20, 79, 20, 20)
    //     ctx.fillRect(boxCounter, 79, 20, 20)
    //     if(boxCounter == 0){
    //         boxCounter = 580
    //     } else{
    //         boxCounter = boxCounter - 20
    //     }
        
    //   }, 100)
    // variable to check if the box allowed to move
    let boxMoveCheck = true
    let boxMoveTime = 100
    function boxMove () {
        // draw a box on the right side of the line 20 * 20
        ctx.clearRect(boxCounter + 20, 79, 20, 20)
        ctx.fillRect(boxCounter, 79, 20, 20)
        if(boxCounter == 0){
            boxCounter = 580
        } else{
            boxCounter = boxCounter - 20
        }
        if(boxMoveCheck){
            setTimeout(function () {
                boxMove()
              }, boxMoveTime)
        }
        
        
      }
      boxMove ()

    // draw the image abovethe line in Canvas starting from left 

    let img = document.createElement('img')
    img.src = './imgs/player_big.png'
    img.onload = function (e) {
        // to show full image
        // ctx.drawImage(img, 0, 39, 480, 60)

        // 10 carachtars and the full width is 480 so each one width is 480 / 10 = 48
        // 1st charachter start from 0
        // ctx.drawImage(img, 0, 0, 48, 60, 0, 39, 48, 60)
        // ctx.clearRect(0, 39, 48, 60)
        // 2nd charachter start from 48
        // ctx.drawImage(img, 48, 0, 48, 60, 0, 39, 48, 60)
        // ctx.clearRect(0, 39, 48, 60)
        // 3rd charachter start from 96
        // ctx.drawImage(img, 96, 0, 48, 60, 0, 39, 48, 60)
        // ctx.clearRect(0, 39, 48, 60)
        // 4rd charachter start from 144
        // ctx.drawImage(img, 336, 0, 48, 60, 0, 39, 48, 60)
        // position of each charachter is (charachter index - 1) * 48
        let framCounter = 0
        let scoreCounter = 0
        let characterInterval = setInterval(function () {
            ctx.clearRect(0, 0, 48, 99)
            //ctx.clearRect(0, 0, 48, 60)
            if(status == "running"){
                ctx.drawImage(img, framCounter, 0, 48, 60, 0, 39, 48, 60)
            } else {  
                ctx.drawImage(img, framCounter, 0, 48, 60, 0, 0 , 48, 60)
            }
            

            if( framCounter == 336 ){
                framCounter = 0
            } else {
                framCounter = framCounter + 48
            }
            if(boxCounter <= 39  && status == "running"){
                console.log("crash");
                //clearInterval(boxInterval)
                boxMoveCheck = false 
                clearInterval(characterInterval)
                // draw text 'crash' in canvas
                ctx.fillStyle = "red"
                ctx.font = "40px Arial"
                ctx.fillText("Crash", 250, 50 )
                
            }
            // add 1 for score everytime user jumps above the box
            if(boxCounter <= 39 && status == "jumpping"){
                // code 
                scoreCounter++
                scorSpn.innerText =  scoreCounter
                // reduce box movement time
                if(boxMoveTime > 50 ){
                    boxMoveTime -= 10
                }
                console.log(boxMoveTime);
                
                
            }
             
          }, 150)

      }

      // declare the status of the charachter
      let status = "running"
      window.onkeypress = function (e) {
          //console.log(e);
          if(e.key == " "){
              //console.log("jump");
              status = "jumpping"
              setTimeout(function () {
                status = "running"
                }, 500)
              
          }
          
        }





  }

  // increase box speed every success jump
  // students grade system get to grades from localstorage and save them in the studentsArr
  