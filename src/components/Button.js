import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.prototype = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
