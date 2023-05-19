import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ movieNm, id }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{movieNm}</Link>
      </h2>
      <p>영화 줄거리 기능은 API 문제로 제공되지 않습니다</p>
    </div>
  );
}

Movie.propTypes = {
  movieNm: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
