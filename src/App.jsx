import { FontLoader } from './hooks/FontLoader'
import { Router } from './router/Router'

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