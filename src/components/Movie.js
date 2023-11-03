const Movie = ({ movies, deleteMovie }) => {
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
