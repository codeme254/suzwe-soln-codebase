import "./App.css";

import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import RecommendationsAndGoals from "./components/Recom-Goals/Main";
import Educative from "./components/Educative/Educative";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <RecommendationsAndGoals />
      <Educative />
    </div>
  );
}

export default App;
