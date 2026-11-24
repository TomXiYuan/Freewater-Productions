
import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import FilmGallery from '../components/FilmCarousel.jsx';

export default function Home({ onSelectFilm }) {
  return (
    <>
      <Hero
        titleFirst="WE MAKE"
        titleAccent="MEMES."
        subtitle="A film community for every Duke student."
        image="/images/shocked-black-guy.jpg"
        primaryButton="WATCH OUR FILMS"
        secondaryButton="JOIN THE CREW"
      />

      <section className="films-section" id="films">
        <div className="films-container">
          <SectionTitle title="QUICK" highlight="PREVIEWS" />
          <FilmGallery onSelectFilm={onSelectFilm} />
        </div>
      </section>
    </>
  );
}
