import "./App.css";
import Gallery from "./components/Gallery";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";

// import routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
