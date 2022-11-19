import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import "./App.css";
import HeroPage from "./Pages/HeroPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      <Footer />
    </div>
  );
}

export default App;
