import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Build using React Version ^18.1.0</h4>
      <Link to="/">Go Back</Link>
      <Outlet />
    </div>
  );
};

export default About;
