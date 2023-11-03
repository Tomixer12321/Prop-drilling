import Movie from "./Movie"

const MovieBox = ({movies,deleteMovie}) => {
  return <div>
    <Movie movies={movies} deleteMovie={deleteMovie}/>
  </div>
}

export default MovieBox