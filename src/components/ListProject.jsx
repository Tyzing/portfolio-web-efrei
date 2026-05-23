import TitleSection from "./TitleSection"
import ItemProject from "./ItemProject"
import projects from "../data/projects.json"

function ListProject({ title }) {
  return (
    <div id="projects" className="flex flex-col mt-[200px] gap-[80px] mx-[8%]">
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