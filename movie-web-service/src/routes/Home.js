import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // axios로 해보기!!
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
            <Movie
              key={mv.id}
              id={mv.id}
              coverImg={mv.medium_cover_image}
              title={mv.title}
              summary={mv.summary}
              genres={mv.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
