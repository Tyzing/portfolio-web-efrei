import { useState } from "react";

function NavBar({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contacts", label: "Contacts" },
  ];

  return (
    <nav className="flex items-center justify-between py-[12px] relative">
      <span className="font-comfortaa text-[18px] text-charcoal">
        {name}
      </span>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-[48px] list-none m-0 p-0">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="font-raleway text-[18px] text-charcoal no-underline hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Burger button – mobile only */}
      <button
        className="md:hidden flex flex-col justify-center gap-[5px] w-[30px] h-[30px] cursor-pointer bg-transparent border-none p-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={`block w-full h-[2px] bg-charcoal rounded transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-full h-[2px] bg-charcoal rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-full h-[2px] bg-charcoal rounded transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 right-0 bg-[#F9FAFF]/95 backdrop-blur-sm list-none m-0 p-0 shadow-md z-50 rounded-b-lg">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="block font-raleway text-[18px] text-charcoal no-underline py-[14px] px-[16px] hover:bg-black/5"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;