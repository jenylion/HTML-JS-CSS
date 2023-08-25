import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './components/Comment'
import ApprovaCard from './components/ApprovalCard'


const App = () => {
  return (
    <div className="ui container comments">
        <ApprovaCard>
            Hey I am a beauteful card
        </ApprovaCard>
        <ApprovaCard>
            <h2>Confirm</h2>
            <Comment text="Nice comment" rate="5" starColor="green"/>
        </ApprovaCard>
        
        <Comment text="I like it" rate="4" starColor="blue"/>
        <Comment text="not bad" rate="1" starColor="yellow"/>
        <Comment rate="3" starColor="gray"/>
    </div>
  )
}

ReactDOM.render(
  <App/>, document.querySelector('#container'))