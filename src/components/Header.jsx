import NavBar from "./NavBar";

function Header({ name }) {
  return (
    <div className="h-[56px]">
      <NavBar name={name} />
    </div>
  )
}

export default Header