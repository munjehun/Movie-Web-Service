import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [mv, setMv] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();
    const mv = json.data.movie;
    setMv(mv);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(mv);
  console.log(mv.genres);

  return (
    <div>
      {mv.length !== 0 ? (
        <>
          <img src={mv.medium_cover_image} alt="cover" />
          <h2>{mv.title}</h2>
          <p>{mv.description_intro}</p>
          <ul>
            {mv.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </>
      ) : (
        "영화 정보 받아오는 중"
      )}
    </div>
  );
}

export default Detail;
