import React from 'react'
import Navbar from '@/component/layout/Navbar/Navbar'
import Footer from '@/component/layout/Footer/Footer'

const MainLayout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout