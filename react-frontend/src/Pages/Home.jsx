import React, { useEffect } from "react";
import ProjectLists from "../components/projectlist/ProjectLists";
import Gallery from "../components/Gallery";
import Hotsports from "../components/hotspot/Hotspot";
import ExperienceBox from "../components/highlightBox/ ExperienceBox";
import Aboutme from "../components/aboutme/Aboutme";
import Strength from "../components/strength/Strength";
import RecommendationCarousel from "../components/recomendation/RecommendationCarousel";
import { useLocation } from "react-router-dom";
import Card from "../components/sevicepromo/Card";




function Home() {
    const location=useLocation();

    useEffect(()=>{
        if(location.state?.scrollTo){
            const el=document.getElementById(location.state.scrollTo);
            if(el) el.scrollIntoView({behavior:"smooth"})
        }
    },[location.state])
  return (
    <div>
      <Hotsports />
      <ExperienceBox />
      <Aboutme />
      <Card/>
      <Strength />
      <section id="projects">
     
      <ProjectLists />
      </section>
      <RecommendationCarousel />
     
    </div>
  );
}

export default Home;
