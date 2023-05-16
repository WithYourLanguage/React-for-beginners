import styled from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ text }) {
  return <button className={styled.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
