import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Home/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default App
