import { Calendar, FileText, Home, LayoutDashboard, Settings, User } from "lucide-react";
import { useState } from "react";
import Logo from '@/assets/HeaderLogo.png'
import { href, Link, NavLink } from "react-router-dom";

const Sidebar = () => {

    const menuItems = [
        { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={19} /> },
        { name: "Create Listing", href: "/dashboard/create-listing", icon: <Home size={19} /> },
        { name: "My Listing", href: "/dashboard/listing", icon: <Calendar size={19} /> },
        { name: "Account Settings", href: "/dashboard/profile", icon: <Settings size={19} /> },
        { name: "Help & Support", href: "/dashboard/support", icon: <User size={19} /> },
    ];


    return (
        <div className="w-64 h-screen bg-[#0f1518] px-4 py-5 flex flex-col justify-between fixed">


            <div className="flex flex-col gap-8">
                {/* Logo */}
                <div className="flex justify-center mt-4">
                    <img src={Logo} alt="Logo" className="w-[70%]" />
                </div>
                {/* Main Menu */}
                <div >
                    <ul className="flex flex-col gap-2">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                end={item.href === "/dashboard"}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 text-[16.8px] font-head tracking-[-0.4px]
         py-2 px-3 rounded cursor-pointer transition-colors
         ${isActive
                                        ? "bg-brandGreen text-white"
                                        : "text-brandLight hover:bg-brandDark2"
                                    }`
                                }
                            >
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                            </NavLink>
                        ))}
                    </ul>

                </div>
            </div>

            <div className="bg-brandDark2 rounded-2xl shadow-lg py-6 mr-3 ml-2 flex flex-col items-center text-center gap-3">
                <div>
                    <img className="w-14 rounded-full object-cover h-14" src="https://www.newlista.com/assets/RevImage1-CFSbwp3_.jpg" alt="" />
                </div>
                <div>
                    <p className="text-brandLight font-head text-sm">Welcome Back!</p>
                    <h2 className="text-xl  font-head font-semibold text-brandLight">Wade Warren</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
