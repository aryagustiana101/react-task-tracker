import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <Link to="/">Go to the home page</Link>
    </div>
  );
};

export default NoMatch;
