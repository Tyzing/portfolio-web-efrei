function NavBar({ name }) {
  return (
    <nav className="flex items-center justify-between py-[12px]">
      <span className="font-comfortaa text-[18px] text-charcoal">
        {name}
      </span>
      <ul className="flex gap-[48px] list-none m-0 p-0">
        <li>
          <a href="#about" className="font-raleway text-[18px] text-charcoal no-underline hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="font-raleway text-[18px] text-charcoal no-underline hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contacts" className="font-raleway text-[18px] text-charcoal no-underline hover:underline">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;