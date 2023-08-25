import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar' 
import getData from './services/pixabay'
import ShowImages from './components/ShowImages'

class App extends React.Component{

    state = {
        results: [],
        searchWord: '',
        pageNum: 1,
        perPage: 4
    }



    search = (keyWord) => {
        if(keyWord) {
            getData(keyWord, 4, 1).then(data => {
                console.log(data);
                this.setState({
                    searchWord: keyWord,
                    pageNum: 1,
                    perPage: 4,
                    results: [...data.hits]
                    })
            })
        } else {
            this.setState({results: []})
        }
    }


    goNext = () => {
        getData(this.state.searchWord, this.state.perPage, this.state.pageNum + 1).then(data => {
            this.setState({
                pageNum: this.state.pageNum + 1,
                results: [...this.state.results, ...data.hits]
                })
        })
    }

    render(){
        return(
            <div className="container">
                <SearchBar runSearch={this.search} />
                {this.state.results.length ? <ShowImages images={this.state.results} runNext={this.goNext} /> : ''}
                
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))