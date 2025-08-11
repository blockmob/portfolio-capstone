import React from 'react'
import Hero from './Pages/Hero'
import Faq from './Pages/Faq/Faq'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Faq />} /> */}
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </Router>
  )
}
export default App