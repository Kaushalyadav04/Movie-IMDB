import React from "react";
import { addFavourite, removeFromFavourites } from "../actions";
class MovieCard extends React.Component{

    handleFavouriteClick=()=>{
            const {movie}=this.props;
            // console.log(movie,"this is movie  which got select")
            this.props.dispatch(addFavourite(movie));
        } 
    

    handleunFavouriteClick =()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }
    render(){
        const {isFavourite}=this.props;
        // console.log(this.props,"this is what I am looking for***********")   
        return(
            <div className="movie-card">
                <div className="left">
                    <img src={this.props.movie.Poster} alt="" />
                </div>
                <div className="right">
                    <div className="title">{this.props.movie.Title}</div>
                    <div className="plot">{this.props.movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{this.props.movie.imdbRating}</div>
                        {
                            // <button className="favourite-btn" onClick={this.handleFavouriteClick}>Add to Favourite</button>
                             isFavourite
                             ?<button className="unfavourite-btn" onClick={this.handleunFavouriteClick}>Unfavourite</button>
                             :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                         }
                    </div>

                </div>
                
            </div>
        )
    }
}


export default MovieCard;