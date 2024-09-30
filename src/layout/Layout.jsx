import { TopBar } from '../components/TopBar/TopBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'

export const Layout = () => {
  return (
    <>
    <TopBar />
    <Outlet />
    <Footer />
    </>
  )
}