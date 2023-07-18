import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies,setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;

    store.subscribe(()=>{
      console.log("updated state")
      this.forceUpdate();
    })

    // store.dispatch({
    //   type:"ADD_MOVIES",
    //   movies:data
    // })
    store.dispatch(addMovies(data))


    // console.log(store.getState(),"this is state")
  }
  
  // constructor(){
  //   super();
  //   this.state={
  //         movies:data
  //   }
  // }
  
  isFavourite=(movie)=>{
     const {movies }=this.props.store.getState();
     let index=movies.favourites.indexOf(movie);
     if(index!==-1){
         return true;
    }
     return false;
    
   }
   onChangeTab=(value)=>{
      this.props.store.dispatch(setShowFavourites(value))
   }

   
  render(){
    const {movies,search} = this.props.store.getState();
    const {list,favourites,showFavourites}= movies;
    
    const displayMovies = showFavourites?favourites:list;

    console.log("Current state is : ",this.props.store.getState())
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movie</div>
            <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>

          </div>
          <div className="list">
              {displayMovies.map((movie,index)=>{
               return <MovieCard movie={movie} key={`movie-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isFavourite(movie)}
                />
              })}
        
          </div>
          

        </div>
        
      </div>
    );
  }
  
}

export default App;
