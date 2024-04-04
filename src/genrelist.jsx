function Genrelist({ genres }) {
  function onclick(e) {
    console.log(`filtering by ${e.target.innerText}`);
  }
  return (
    <div style={{ padding: "1rem", backgroundColor: "rgb(230, 232, 232)" }}>
      <h2>Filter By Genre</h2>
      <div id="genrecontainer">
        {genres.map((value, key) => {
          return (
            <div key={key} onClick={onclick} className="cards">
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Genrelist;