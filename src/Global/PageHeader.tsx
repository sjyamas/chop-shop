import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

import { FaHouse } from "react-icons/fa6";
import CustomButton from "./CustomButton";

const PageHeader = memo(function PageHeader({ children, debug = false }) {
  console.log("PageHeader");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        position: "relative",
        top: 0,
        height: "3.5rem",
        backgroundColor: "#282828",
      }}
    >
      <div style={{ marginRight: "1rem", marginLeft: "1rem" }}>
        <Link to="/" style={{ color: "white" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(0,0,0, 0.2)",
              color: "white",
              border: 0,
              borderRadius: 10,
              cursor: "pointer",
              width: "3rem",
              height: "3rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaHouse size={32} />
          </div>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
});

export default PageHeader;
