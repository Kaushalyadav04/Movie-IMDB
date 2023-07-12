export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FROM_FAVOURITES ="REMOVE_FROM_FAVOURITES";  
export const SET_SHOW_FAVOURITES="SET_SHOW_FAVOURITES";



export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}

export function addFavourite(movie){
    return {
        type:ADD_FAVOURITES,
        movie:movie
    }
}

export function removeFromFavourites(movie){
    return{
        type:REMOVE_FROM_FAVOURITES,
        movie:movie
    }
}

export function setShowFavourites(value){
        return{
            type:SET_SHOW_FAVOURITES,
            value:value
        }

}