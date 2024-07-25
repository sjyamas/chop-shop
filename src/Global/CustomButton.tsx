export default function CustomButton({
  children,
  onClick,
  textMargin = 10,
  buttonMargin = 2,
  bgcolor = "rgba(0,0,0, 0.2)",
  style,
}) {
  return (
    <div style={{ margin: buttonMargin }}>
      <button
        onClick={onClick}
        style={{
          ...style,
          backgroundColor: bgcolor,
          color: "white",
          border: 0,
          borderRadius: 10,
          cursor: "pointer",
        }}
      >
        <div style={{ margin: textMargin }}>{children}</div>
      </button>
    </div>
  );
}
