import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import FilterPage from "./components/FilterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/filter" element={<FilterPage />} />
        {/* <Route path="/results" element={Results} /> */}
      </Routes>
    </Router>
  );
}

export default App;
