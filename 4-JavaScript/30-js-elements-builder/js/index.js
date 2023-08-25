window.onload = ()=>{
    let container = document.querySelector('#container');
    let titleElm = document.createElement('h3');
   titleElm.id = "header1";
    titleElm.innerText = 'FBW5';
    container.append(titleElm)

    let articleElm = document.createElement('p');
    articleElm.innerText="Don't worry , be Happy, Corona";
    articleElm.classList.add('par1');
    container.append(articleElm)

    let span1 = document.createElement('span');
    span1.innerHTML = ",<br> I am span1";
    articleElm.append(span1);

    let htmlText = '<section>'+
    '<h2 class="someclass" >title</h2>'+
    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint expedita porro. Officiis atque sit repudiandae quis unde id nihil ad ducimus. Ullam, delectus iste ipsam a amet unde quis!</p>'+
'</section>';
let container2 = document.querySelector('#container2');
for (let i = 0; i < 100; i++) {
    container2.innerHTML += htmlText
}

}