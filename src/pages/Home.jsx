import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header, Footer, Heros, ListProject } from "../components";

function Home({ name }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "projects") {
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="bg-[#F9FAFF] md:bg-[url('/image-accueil.webp')] md:bg-no-repeat md:bg-right-top md:bg-[size:50%_auto] min-h-screen">
      <Header name={name} />
      <div className="mx-[8%]">
        <Heros name={name} />
        <ListProject title="Projects" />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
