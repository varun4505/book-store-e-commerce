import { Outlet } from 'react-router-dom'
import './App.css'
import './styles/global.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'
import { useEffect, useState } from 'react'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <Loading />; 
  }
  
  return (
    <div className="bg-amber-50 min-h-screen flex flex-col font-['Nunito',_sans-serif]">
      <AuthProvide>
        <Navbar />
        <main className='flex-grow max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 py-8 w-full'>
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
    </div>
  )
}

export default App
