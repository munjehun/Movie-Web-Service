import { useEffect, useState } from "react";
import React from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // 처음 렌더될 때 한 번만!
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
    )
      .then((response) => response.json()) //받아온 결과를 제이슨화!
      .then((json) => {
        setMovies(json.data.movies); // 제이슨화 된것.data.movies == movies로 정의
        setLoading(false); // 로딩 없애기
      });
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading..</h1> // 로딩중이면
      ) : (
        // fetch로 데이터 다 받아오면
        movies.map((movie) => (
          <Movie // props로 다 Movie 컴포넌트에 넘기기!
            key={movie.id} // 컴포넌트를 map할 때도 key필요!
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            id={movie.id}
          />
        ))
      )}
    </div>
  );
}

export default Home;
