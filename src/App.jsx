import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import VideoModal from './components/VideoModal.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';

import Home from './pages/Home.jsx';
import Films from './pages/Films.jsx';
import About from './pages/About.jsx';

export default function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <>
      <ScrollToHash />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home onSelectFilm={setSelectedFilm} />} />
          <Route path="/films" element={<Films onSelectFilm={setSelectedFilm} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />

      <VideoModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />
    </>
  );
}