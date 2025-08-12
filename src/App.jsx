import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import HomePage from './Pages/HomePage/HomePage'
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
