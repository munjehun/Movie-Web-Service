import React, { useEffect } from "react";
// import { setMovies, setLoading } from "./Home.js";
import { useParams } from "react-router-dom";
//파라미터값만 받아오는 함수

function Detail() {
  const { id } = useParams();
  // console.log(id); //{id:'25833'} 이런 형식으로 찍힘  App에서 :id로 정의했기 떄문!!
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
