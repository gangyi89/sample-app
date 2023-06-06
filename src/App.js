import { React } from "react";
import { Routes, Route } from "react-router-dom"
import Main from "./components/Main";
import About from "./components/About";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Main />} />
      </Routes>    
  );
}

export default App;
