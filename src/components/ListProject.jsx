import TitleSection from "./TitleSection"
function ListProject({ title }) {
  return (
    <div className="flex flex-col mt-[200px]">
      <TitleSection title={title} />
    </div>
  )
}

export default ListProject