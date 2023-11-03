import data from "./data"
import MovieBox from "./components/MovieBox"
import {useState} from "react"
import MoviesContext from "./components/MoviesContext"

const App = () => {
  const [movies,setMovies]=useState(data)

  const deleteMovie=(movieId)=>{
    const newMovieList=movies.filter((oneMovie)=>{
      return oneMovie.id!==movieId
    })
    setMovies(newMovieList)
  }
  return <MoviesContext.Provider value={"ahooooooj"}>
    <MovieBox movies={movies} deleteMovie={deleteMovie}/>
  </MoviesContext.Provider>
}

export default App