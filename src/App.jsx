import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.css';

function App() {
  const [authentication, setAuthentication] = useState({
    isAuthenticated: true,
  });

  const { isAuthenticated } = authentication;

  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>HOMEPAGE</h1>} />
          <Route path="/login" element={<Navigate to="/profile" />} />
          <Route path="/create" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={<h1>PROFILE</h1>} />
          <Route path="/*" element={<h1>404 PAGE NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    );
  }

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>HOMEPAGE</h1>} />
          <Route path="/login" element={<h1>LOGIN</h1>} />
          <Route path="/create" element={<h1>CREATE</h1>} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
