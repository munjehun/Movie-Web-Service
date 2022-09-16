import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 하나의 Route만 보여주기 위해 Routes 사용 */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
