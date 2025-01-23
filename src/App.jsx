import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Navbar from "./parts/navbar";
import Compare from "./pages/Compare.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/compare" element={<Compare />} />1
      </Routes>
    </>
  );
}

export default App;
