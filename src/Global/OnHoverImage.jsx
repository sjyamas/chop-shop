import React, { useState } from "react";

function ImageWithHoverText({ image, alt, style, onClick }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <span onClick={onClick}>
        <img
          src={image}
          alt={alt}
          style={style}
        />
        {isHovering && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: 0.8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              borderRadius: 8,
            }}
          >
            <span>Done</span>
          </div>
        )}
      </span>
    </div>
  );
}

export default ImageWithHoverText;
