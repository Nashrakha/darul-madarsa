import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import Teachers from "./Pages/Teachers";
import Admission from "./Pages/Admission";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />

      </Routes>
    </Router>
  );
}

export default App;