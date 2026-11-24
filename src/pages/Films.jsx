
import Hero from '../components/Hero.jsx';
import FilmCatalog from '../components/FilmCatalog.jsx';

export default function Films({ onSelectFilm }) {
  return (
    <>
      <Hero
        titleFirst="OUR"
        titleAccent="FILMS."
        subtitle="Explore our productions."
        image="/images/shocked-black-guy.jpg"
      />

      <FilmCatalog onSelectFilm={onSelectFilm} />
    </>
  );
}
