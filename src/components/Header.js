import PropTypes from "prop-types";
import Button from "./Button";
import { FaTimes, FaPlus } from "react-icons/fa";

const Header = ({ title, toggleCreateTask, onToggleCreateTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={toggleCreateTask ? "gray" : "green"} text={toggleCreateTask ? <FaTimes /> : <FaPlus />} onClick={onToggleCreateTask} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
