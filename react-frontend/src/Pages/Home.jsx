import React from "react";
import ProjectLists from "../components/ProjectLists";
import Gallery from "../components/Gallery";
import Hotsports from "../components/hotspot/Hotspot";
import ExperienceBox from "../components/highlightBox/ ExperienceBox";
import Aboutme from "../components/aboutme/Aboutme";
import Strength from "../components/strength/Strength";
import RecommendationCarousel from "../components/recomendation/RecommendationCarousel";

function Home() {
  return (
    <div>
      <Hotsports />
      <ExperienceBox />
      <Aboutme />
      <Strength />
      <ProjectLists />
      <RecommendationCarousel />
    </div>
  );
}

export default Home;
