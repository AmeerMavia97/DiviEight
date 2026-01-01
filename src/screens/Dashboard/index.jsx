import DashboardLayout from '@/layouts/DashboardLayout/DashboardLayout'
import ChangePassword from '@/screens/auth/ChangePassword/ChangePassword'
import AccountSettings from '@/screens/Dashboard/AccountSetting/AccountSetting'
import Dashboard from '@/screens/Dashboard/Dashboard'
import CreateListing from '@/screens/Dashboard/SellerDashboard/CreateListing/CreateListing'
import MyListing from '@/screens/Dashboard/SellerDashboard/MyListing/MyListing'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const DashboardRouting = () => {
    return (
        <>
            <DashboardLayout screens={
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/create-listing" element={<CreateListing />} />
                    <Route path="/listing" element={<MyListing />} />
                    <Route path="/profile" element={<AccountSettings />} />
                </Routes>
            }>
            </DashboardLayout>
        </>
    )
}

export default DashboardRouting