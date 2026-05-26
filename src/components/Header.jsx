import NavBar from "./NavBar";

function Header({ name }) {
  return (
    <div className="sticky top-0 z-40 bg-[#F9FAFF]/95 backdrop-blur-sm px-[8%]">
      <NavBar name={name} />
    </div>
  )
}

export default Header