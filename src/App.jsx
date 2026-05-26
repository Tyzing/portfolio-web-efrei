import { Header, Button, Footer, Heros, ItemProject, ListProject, NavBar, TitleSection } from "./components";

const name = "Bastien Dubile";

function App() {
  return (
    <div className="bg-[#F9FAFF] md:bg-[url('/image-accueil.webp')] md:bg-no-repeat md:bg-right-top md:bg-[size:50%_auto] min-h-screen">
      <Header name={name} />
      <div className="mx-[8%]">
        <Heros name={name} />
        <ListProject title="Projects"/>
        <Footer />
      </div>
    </div>
  );
}

export default App