function MovieList({ movies }) {
  return (
    <>
      {movies.map((value, key) => {
        return (
          <tr key={key}>
            <td>{value.title}</td>
            <td>{value.genre}</td>
            <td>{value.year}</td>
          </tr>
        );
      })}
    </>
  );
}
export default MovieList;
