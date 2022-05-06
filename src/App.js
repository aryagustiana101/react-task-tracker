import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import About from "./components/About";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
