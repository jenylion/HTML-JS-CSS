import React from 'react'
import ReactDOM from 'react-dom'
import Accordion from './components/Accordion'


const items = [
    {
        title: 'What is React?',
        content: 'React is afront end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourit library for front end developers'
    },
    {
        title: 'How to use React?',
        content: 'You use React by creating Components'
    }
]


const App = () => {
    return(
        <div className="container">
            <Accordion items={items} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#container'))