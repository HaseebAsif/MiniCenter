import "./App.css";
import Home from "./pages/home/Home";
import Demo from "./pages/demo/Demo";
import Research from "./pages/research/Research";
import Company from "./pages/company/Company";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/company" element={<Company />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
}

export default App;
