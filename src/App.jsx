import { Header, Button, Footer, Heros, ItemProject, ListProject, NavBar, TitleSection } from "./components";

const name = "Bastien Dubile";

function App() {
  return (
    <div className="bg-[#F9FAFF] bg-[url('/image-accueil.webp')] bg-no-repeat bg-right-top bg-[size:50%_auto] min-h-screen">
      <div className="mx-[8%]">
        <Header name={name} />
        <Heros name={name} />
        <ListProject title="Projects"/>
      </div>
    </div>
  );
}

export default App