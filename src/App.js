import Navbar from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import "./App.css";
import Gallery from "./Pages/gallery";
import Beaches from './Pages/beaches';
import Markets from './Pages/markets';
import Resturants from './Pages/resturants';
import Waterfalls from './Pages/waterfalls';
import ErrorPage from './Pages/errorpage';
import Home from './Pages/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Gallery/>} />
          <Route path="/beaches" element={<Beaches/>} />
          <Route path="/waterfalls" element={<Waterfalls/>} />
          <Route path="/resturants" element={<Resturants/>} />
          <Route path="/markets" element={<Markets/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
