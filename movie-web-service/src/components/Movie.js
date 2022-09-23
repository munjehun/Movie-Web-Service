import React from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImg, id, title, summary, genres, year }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt="cover" className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
        {/* a태그는 새로고침이 발생하므로 Link태그를 사용한다! */}
        {/* 백틱(``)을 쓸 때는 중괄호로 묶어줘야 한다! */}
      </h2>
      <span className={styles.movie__year}>{year}</span>
      <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
