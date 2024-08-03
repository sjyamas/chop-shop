import { motion } from "framer-motion";
import lightsStore from "Helpers/lightsStore";
import { memo } from "react";
import { Arrow, Bike, Uturn } from "./LightIcons";

const SingleLight = memo(function SingleLight({
  size = 12,
  on = false,
  color = "red",
  shape = "solid",
  flashing = false,
  altFlashing = false,
  animate = false,
}) {
  const flash = flashing ? lightsStore((state) => state.flash) : null;

  const mult = 0.25;
  const lightColors = {
    green: on ? "#00A651" : "#00190C",
    yellow: on ? "#FFF200" : "#191700",
    red: on ? "#ED1D24" : "#190304",
  };
  const darkColor = {
    green: "#00190C",
    yellow: "#191700",
    red: "#190304",
  };

  let colors = flashing
    ? altFlashing
      ? flash
        ? darkColor
        : lightColors
      : flash
      ? lightColors
      : darkColor
    : lightColors;

  const shapeMap = {
    solid: (
      <motion.div
        animate={{ backgroundColor: colors[color] }}
        transition={{ duration: animate ? 0.2 : 0 }}
        style={{
          // backgroundColor: colors[color],
          height: `${size * mult}rem`,
          width: `${size * mult}rem`,
          borderRadius: "50%",
        }}
      />
    ),
    // ) : (
    //   <div
    //     style={{
    //       height: `${size * mult}rem`,
    //       width: `${size * mult}rem`,
    //       borderRadius: "50%",
    //       backgroundColor: colors[color],
    //     }}
    //   />
    // ),
    upLeft: <Arrow direction={"upLeft"} color={colors[color]} />,
    up: <Arrow direction={"up"} color={colors[color]} />,
    upRight: <Arrow direction={"upRight"} color={colors[color]} />,
    left: <Arrow direction={"left"} color={colors[color]} />,
    right: <Arrow direction={"right"} color={colors[color]} />,
    bike: <Bike color={colors[color]} />,
    uTurn: <Uturn color={colors[color]} />,
  };

  console.log("SingleLight");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111111",
        height: `${size * mult * 1.2}rem`,
        width: `${size * mult * 1.2}rem`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `${size * mult}rem`,
          width: `${size * mult}rem`,
          borderRadius: "50%",
          backgroundColor: "#000",

          // visibility: flashing
          //   ? altFlashing
          //     ? flash
          //       ? "hidden"
          //       : "visible"
          //     : flash
          //     ? "visible"
          //     : "hidden"
          //   : "visible",
        }}
      >
        <div
          style={{
            height: `${size * mult}rem`,
            width: `${size * mult}rem`,
            borderRadius: "50%",
          }}
        >
          {shapeMap[shape]}
        </div>
      </div>
    </div>
  );
});

export default SingleLight;
