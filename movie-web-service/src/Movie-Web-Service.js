import React, { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await res.json();
    console.log(json);
    setMovies([...json.data.movies]);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>영화정보 받아오는 중</h1>
      ) : (
        <div>
          {movies.map((mv) => (
            <div key={mv.id}>
              <img src={mv.medium_cover_image} alt="cover image" />
              <h2>{mv.title}</h2>
              <p>{mv.summary}</p>
              <ul>
                {mv.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
