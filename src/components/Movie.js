import PropTypes from "prop-types";

function Movie({ movieNm }) {
  return (
    <div>
      <h2>{movieNm}</h2>
      <p>영화 줄거리 기능은 API 문제로 제공되지 않습니다</p>
    </div>
  );
}

Movie.propTypes = {
  movieNm: PropTypes.string.isRequired,
};

export default Movie;
