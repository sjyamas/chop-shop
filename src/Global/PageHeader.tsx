import { memo } from "react";

const PageHeader = memo(function PageHeader() {
  console.log("PageHeader");
  return (
    <div style={{ width: "100%", position: "relative", top: 0 }}>
      <div
        style={{
          height: "3.5rem",
          backgroundColor: "#282828",
        }}
      ></div>
    </div>
  );
});

export default PageHeader;
