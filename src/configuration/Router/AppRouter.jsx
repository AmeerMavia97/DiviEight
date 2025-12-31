
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// COMPONENTS 
import MainLayout from '@/layouts/MainLayout/MainLayout'
// SCREENS 
import Home from '@/screens/Home/Home'
import Signin from '@/screens/auth/Signin/Signin'
import Signup from '@/screens/auth/Signup/Signup'
import ForgetPassword from '@/screens/auth/ForgetPassword/ForgetPassword'
import SetNewPassword from '@/screens/auth/SetNewPassword/SetNewPassword'
import VerifyOtp from '@/screens/auth/VerifyOtp/VerifyOtp'
import Listings from '@/screens/Listing/Listings'
import ContactUs from '@/screens/ContactUs/ContactUs'
import ListingDetails from '@/screens/ListingDetails/ListingDetails'
import DashboardRouting from '@/screens/Dashboard'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainLayout><Home /></MainLayout>} />
        <Route path={"/properties"} element={<MainLayout><Listings /></MainLayout>} />
        <Route path={"/properties/detail"} element={<MainLayout><ListingDetails /></MainLayout>} />
        <Route path={"/contact-us"} element={<MainLayout><ContactUs /></MainLayout>} />
        <Route path={"/dashboard/*"} element={<DashboardRouting />} />

        {/* ======== AUTHENTICATION SCREENS ======== */}
        <Route path={"/login"} element={<Signin />} />
        <Route path={"/register"} element={<Signup />} />
        <Route path={"/forget-password"} element={<ForgetPassword />} />
        <Route path={"/set-new-password"} element={<SetNewPassword />} />
        <Route path={"/verify-otp"} element={<VerifyOtp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter