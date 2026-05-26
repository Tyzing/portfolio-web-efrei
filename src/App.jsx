import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const name = "Bastien Dubile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home name={name} />} />
      <Route path="/about" element={<About name={name} />} />
    </Routes>
  );
}

export default App