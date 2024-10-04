import { useState } from "react";
import { TopBar } from '../components/TopBar/TopBar'
import { Outlet as Content } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'

export const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
    <TopBar isVisible={isVisible} setisVisible={setIsVisible} />
    <Content />
    <Footer />
    </>
  )
}