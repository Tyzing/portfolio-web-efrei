import Button from "./Button";

function ItemProject({ titleProject, descriptionProject, linkProject, imageRight, imageSrc, textButton = "Voir le Projet" }) {
  const textContent = (
    <div className="flex flex-col justify-center gap-[24px] p-[50px] w-1/2">
      <h2 className="font-playfair font-bold text-[40px]">{titleProject}</h2>
      <p className="font-nunito text-[18px] text-gray">{descriptionProject}</p>
      <div>
          <Button
            text={textButton}
            link={linkProject}
            borderColor="var(--color-charcoal)"
            backgroundColor="transparent"
            textColor="var(--color-charcoal)"
            borderRadius="24px"
          />
      </div>
    </div>
  );

  const imageContent = (
    <div className="w-1/2 h-full overflow-hidden">
      <img
        src={imageSrc}
        alt={titleProject}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div className="flex flex-row rounded-[24px] bg-white overflow-hidden shadow-sm w-full h-[400px]">
      {imageRight ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </div>
  );
}

export default ItemProject;