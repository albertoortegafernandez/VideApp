import { Route, Routes } from "react-router-dom";
import { MovieDetail } from "./app/pages/MovieDetail";
import Home from "./app/pages/Home";
import { TvShowDetail } from "./app/pages/TvShowDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="tvShowDetail/:id" element={<TvShowDetail />} />
        <Route path="movieDetail/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
