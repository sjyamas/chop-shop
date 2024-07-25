export default function PageHeader({ children }: any) {
  return (
    <div>
      <div
        style={{
          height: "3.5rem",
          backgroundColor: "#282828",
        }}
      ></div>
      <div style={{ backgroundColor: "#282c34", height: "100vh" }}>
        {children}
      </div>
    </div>
  );
}
