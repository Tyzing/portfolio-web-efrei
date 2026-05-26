import { useState } from "react"
import TitleSection from "./TitleSection"
import ItemProject from "./ItemProject"
import projectsData from "../data/projects.json"

function ListProject({ title }) {
  const [projects] = useState(projectsData)

  return (
    <div id="projects" className="flex flex-col mt-[60px] md:mt-[200px] gap-[40px] md:gap-[80px] md:mx-[8%]">
      <TitleSection title={title} />
      {projects.map((project, index) => (
        <ItemProject
          key={index}
          titleProject={project.titleProject}
          descriptionProject={project.descriptionProject}
          linkProject={project.linkProject}
          imageSrc={project.imageSrc}
          textButton={project.textButton}
          imageRight={index % 2 == 0}
        />
      ))}
    </div>
  )
}

export default ListProject