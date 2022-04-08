import "./App.css";
// import "./style.css"
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Goals from './components/Goals/Goals'
import RecommendationsAndGoals from "./components/Recom-Goals/Main";
import Educative from "./components/Educative/Educative";
import Initiatives from "./components/Initiative/Initiatives";
import NextSteps from "./components/NextSteps/NextSteps";

import CommunityInitiativeFooter from "./Pages/CommunityInitiative/CommunityInitiativeFooter";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Goals />
      <RecommendationsAndGoals />
      <Educative />
      <Initiatives />
      <NextSteps />
      <CommunityInitiativeFooter />
    </div>
  );
}

export default App;
