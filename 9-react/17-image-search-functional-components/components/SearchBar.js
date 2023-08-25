import React, {useState} from 'react'

const SearchBar = (props) => {

    const [searchWord, setSearchWord] = useState('')

    
    const onSearchInpChange = (e) => {
      setSearchWord(e.target.value)
    }

    // componentDidUpdate(){
    //     console.log(this.state.searchWord);
    // }

    const onSearchBtnClick = () => {
        props.runSearch(searchWord)
    }

    return (
      <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button 
            className="btn btn-outline-secondary" 
            type="button" 
            onClick={onSearchBtnClick}
            >
                Search
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type something to search"
            value={searchWord}
            onChange={onSearchInpChange}
            />
        </div>
      </div>
    )
}

export default SearchBar