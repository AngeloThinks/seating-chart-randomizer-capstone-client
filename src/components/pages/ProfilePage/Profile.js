import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjThree } from "../Store";

function Profile() {
  return (
    <>
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Profile;
