import { useEffect, useState } from "react";

const OptionButton = ({ init, options, funcKey, setFunc }) => {
  const [showGrid, setShowGrid] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((item) => item && item.value === init)
  );

  useEffect(() => {
    setSelectedOption(options.find((item) => item && item.value === init));
  }, [init]);

  const ButtonStyle = {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    outline: 0,
    padding: 0,
    cursor: "pointer",
    height: "3rem",
    width: "3rem",
    backgroundColor: "black",
    borderStyle: "solid",
  };
  const handleMouseDown = () => {
    setShowGrid(true);
  };

  const handleMouseUp = (option) => {
    setShowGrid(false);
    if (option !== null) {
      setSelectedOption(option);
      setFunc(funcKey, option.value);
    }
  };

  const handleMouseLeave = () => {
    setShowGrid(false);
  };
  const gridStyle = {
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    transform: "translate(-3rem, -6rem)",
    zIndex: 1,
  };
  const renderGrid = () => {
    return (
      <div style={gridStyle} onMouseLeave={handleMouseLeave}>
        {options.map((option, index) => (
          <div
            key={index}
            style={{ visibility: option ? "visible" : "hidden" }}
          >
            <button
              key={index}
              style={ButtonStyle}
              onMouseUp={() => handleMouseUp(option)}
            >
              {option && option.display}
            </button>
          </div>
        ))}
      </div>
    );
  };

  const optionButtonContainerStyle = {
    position: "relative",
    display: "inline-block",
  };

  return (
    <div style={optionButtonContainerStyle}>
      <button
        style={ButtonStyle}
        onMouseDown={handleMouseDown}
        onMouseUp={() => handleMouseUp(null)}
      >
        {selectedOption.display}
      </button>
      {showGrid && renderGrid()}
    </div>
  );
};

export default OptionButton;
