import React from "react";
import { Link } from "react-router-dom";

function Movie({ coverImg, id, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="cover" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        {/* a태그는 새로고침이 발생하므로 Link태그를 사용한다! */}
        {/* 백틱(``)을 쓸 때는 중괄호로 묶어줘야 한다! */}
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
