import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <>
      {/* Navbar stays at the top of every page */}
      <Navbar />

      {/* Main content changes based on the route */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Route */}
        </Routes>
      </main>

      {/* Footer stays at the bottom of every page */}
      <Footer />
    </>
  )
}

export default App
