import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres, id }) {
  // Movie라는 컴포넌트
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        {/* 백틱 사용법 문장 전체에 백틱 씌우고 변수만 $처리 */}
        {/* href 사용하지 않는다. => 페이지 전체가 새로고침 되기때문에!
            <Link>를 사용해서 페이지 새로고침이 아닌 바로 렌더되도록 한다! */}
      </h2>
      <img src={coverImg} alt={title} />
      {/* 모든 이미지 element들은 alt 속성을 가진다! */}
      <p>{summary}</p>
      <ul>
        {genres.map((genre, idx) => (
          <li key={idx}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
