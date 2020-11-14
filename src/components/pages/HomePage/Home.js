import React from "react";
import HeroSection from "../../HeroSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../../pages/Store";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
