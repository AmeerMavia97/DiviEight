// import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/assets/HeaderLogo.png"
// import { useTheme } from "next-themes";

const NavLinks = [
  { Nav: "Home", Links: "#how-it-works" },
  { Nav: "Services", Links: "#benefits" },
  { Nav: "Agent", Links: "#properties" },
  { Nav: "Contact Us", Links: "#faq" },
]


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const { theme, setTheme } = useTheme();

  // const isDark = theme === "dark"

  return (
    <nav data-aos="fade-down" className="fixed top-0 left-0 right-0 z-[9999999] dark:bg-black bg-[#fafeff] border-b border-[#ffffff0a] ">
      <div className="container mx-auto px-6 lg:px-14">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img className="w-full" src={Logo} alt="" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-white">
            {
              NavLinks.map((items) => (
                <a href="#how-it-works" className="text-black dark:text-white tracking-[0.5px] font-[600] text-[16px] hover:text-foreground transition-colors">
                  {items.Nav}
                </a>
              ))
            }
            <a href="#how-it-works" className="text-black dark:text-white tracking-[0.5px] font-[600] text-[16px] hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#benefits" className="text-black tracking-[0.5px] dark:text-white font-[600] text-[16px] hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#properties" className="text-black tracking-[0.5px] dark:text-white font-[600] text-[16px] hover:text-foreground transition-colors">
              Agent
            </a>
            <a href="#faq" className="text-black font-[600] tracking-[0.5px] dark:text-white text-[16px] hover:text-foreground transition-colors">
              Contact Us
            </a>
          </nav>


          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="mt-1" > {theme === "dark" ? <Sun /> : <Moon className="text-black" />} </button> */}
            <button className="px-2 rounded-full gap-4 pl-5 flex py-1.5 text-[15px] font-[450] items-center bg-[#46acb4]">Get Started <span className="bg-white rounded-full px-1.5 py-1.5 text-black"><ArrowUpRight className="size-5" /></span></button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                How It Works
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Benefits
              </a>
              <a href="#properties" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Properties
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                FAQ
              </a>
              <div className="flex flex-col gap-3 pt-4">
                {/* <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full">Get Started</Button> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
