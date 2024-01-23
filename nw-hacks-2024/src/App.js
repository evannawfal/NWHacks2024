import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Login.js';
import { Events } from './Events.js';
import { Navbar } from "./Navbar.js";

export function App() {

  return (
    <div className="App">
      <script src="https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js"></script>
      <script src="https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore-compat.js"></script>
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