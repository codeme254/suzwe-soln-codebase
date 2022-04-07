import "./App.css";
// import "./style.css"
import React from "react";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import RecommendationsAndGoals from "./components/Recom-Goals/Main";
import Educative from "./components/Educative/Educative";
import Initiatives from "./components/Initiative/Initiatives";
import NextSteps from "./components/NextSteps/NextSteps";
import Footer from "./components/Footer/Footer";
import CommunityInitiativeFooter from "./Pages/CommunityInitiative/CommunityInitiativeFooter";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <RecommendationsAndGoals />
      <Educative />
      <Initiatives />
      <NextSteps />
      <CommunityInitiativeFooter />
    </div>
  );
}

export default App;
