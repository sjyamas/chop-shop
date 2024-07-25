import { motion } from "framer-motion";

export default function SingleLight({
  size = 12,
  on = false,
  color = "red",
  arrow = false,
  flashing = false,
  altFlashing = false,
}) {
  const colors = {
    green: "#00A651",
    yellow: "#FFF200",
    red: "#ED1D24",
  };

  const flashTime = 1.5;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        height: size === 12 ? "3.5rem" : "12rem",
        width: size === 12 ? "3.5rem" : "12rem",
      }}
    >
      {arrow ? (
        flashing ? (
          <motion.div
            animate={{ opacity: [1, 1, 0, 0] }} // Define keyframes for opacity
            transition={{
              delay: altFlashing ? flashTime / 2 : 0,
              duration: flashTime, // Total duration (2 seconds on + 1 second off)
              times: [0, 0.5, 0.5, 1], // Control the timing of keyframes
              repeat: Infinity, // Repeat infinitely
              repeatType: "loop", // Loop the animation
              ease: "linear", // Ensure smooth transition
            }}
            style={{
              height: size === 12 ? "3rem" : "10rem",
              width: size === 12 ? "3rem" : "10rem",
              borderRadius: "50%",
              visibility: on ? "visible" : "hidden",
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 200 200">
              <g
                transform={`rotate( ${
                  arrow === "left" ? "0" : arrow === "up" ? "90" : "180"
                } , 100, 100)`}
              >
                <path
                  d="M 100 170 L 30 100 L 100 30"
                  stroke={colors[color]}
                  strokeWidth="15"
                  fill=""
                />
                <path
                  d="M 90 100 H 180"
                  stroke={colors[color]}
                  strokeWidth="15"
                />
              </g>
            </svg>
          </motion.div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              height: size === 12 ? "3rem" : "10rem",
              width: size === 12 ? "3rem" : "10rem",
              borderRadius: "50%",
              visibility: on ? "visible" : "hidden",
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 200 200">
              <g
                transform={`rotate( ${
                  arrow === "left" ? "0" : arrow === "up" ? "90" : "180"
                } , 100, 100)`}
              >
                <path
                  d="M 100 170 L 30 100 L 100 30"
                  stroke={colors[color]}
                  strokeWidth="15"
                  fill=""
                />
                <path
                  d="M 90 100 H 180"
                  stroke={colors[color]}
                  strokeWidth="15"
                />
              </g>
            </svg>
          </div>
        )
      ) : flashing ? (
        <motion.div
          animate={{ opacity: [1, 1, 0, 0] }} // Define keyframes for opacity
          transition={{
            delay: altFlashing ? flashTime / 2 : 0,
            duration: flashTime, // Total duration (2 seconds on + 1 second off)
            times: [0, 0.5, 0.5, 1], // Control the timing of keyframes
            repeat: Infinity, // Repeat infinitely
            repeatType: "loop", // Loop the animation
            ease: "linear", // Ensure smooth transition
          }}
          style={{
            backgroundColor: colors[color],
            height: size === 12 ? "3rem" : "10rem",
            width: size === 12 ? "3rem" : "10rem",
            borderRadius: "50%",
            visibility: on ? "visible" : "hidden",
          }}
        />
      ) : (
        <div
          style={{
            backgroundColor: colors[color],
            height: size === 12 ? "3rem" : "10rem",
            width: size === 12 ? "3rem" : "10rem",
            borderRadius: "50%",
            visibility: on ? "visible" : "hidden",
          }}
        />
      )}
    </div>
  );
}
