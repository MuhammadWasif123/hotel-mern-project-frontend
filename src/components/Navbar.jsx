import React from "react";
import logoImage from "../assets/LankaStay.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Rooms", path: "/rooms" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact-us" },
  ];
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all max-width-container mb-4">
      <Link to="/">
        <img src={logoImage} alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <>
            <a
              key={i}
              href={link.path}
              className="text-[var(--color-nav-items)] group"
            >
              {link.name}
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[var(--main-theme-color)]"></div>
            </a>
          </>
        ))}

        <button className="border border-[var(--main-theme-color)] cursor-pointer px-4 py-1 transition rounded-full font-light text-[var(--color-nav-items)]">
          Dashboard
        </button>
        <button className="cursor-pointer px-8 py-2 bg-[var(--main-theme-color)] hover:bg-[var(--main-theme-color)] transition text-white rounded-lg font-semibold">
          Login
        </button>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        {navLinks.map((link,i)=>(
            <a key={i} href={link.path} className="block">{link.name}</a>
        ))}
        <button className="cursor-pointer px-6 py-2 mt-2 bg-[#3252DF] hover:bg-[#3252DF] transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
