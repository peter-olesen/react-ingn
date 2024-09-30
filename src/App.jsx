import { FontLoader } from './hooks/FontLoader'
import { Router } from './router/Router'
import { TopBar } from './components/TopBar/TopBar'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import './App.scss'

function App() {
  FontLoader()

  return (
    <>
      
      <Router /> {/* Router should always be at the bottom */}
    </>
  )
}

export default App