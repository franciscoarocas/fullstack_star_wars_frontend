
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import People from './pages/people';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
