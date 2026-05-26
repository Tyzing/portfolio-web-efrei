import NavBar from "./NavBar";

function Header({ name }) {
  return (
    <div className="px-[8%]">
      <NavBar name={name} />
    </div>
  );
}

export default Header