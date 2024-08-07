import { motion } from "framer-motion";

const colors = {
  green: "#00A651",
  yellow: "#FFF200",
  red: "#ED1D24",
};

export function Uturn({ color, animate, pad }) {
  return (
    <div style={{ padding: `${pad}rem` }}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 13.333 13.333"
        transform="translate(-0.5, 0)"
      >
        <motion.g
          animate={{ stroke: color }}
          transition={{ duration: animate ? 0.2 : 0 }}
          transform="translate(0, .86714)"
          fill="none"
          stroke={color}
          stroke-width="1.4133"
        >
          <motion.path d="m0.49968 5.5353 5.0638 5.0638 5.0565-5.0638" />
          <motion.path d="m5.5635 7.1816v-2.9398c0-1.9991 1.5287-3.5351 3.5278-3.5351 2.0064 0 3.5351 1.5361 3.5351 3.5351v4.7037" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

export function Bike({ color, animate, pad }) {
  return (
    <div style={{ padding: `${pad}rem` }}>
      <motion.svg width="100%" height="100%" viewBox="0 0 14.008 14.008">
        <motion.g>
          <motion.path
            d="m11.303 10.536c-0.94809 0-1.7712-0.70556-2.0064-1.5287l1.8888-0.35278h0.11759c0.23518 0 0.35278-0.11759 0.35278-0.35278 0-0.11759-0.11759-0.23518-0.23518-0.23518l-1.1833-1.5361c0.35278-0.23518 0.7129-0.35278 1.0657-0.35278 1.1759 0 2.1167 0.94809 2.1167 2.124 0 1.2935-0.94074 2.2343-2.1167 2.2343zm-2.124-2.2343c0-0.58796 0.23518-1.1759 0.70556-1.5287l1.0657 1.4111-1.7712 0.47037v-0.35278zm-0.47037 0.35278-0.82315 0.23518 0.94074-3.5351 0.70556 1.0583c-0.47037 0.47772-0.82315 1.1833-0.82315 1.8888v0.35278zm-1.1759 0-0.11759-0.58796h0.11759v-0.1176h-0.58796v0.1176h0.23518l0.11759 0.47037-2.712-2.9472c0-0.11759 0.11759-0.35278 0.11759-0.47037h3.7703zm-2.712-0.35278c0 1.2935-0.94074 2.2343-2.1167 2.2343-1.2935 0-2.2343-0.94074-2.2343-2.2343 0-1.1759 0.94074-2.124 2.2343-2.124 0.35278 0 0.70556 0.1176 1.0583 0.35278-0.23518 0.59531-0.70556 1.1833-1.0583 1.5361-0.23518 0-0.35278 0.11759-0.35278 0.23518 0 0.23519 0.11759 0.35278 0.35278 0.35278 0.11759 0 0.23518-0.11759 0.23518-0.23519 0.11759-0.23518 0.35278-0.47037 0.58796-0.70555 0.23518-0.23519 0.47037-0.58797 0.58796-0.94074 0.47037 0.47037 0.70556 0.94074 0.70556 1.5287zm6.4823-2.5944c-0.47037 0-0.94809 0.1176-1.4185 0.47037l-0.94074-1.2935 0.11759-0.47037c0.58796 0 0.94074-0.23519 0.94074-0.47037 0-0.1176-0.58796 0-1.2935 0-0.11759 0-1.0583 0-1.0583 0.11759 0 0.23518 0.58796 0.35278 1.0583 0.35278l-0.11759 0.35277h-3.7703c0.11759-0.35277 0.11759-0.58796 0.23518-0.70555 0-0.23519 0.11759-0.35278 0.11759-0.35278l-0.35278-0.23518 0.11759-0.1176h1.0657v-0.35278h-1.1833l-0.47037 0.47038 0.35278 0.23518c-0.11759 0.58796-0.47037 1.6463-0.70556 2.3518-0.47037-0.23518-0.82315-0.35278-1.2935-0.35278-1.5287 0-2.7046 1.1833-2.7046 2.5944 0 1.5287 1.1759 2.7046 2.7046 2.7046 1.4111 0 2.587-1.1759 2.587-2.7046 0-0.70555-0.35278-1.5287-0.94074-2.0064 0-0.1176 0-0.1176 0.11759-0.23519l2.8296 3.0648c0 0.23518 0.11759 0.35278 0.23519 0.35278l0.23518 0.70555h-0.23518v0.23519h0.70556v-0.23519h-0.35278l-0.11759-0.70555c0-0.1176 0-0.1176 0.11759-0.1176l0.94074-0.23518c0.23518 1.0583 1.2935 1.8815 2.4768 1.8815 1.5287 0 2.7046-1.1759 2.7046-2.7046 0-1.4111-1.1759-2.5944-2.7046-2.5944z"
            animate={{ fill: color }}
            transition={{ duration: animate ? 0.2 : 0 }}
            fill={color}
            stroke-width=".73495"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}

export function Arrow({ direction, color, animate, pad }) {
  const angles = {
    upLeft: "-45",
    up: "0",
    upRight: "45",
    left: "-90",
    right: "90",
  };
  return (
    <div style={{ padding: `${pad}rem` }}>
      <motion.svg width="100%" height="100%" viewBox="0 0 40 40">
        <motion.g
          stroke={color}
          animate={{ stroke: color }}
          transition={{ duration: animate ? 0.2 : 0 }}
          transform={`translate(0 .00061552) rotate( ${angles[direction]}, 20, 20) `}
          fill="none"
          strokeWidth="4.0062"
        >
          <motion.path d="m19.758 15.806v23.708" />
          <motion.path d="m37.445 20.16-17.688-17.354-17.687 17.354" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
{
  /* <motion.div
  animate={{ backgroundColor: colors[color] }}
  transition={{ duration: animate ? 0.2 : 0 }}
  style={{
    // backgroundColor: colors[color],
    height: `${size * mult}rem`,
    width: `${size * mult}rem`,
    borderRadius: "50%",
  }}
/>; */
}
