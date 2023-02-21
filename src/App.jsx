import "./App.css";
import { Home } from "./components/Home";
import Recomendation from "./components/Recomendation";
import Review from "./components/Review";
import Tour from "./components/Tour";
import Partner from "./components/Partner";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <Recomendation />
      <Tour />
      <Review />
      <Partner />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
