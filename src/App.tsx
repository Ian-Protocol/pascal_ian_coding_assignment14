import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./components/Portfolio/Nav";
import { BasicInfo } from "./pages/BasicInfo";
import { Work } from "./pages/Work";
import { Skills } from "./pages/Skills";
import { Resources } from "./pages/Resources";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<BasicInfo />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
