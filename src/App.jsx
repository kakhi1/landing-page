import "./App.css";
import { Home } from "./components/Home";
import Recomendation from "./components/Recomendation";
import Review from "./components/Review";
import Tour from "./components/Tour";
import Partner from "./components/Partner";
function App() {
  return (
    <div className="App">
      <Home />
      <Recomendation />
      <Tour />
      <Review />
      <Partner />
    </div>
  );
}

export default App;
