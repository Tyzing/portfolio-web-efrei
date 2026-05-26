import Button from "./Button";

function ItemProject({ titleProject, descriptionProject, linkProject, imageRight, imageSrc, textButton = "Voir le Projet" }) {
  return (
    <div className="flex flex-col md:flex-row rounded-[24px] bg-white overflow-hidden shadow-sm w-full h-auto md:h-[400px]">
      {/* Image – always on top on mobile; alternates left/right on desktop */}
      <div className={`w-full md:w-1/2 h-[220px] md:h-full overflow-hidden order-1 ${imageRight ? "md:order-2" : "md:order-1"}`}>
        <img
          src={imageSrc}
          alt={titleProject}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center gap-[16px] md:gap-[24px] p-[24px] md:p-[50px] w-full md:w-1/2 order-2 ${imageRight ? "md:order-1" : "md:order-2"}`}>
        <h2 className="font-playfair font-bold text-[24px] md:text-[40px]">{titleProject}</h2>
        <p className="font-nunito text-[15px] md:text-[18px] text-gray">{descriptionProject}</p>
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
    </div>
  );
}

export default ItemProject;