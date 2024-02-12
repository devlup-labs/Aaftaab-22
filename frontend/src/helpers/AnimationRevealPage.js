import React from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import useInView from "@owaiswiz/use-in-view";
import demoimage from "../images/demo/image.jpg"; // Adjust the path accordingly

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 px-1 py-8 sm:px-4 lg:px-8 bg-[#ffffff] overflow-hidden relative`;

const BackgroundImage = tw.div`absolute inset-0 bg-cover bg-center z-0 opacity-15`;
const GlossyOverlay = tw.div`absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white opacity-25`;

function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => {
    if (i === 0 || i === children.length - 1) {
      return <React.Fragment key={i}>{child}</React.Fragment>;
    }
    return (
      <AnimatedSlideInComponent
        key={i}
        direction={directions[(i + 1) % directions.length]}
      >
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return (
    <>
      {/* <BackgroundImage style={{ backgroundImage: `url(${demoimage})` }} />{" "} */}
      
      {childrenWithAnimation}
    </>
  );
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }) {
  const [ref, inView] = useInView(30);

  const x = { initial: direction === "left" ? "-150%" : "150%", target: "0%" };

  return (
    <motion.section
      initial={{ x: x.initial }}
      animate={{ x: inView ? x.target : x.initial }}
      transition={{ type: "spring", damping: 19 }}
      ref={ref}
      style={{ zIndex: 1 }}
    >
      {children}
    </motion.section>
  );
}

export default function App(props) {
  return (
    <StyledDiv className="App">
      <AnimationReveal {...props} />
    </StyledDiv>
  );
}
