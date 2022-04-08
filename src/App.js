import "./App.css";
// import "./style.css"
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Goals from "./components/Goals/Goals";
import RecommendationsAndGoals from "./components/Recom-Goals/Main";
import Educative from "./components/Educative/Educative";
import Initiatives from "./components/Initiative/Initiatives";
import NextSteps from "./components/NextSteps/NextSteps";

import CommunityInitiativeFooter from "./Pages/CommunityInitiative/CommunityInitiativeFooter";

import HashLoader from "react-spinners/HashLoader";

function App() {
  const color = "#0d2818";
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <h1 className="loader__heading">Clima</h1>
          <HashLoader color={color} loading={loading} size={150} />
          <p className="loader__motto">
            Let's restore nature back to how it was
          </p>
        </div>
      ) : (
        <>
          <Navigation />
          <Hero />
          <Goals />
          <RecommendationsAndGoals />
          <Educative />
          <Initiatives />
          <NextSteps />
          <CommunityInitiativeFooter />
        </>
      )}
    </div>
  );
}

export default App;
