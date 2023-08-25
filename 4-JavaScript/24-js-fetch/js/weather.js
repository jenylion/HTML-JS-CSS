async function getWeather(keyWord) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+keyWord+'&APPID=d05af9477b0f46101352d52dfb650f46'
    let response = await fetch(url)
    let data = await response.json()

console.log(data)
document.write('<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">')
  }
  getWeather(prompt('enter your city'))
  // http://openweathermap.org/img/wn/10d@2x.png