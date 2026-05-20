function NavBar() {
  return (
    <nav className="flex items-center justify-between mx-[8%] py-[12px]">
      <span className="font-comfortaa text-[18px] text-charcoal">
        Bastien Dubile
      </span>
      <ul className="flex gap-[48px] list-none m-0 p-0">
        <li>
          <a href="#about" className="font-raleway text-[18px] text-charcoal no-underline">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="font-raleway text-[18px] text-charcoal no-underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contacts" className="font-raleway text-[18px] text-charcoal no-underline">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;