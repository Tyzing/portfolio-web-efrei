function Button({ text, borderColor, backgroundColor, textColor }) {
  return (
    <button
      className="font-roboto font-medium text-[18px] rounded-[8px] py-[8px] px-[24px] border-2 cursor-pointer shadow-lg"
      style={{
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {text}
    </button>
  );
}

export default Button;