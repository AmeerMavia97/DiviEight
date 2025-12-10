
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// COMPONENTS 
import MainLayout from '@/layouts/MainLayout/MainLayout'
// SCREENS 
import Home from '@/screens/Home/Home'
import Signin from '@/screens/auth/Signin/Signin'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainLayout><Home /></MainLayout>} />
        <Route path={"/register"} element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter