import "./App.css";

import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import RecommendationsAndGoals from "./components/Recom-Goals/Main";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <RecommendationsAndGoals />
    </div>
  );
}

export default App;
