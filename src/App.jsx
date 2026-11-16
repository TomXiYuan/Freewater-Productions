import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FilmGallery from './components/FilmGallery.jsx';
import Footer from './components/Footer.jsx';
import VideoModal from './components/VideoModal.jsx';

// App simply puts the sections together. Edit text and links in siteContent.js!
export default function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FilmGallery onSelectFilm={setSelectedFilm} />
      </main>
      <Footer />
      <VideoModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />
    </>
  );
}
