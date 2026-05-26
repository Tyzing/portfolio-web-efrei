function TitleSection({ title }) {
  return (
    <div>
      <div className="flex flex-col gap-[4px] items-center">
        <h2 className="font-playfair text-[28px] md:text-[48px] font-semibold">{title}</h2>
        <div className="w-[100px] h-[4px] bg-yellow rounded-[2px]"></div>
      </div>
    </div>
  )
}

export default TitleSection