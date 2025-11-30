import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/HeaderLogo.png"
import { Button } from "@/component/ui/Button";
import { Menu, User, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/component/ui/Sheet";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/" },
    { name: "Agents", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <nav className="w-full dark bg-brandBlack ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2.5 ">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="">
            <Link href="/" className="">
              <img className="w-full" src={Logo} alt="" />
            </Link>
          </div>

          {/* Center: Menu */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brandWhite font-head text-[15px]  hover:text-blue-500 font-semibold"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Button + User + Search */}
          <div className="hidden md:flex items-center space-x-5">
           
            <Search className="w-5 h-5 text-brandWhite hover:text-blue-500 cursor-pointer" />
            <User className="w-6 h-6 text-brandWhite hover:text-blue-500 cursor-pointer" />
             <Button className="bg-brandBlue px-5 py-2 text-white hover:bg-blue-800 rounded-md">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 font-medium hover:text-blue-500"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    Sign In
                  </Button>
                  <div className="flex space-x-4 mt-4">
                    <Search className="w-5 h-5 text-gray-600" />
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
