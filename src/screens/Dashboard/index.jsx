import DashboardLayout from '@/layouts/DashboardLayout/DashboardLayout'
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
                </Routes>
            }>
            </DashboardLayout>
        </>
    )
}

export default DashboardRouting