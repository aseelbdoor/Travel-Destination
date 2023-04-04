// @ts-nocheck
import './rest.css';
import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';
let destination = require('./data/db.json');
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home data={destination} />} />
          <Route path="/about" element={<Home data={destination} />} />
          <Route path="/contact" element={<Home data={destination} />} />
          <Route path="/login" element={<Home data={destination} />} />
          <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </>
  );
}

export default App;
