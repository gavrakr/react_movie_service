import React, { useState, useEffect } from "react";
import style from "./Tables.css";

export default function MoviePage() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <table className={style.table} key="-1">
            <div key={movie.id}>
              <tr>
                <td>
                  <img src={movie.small_cover_image} alt="cover_image"></img>
                </td>
                <td>Title : {movie.title}</td>
                <td>Rating : {movie.rating}</td>
                <td>Summary : {movie.summary}</td>
                <td>
                  [Genres]
                  <ul>
                    {movie.genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </div>
          </table>
        ))
      )}
    </div>
  );
}
