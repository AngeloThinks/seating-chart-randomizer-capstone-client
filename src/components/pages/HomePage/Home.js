import React from "react";
import HeroSection from "../../HeroSection";
import {
  homeObjOne,
  homeObjTwo,
} from "../../pages/Store";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      {/* <HeroSection {...homeObjThree} /> */}
    </>
  );
}

export default Home;
