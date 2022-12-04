import { Route, Routes } from "react-router-dom";
import { Detail } from "./app/pages/Detail";
import Home from "./app/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
