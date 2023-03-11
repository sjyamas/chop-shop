import React from "react";
import "../../Global/globalStyles.css";
import ImageWithHoverText from "../../Global/OnHoverImage";

export default function Car({ data, index, onClick }) {
  let altText = "Should be a pic of " + data.name;
  return (
    <div style={{ marginRight: 10 }}>
      <div
        style={{
          width: 250,
          height: 175,
          display: "flex",
          alignItems: "center",
          padding: 15,
          background: "rgba(0,0,0, 0.2)",
          borderRadius: 8,
        }}
      >
        <div style={{ margin: 10 }}>
          <a href={data.wiki} target="_blank" style={{ color: "white" }}>
            <p style={{ margin: 5, color: "white" }}> {data.name} </p>
          </a>
          <ImageWithHoverText
            image={data.image}
            alt={altText}
            style={{ borderRadius: 8, width: 230, height: 129 }}
            onClick={() => onClick(data.counter)}
          />
        </div>
      </div>
    </div>
  );
}
