import { FontLoader } from './hooks/FontLoader'
import { Router } from './router/Router'
import { Navigation } from './components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import './App.scss'

function App() {
  FontLoader()

  return (
    <>
      <Navigation />
      <Outlet />
      
      <Router /> {/* Router should always be at the bottom */}
    </>
  )
}

export default App