import StatsCard from '@/component/Cards/StatsCard'
import DashboardHeader from '@/component/layout/DashboardHeader/DashboardHeader'
import DashboardLayout from '@/layouts/DashboardLayout/DashboardLayout'
import React from 'react'

const Dashboard = () => {
    return (
        <>
            <section className='p-2'>
                <DashboardHeader title={"Dashboard"} description={"Welcome, Wade Warren"}></DashboardHeader>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

                    <StatsCard
                        title="Total Revenue"
                        value="$1.2M"
                        subText="+18.5% this month"
                        accent="bg-[#e0eefa]"
                    />

                    <StatsCard
                        title="Active Listings"
                        value="3"
                        subText="2 pending approval"
                        accent="bg-cyan-500"
                        positive={false}
                    />

                    <StatsCard
                        title="Total Views"
                        value="2,847"
                        subText="+324 this week"
                        accent="bg-teal-500"
                    />

                    <StatsCard
                        title="Inquiries"
                        value="18"
                        subText="5 new today"
                        accent="bg-cyan-500"
                    />
                </div>
            </section>
        </>
    )
}

export default Dashboard