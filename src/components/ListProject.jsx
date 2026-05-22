import TitleSection from "./TitleSection"
import ItemProject from "./ItemProject"
function ListProject({ title }) {
  return (
    <div className="flex flex-col mt-[200px] gap-[80px]">
      <TitleSection title={title} />
      <ItemProject
        titleProject="Project Name"
        descriptionProject="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
        linkProject="https://example.com"
        imageSrc="/my-image.jpg"
        imageRight={true}
      />
    </div>
  )
}

export default ListProject