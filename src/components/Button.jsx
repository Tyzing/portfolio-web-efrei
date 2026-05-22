function Button({ text, borderColor, backgroundColor, textColor, borderRadius = "8px" }) {
  return (
    <button
      className="font-roboto font-medium text-[18px] py-[8px] px-[24px] border-2 cursor-pointer shadow-lg"
      style={{
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: borderRadius,
      }}
    >
      {text}
    </button>
  );
}

export default Button;