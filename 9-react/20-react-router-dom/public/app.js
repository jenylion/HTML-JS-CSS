import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'



const PageOne = () => {
    return(
        <div>
            Page One
            <br />
            {/* <a href="/pagetwo">Page two</a> */}
            <Link to="/pagetwo">Page two</Link>
        </div>
    )
}


const PageTwo = () => {
    return(
        <div>
            Page Two
            <br />
            {/* <a href="/">Page one</a> */}
            <Link to="/">Page one</Link>
        </div>
    )
}

const PageThree = () => {
    return(
        <div>Page Three</div>
    )
}





class App extends React.Component{
    render() {
        return(
                <BrowserRouter>
                <NavBar />
                    <Switch>
                        <Route exact path="/pagetwo/pagethree" component={PageThree} />
                        <Route exact path="/pagetwo"  component={PageTwo} />
                        <Route exact path="/"   component={PageOne} /> 
                        
                    </Switch>
                </BrowserRouter>           
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))