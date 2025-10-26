import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="./" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer/>
      </>
  )
}

export default App
