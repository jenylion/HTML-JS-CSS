// for (let i = 0 ; i < 10 ; i++){
//     document.write('*<br>')
// }

// for (let i = 0; i < 10; i++) {
//     for (let x = 0; x < 10; x++) {
//         document.write('*<br>')
//     }
//     document.write('////////////////<br>')
// }


// *****
// *****
// *****
// *****
// *****
// for (let i = 0; i < 5; i++) {
//     for (let x = 0; x < 5; x++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

// for (let i = 1; i <= 10; i++) {
//     for (let x = 1; x <= 10; x++) {
//         document.write(i + 'x' + x + "=" + i*x + '<br>' )       
//     }
    
// }


// *
// **
// ***
// ****
// *****
// for (let i = 0; i <= 4; i++) {
//     for (let x = 0; x <= i; x++) {
//     document.write('*')
//     }
//     document.write('<br>')
// }

// *****
// ****
// ***
// **
// *
// for (let i = 0; i <= 4; i++) {
//     for (let x = 4; x >= i; x--) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// for (let i = 4; i >= 0; i--) {
//     for (let x = 0; x <= i; x++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// for (let i = 0; i <= 4; i++) {
//     for (let x = 0; x <= 4; x++) {
//         if((x + i ) >= 4) {
//             document.write('*')
//         } else {
//             document.write('-')
//         }
//     }
//     document.write('<br>')
    
// }

//     *
//    **
//   ***
//  ****
// *****
// for (let i = 4; i >= 0; i--) {
//     for (let x = 0; x <= 4; x++) {
//         if( i <= x){
//             document.write("*")
//         } else {
//             document.write("&nbsp; ")
//         }
//     }
//     document.write("<br>")
    
// }

function showBox(num) {
    for (let i = 0; i < num; i++) {
        for (let x = 0; x < num; x++) {
            if(
                i == 0 ||
                 x == 0 ||
                  x == num - 1 ||
                   i == num - 1 ||
                   i == x ||
                   i + x == num - 1
                   ){
                document.write('*')
            } else {
                document.write('&nbsp; ')
            }
        }
        document.write('<br>')
    }
  }
  showBox(10)