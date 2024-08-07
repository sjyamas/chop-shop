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
  mult = 0.25,
}) {
  const flash = flashing ? lightsStore((state) => state.flash) : null;

  const lightColors = {
    green: on ? "#00A651" : "#00190C",
    yellow: on ? "#FFF200" : "#191700",
    red: on ? "#ED1D24" : "#190304",
    white: on ? "#fff" : "#222",
  };
  const darkColor = {
    green: "#00190C",
    yellow: "#191700",
    red: "#190304",
    white: "#222",
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
    upLeft: (
      <Arrow
        direction={"upLeft"}
        color={colors[color]}
        animate={animate}
        pad={(size * mult) / 10}
      />
    ),
    up: (
      <Arrow
        direction={"up"}
        color={colors[color]}
        animate={animate}
        pad={(size * mult) / 10}
      />
    ),
    upRight: (
      <Arrow
        direction={"upRight"}
        color={colors[color]}
        animate={animate}
        pad={(size * mult) / 10}
      />
    ),
    left: (
      <Arrow
        direction={"left"}
        color={colors[color]}
        animate={animate}
        pad={(size * mult) / 10}
      />
    ),
    right: (
      <Arrow
        direction={"right"}
        color={colors[color]}
        animate={animate}
        pad={(size * mult) / 10}
      />
    ),
    bike: (
      <Bike color={colors[color]} animate={animate} pad={(size * mult) / 10} />
    ),
    uTurn: (
      <Uturn color={colors[color]} animate={animate} pad={(size * mult) / 10} />
    ),
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
          // padding: `0.3rem`,
          // borderRadius: "20%",
          borderRadius: "50%",
          backgroundColor: "#000",
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
