import { TopBar } from '../components/TopBar/TopBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { useFetchCategories } from '../hooks/queryFetch';

export const Layout = () => {
  const { data } = useFetchCategories();

  return (
    <>
    <TopBar categories={data?.stories || []} />
    <Outlet />
    <Footer />
    </>
  )
}