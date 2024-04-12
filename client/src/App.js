import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Lobby from "./Pages/Lobby";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/lobby" element={<Lobby />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
