import Sidebar from '@/component/layout/Sidebar/Sidebar'
import React from 'react'

const DashboardLayout = ({ screens }) => {
    return (
        <>
            <section className="flex justify-between bg-[#0f1518] ">
                <div className=''>
                    <Sidebar></Sidebar>
                </div>
                <div className="bg-[#fff]  rounded-tl-[50px] p-5 w-[79%]">
                    
                    {screens}
                </div>
            </section>
        </>
    )
}

export default DashboardLayout