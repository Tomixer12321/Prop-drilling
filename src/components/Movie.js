import MoviesContext from "./MoviesContext";
import { useContext } from "react";

const Movie = ({ movies, deleteMovie }) => {
    const myData=useContext(MoviesContext)
    console.log(myData)


  return (
    <div>
      {movies.map((oneMovie) => {
        const { id, name } = oneMovie;
        return <div key={id}>
            <p>{name}</p>
            <button onClick={() => deleteMovie(id)}>Smazat</button>
          </div>
      })}
    </div>
  );
};

export default Movie;
