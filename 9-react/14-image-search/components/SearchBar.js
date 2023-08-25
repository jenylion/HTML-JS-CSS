import React from 'react'

class SearchBar extends React.Component {
    state = {searchWord: ''}


    
    onSearchInpChange = (e) => {
        this.setState({searchWord: e.target.value })
        
    }

    // componentDidUpdate(){
    //     console.log(this.state.searchWord);
    // }

    onSearchBtnClick = () => {
        this.props.runSearch(this.state.searchWord)
    }

  render() {
    return (
      <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button 
            className="btn btn-outline-secondary" 
            type="button" 
            onClick={this.onSearchBtnClick}
            >
                Search
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type something to search"
            value={this.state.searchWord}
            onChange={this.onSearchInpChange}
            />
        </div>
      </div>
    )
  }
}

export default SearchBar