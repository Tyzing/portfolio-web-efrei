function Button({ text, borderColor, backgroundColor, textColor, borderRadius = "8px", link }) {
  const isExternal = link.startsWith("http");
  return (
    <a href={link} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <button
        className="font-roboto font-medium text-[15px] md:text-[18px] py-[8px] px-[20px] md:px-[24px] border-2 cursor-pointer shadow-lg"
        style={{
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          color: textColor,
          borderRadius: borderRadius,
        }}
      >
        {text}
      </button>
    </a>
  );
}

export default Button;