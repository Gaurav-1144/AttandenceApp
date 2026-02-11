import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Registration from './pages/Registration'
import EDashboard from './pages/EmpDashboard/Dashboard'
import ADashboard from './pages/Admin/Dashboard'

function App() {

  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/edashboard" element={<EDashboard />} />
        <Route path="/adashboard" element={<ADashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
