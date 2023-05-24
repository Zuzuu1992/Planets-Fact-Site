import data from "./Data/data.json";
import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "./Pages/Planets";
import Header from "./Pages/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/planets/mercury" />} />

        <Route path="/planets/:name" element={<Planets />} />
      </Routes>
    </>
  );
}

export default App;
