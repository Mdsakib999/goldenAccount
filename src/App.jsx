import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Home/Footer'
import Loading from './utilsComponents/Loading/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className=''>
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default App
