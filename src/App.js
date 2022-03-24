import "./App.css";

import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import RecommendationsAndGoals from "./components/Recom-Goals/Main";
import Educative from "./components/Educative/Educative";
import Initiatives from "./components/Initiative/Initiatives";
import NextSteps from "./components/NextSteps/NextSteps";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <RecommendationsAndGoals />
      <Educative />
      <Initiatives />
      <NextSteps />
    </div>
  );
}

export default App;
