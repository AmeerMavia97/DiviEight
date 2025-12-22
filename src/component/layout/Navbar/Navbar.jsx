import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import Logo from "@/assets/HeaderLogo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/properties" },
  { label: "Agent", href: "#properties" },
  { label: "Contact Us", href: "/contact-us" },
];

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-brandDark dark:text-brandLight font-para font-[600] tracking-[0.5px] text-[16px] hover:text-foreground transition-colors"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999999] bg-brandLight dark:bg-brandDark ">
      <div className="container mx-auto px-6 lg:px-14">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-full" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleTheme} className="mt-1">
              {theme === "dark" ? <Sun /> : <Moon className="text-brandDark" />}
            </button>

            <button className="flex items-center gap-4 px-2 pl-5 py-1.5 text-[15px] font-[450] rounded-full font-para bg-brandGreen text-brandLight">
              Get Started
              <span className="bg-brandLight rounded-full p-1.5 text-brandDark">
                <ArrowUpRight className="size-5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
