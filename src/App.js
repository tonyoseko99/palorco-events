import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Footer from './components/Footer';

// import routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
      

    </div>
  );
}

export default App;
