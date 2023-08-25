let x = new Date()
document.write(typeof(x) + '<br>')
document.write(x + '<br>')

let y = new Date(2012,0,6)
document.write(y + '<br>')

document.write(y.getFullYear() + '<br>') // return year
document.write(y.getMonth() + '<br>') // return month 0 - 11
document.write(y.getDate() + '<br>') // return day 1 - 31
document.write(y.getDay() + '<br>')
document.write(Date.now() + '<br>') // return the order of weekday, start on Sunday 0

let date1 = new Date('01,01,2018')
document.write(date1 + '<br>')

let date2 = new Date('01,03,2018')
document.write(date2 + '<br>')
document.write((date2 - date1)/1000/60/60/24 + '<br>')

let myBirthDate = new Date('02.02.1986 07:10:5')
let currentDate = Date.now()
let diffrence = currentDate - myBirthDate
document.write(diffrence/1000/60/60/24/365 + '<br>')
