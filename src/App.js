import Navbar from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import "./App.css";
import Gallery from "./Pages/gallery";
import Beaches from './Pages/beaches';
import Temples from './Pages/temple';
import Resturants from './Pages/resturants';
import Waterfalls from './Pages/waterfalls';
import Church from './Pages/church';
import Forts from './Pages/forts';
import ErrorPage from './Pages/errorpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Gallery/>} />
          <Route path="/beaches" element={<Beaches/>} />
          <Route path="/waterfalls" element={<Waterfalls/>} />
          <Route path="/resturants" element={<Resturants/>} />
          <Route path="/markets" element={<Forts/>} />
          <Route path="/temples" element={<Temples/>} />
          <Route path="/churches" element={<Church/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
