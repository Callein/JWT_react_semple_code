import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProtectedComponent from './components/ProtectedComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<ProtectedComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
