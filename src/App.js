import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';
import Navigation from './components/Navigation';
import Login from './components/Login';

// import routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
