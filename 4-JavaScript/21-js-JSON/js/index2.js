

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
xhr.send();
xhr.onload=function(){
  if(xhr.status == 200){
    //console.log(xhr.response)
    let joke =JSON.parse(xhr.response)
    console.log(joke.value)
    document.write('<img src="'+joke.icon_url+'" >')
  }else{
    console.log('error number is : ' + xhr.status)
  }
}





















// let xhr = new XMLHttpRequest();
// xhr.open('GET', '/data.json');
// xhr.send();
// xhr.onload = function(){
//   // console.log(xhr.status)
//   // console.log(xhr.response)
//   // xhr.status response number 200 is ok, 404 is page not found, 500 server error
//   if(xhr.status == 200){
//     console.log('All good ')
//     console.log(xhr.statusText)
//     // xhr.response data comming back from the server
//     console.log(xhr.response)
//   } else{
//     console.log(xhr.statusText)
//     console.log('Error Number : '+ xhr.status )
//   }
// }























  



