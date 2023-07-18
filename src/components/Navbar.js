import React from "react";
import { handleMovieSearch,addMovieToList } from "../actions";
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }
    handelChange = (e) => {
        console.log(e.target.value)
        this.setState({
            searchText:e.target.value
        })
    }
    handleSearch = ()=>{
        const {searchText}=this.state;
        console.log("search state",this.state,"search state");

        console.log("search text",searchText,"search text");
        this.props.dispatch(handleMovieSearch(searchText))
    }

    handleAddToMovies = (movie)=>{
        this.props.dispatch(addMovieToList(movie))
    }
    render(){
        const {result,showSearchResult} = this.props.search;
        console.log(result,"search result is *******")
        return(
            <div className="nav">
                <div className="search-container" >
                    <input onChange={this.handelChange}></input>
                    <button  id="search-btn" onClick={this.handleSearch}>search</button>
                    {/* {console.log("show Search result",showSearchResult)} */}
                    {showSearchResult &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="search-pic"></img>
                                {console.log(typeof result)}
                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={()=>this.handleAddToMovies(result)}>Add to Movies</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                   
            </div>

         
        )
    }
}

export default Navbar;