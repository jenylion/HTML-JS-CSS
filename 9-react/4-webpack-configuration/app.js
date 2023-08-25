import {Article, Category} from './modules/module1.js';
import validator from 'validator';

document.querySelector('#submitBtn').addEventListener('click', e => {
    e.preventDefault();
    const title = document.querySelector('#titleInp').value;
    const category = document.querySelector('#categorySelect').options[document.querySelector('#categorySelect').selectedIndex].value;
    const description = document.querySelector('#descriptionText').value;
    let categoryObg;
    switch (category) {
        case 'news':
            categoryObg = Category.News();
            break;
        case 'sport':
            categoryObg = Category.Sport();
            break;
        case 'politics':
            categoryObg = Category.Politics();
            break;
        case 'Beauty':
            categoryObg = Category.Beauty();
            break;
    
        default:
            categoryObg = new Category('No Category')
            break;
    }
    // title
    // not empty not less than 2 chars and not more than 50char

    // category
    // not empty 

    // description
    // not empty not less than 10 chars and not more than 1000 char

    let errorMsgs = '';
    if (validator.isEmpty(title)) {
        errorMsgs = 'title should not be empty\n';
    }
    if (!validator.isLength(title, {min: 2, max: 50})) {
        errorMsgs += 'title length should be between 2 and 50 chars\n'
    }
    if (validator.isEmpty(category)) {
        errorMsgs += 'you should choose a category\n';
    }
    if (validator.isEmpty(description)) {
        errorMsgs += 'description should not be empty\n';
    }
    if (!validator.isLength(description, {min: 10, max: 1000})) {
        errorMsgs += 'description length should be between 10 and 1000 chars\n'
    }

    if(!errorMsgs){
        const container = document.querySelector('#container')
        const article = new Article(title, description, categoryObg);
        article.render(container)
    } else {
        alert(errorMsgs)
    }
    


})