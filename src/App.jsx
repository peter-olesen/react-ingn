import { FontLoader } from './hooks/FontLoader'
import { Router } from './router/Router'
import { useFetchCategories } from './hooks/queryFetch';

import './App.scss'

function App() {
  FontLoader()

  const { data, isLoading, error } = useFetchCategories();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading: {error.message}</p>;
  }

  return (
    <>

      <Router /> {/* Router should always be at the bottom */}
    </>
  )
}

export default App