import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Login.js';
import { Events } from './Events.js';
import { Navbar } from "./Navbar.js";


export function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

