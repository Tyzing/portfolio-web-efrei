import { useState, useEffect } from "react"
import TitleSection from "./TitleSection"
import ItemProject from "./ItemProject"
import projectsData from "../data/projects.json"

function ListProject({ title }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simule un chargement asynchrone des données
    const fetchProjects = setTimeout(() => {
      setProjects(projectsData)
      setLoading(false)
    }, 800)

    return () => clearTimeout(fetchProjects)
  }, [])

  return (
    <div id="projects" className="flex flex-col mt-[60px] md:mt-[200px] gap-[40px] md:gap-[80px] md:mx-[8%]">
      <TitleSection title={title} />
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      ) : (
        projects.map((project, index) => (
          <ItemProject
            key={index}
            titleProject={project.titleProject}
            descriptionProject={project.descriptionProject}
            linkProject={project.linkProject}
            imageSrc={project.imageSrc}
            textButton={project.textButton}
            imageRight={index % 2 == 0}
          />
        ))
      )}
    </div>
  )
}

export default ListProject