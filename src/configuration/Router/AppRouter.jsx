import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/screens/Home/Home'
import Navbar from '@/component/layout/Navbar/Navbar'
import Footer from '@/component/layout/Footer/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter