// you need to write your regex patern inside /^HERE/
// \d a digit (number)
// [a-z] check char is between a and z
// \s check is space or we can just write ' '

// 1 task
// write a regex to check that 
// first char is number
// second is small letter
// third is capital letter
// fourth is number

// 2 task
// write a regex to check that 
// first char is number
// second is white space
// third is capital letter
// fourth is number

// 3 task 
// check if text is an email

// 4 task 
// regex to match german phone number 
// +49 152 901820

// 5 task 
// create an input in the html and a Button
// on button click 
// if the input value is a German phone number, set the input border color green
// else set the input borser color red

// 6 task 
// create a regex to check site name
// for example www.digitalcareerinstitute.org valid
// www.fgfgf.com valid
// gg.com not valid
// wwwfff.cc not valid
// www.fgfgfg not valid

let someText = '364bsdsdsds'
let regex = new RegExp(/^\d\d\d[a-z]/)
let testResult = regex.test(someText)
console.log(testResult);

// 1 task solution
let text1 = '1gF156f4g'
let regex1 = new RegExp(/^\d[a-z][A-Z]\d/)
console.log(regex1.test(text1));

// 2 task solution
let text2 = '5 G54gsd'
let regex2 = new RegExp(/^\d [A-Z]\d/)
console.log(regex2.test(text2));

// 3 task solution
let text3 = 'fff@dd.cc'
let regex3 = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
console.log(regex3.test(text3));
// GGGHHH@GGG.COM

// 4 solution
let text4 = '+49 17565553654'
let regex4 = new RegExp(/^((\+49)|(0049))(\s|)((\d{11})|(\d{10}))$/)
console.log(regex4.test(text4));

// 5 solution
window.onload = function () {
    let inp1 = document.querySelector('#inp1')
    let btn1 = document.querySelector('#btn1')
    btn1.addEventListener('click', function(){
        if(regex4.test(inp1.value)){
            inp1.classList.add('valid')
            inp1.classList.remove('invalid')
        } else{
            inp1.classList.remove('valid')
            inp1.classList.add('invalid')
        }
        // 6 task solution
        let inp2 = document.querySelector('#inp2')
        //let regex5 = new RegExp(/^www\.\w{2,}\.\w{2,}$/)
        let regex5 = new RegExp(/^www.[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?$/)
        if(regex5.test(inp2.value)){
            inp2.classList.add('valid')
            inp2.classList.remove('invalid')
        } else{
            inp2.classList.remove('valid')
            inp2.classList.add('invalid')
        }
    })
  }

  // homeworks
  // regex to check ip adress
  // 127.123.0.1
  // 500.555.44.1 not valid
//   ip address contains 4 numbers separated by . and each number should be in [0 - 255] 
  


