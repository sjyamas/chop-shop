import { memo } from "react";
import { Link } from "react-router-dom";

const PageHeader = memo(function PageHeader() {
  console.log("PageHeader");
  return (
    <div style={{ width: "100%", position: "relative", top: 0 }}>
      <div
        style={{
          height: "3.5rem",
          backgroundColor: "#282828",
        }}
      >
        <Link to="demo" style={{ color: "white" }}>
          <p> demo </p>
        </Link>
      </div>
    </div>
  );
});

export default PageHeader;
