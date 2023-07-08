import React from "react";

class MovieCard extends React.Component{

    render(){
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
                        <button>Add to favourite</button>
                    </div>

                </div>
                
            </div>
        )
    }
}


export default MovieCard;