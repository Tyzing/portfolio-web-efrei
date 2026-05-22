import { Header, Button, Footer, Heros, ItemProject, ListProject, NavBar } from "./components";

function App() {
  return (
    <div className="bg-[url('/image-accueil.svg')] bg-no-repeat bg-right-top bg-auto min-h-screen">
      <div className="mx-[8%]">
        <Header />
        <Heros />
      </div>
      
    </div>
  );
}

export default App