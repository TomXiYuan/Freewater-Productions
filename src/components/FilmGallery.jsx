import { site } from '../siteContent.js';

export default function FilmGallery({ onSelectFilm }) {
  return (
    <section className="films-section" id="films">
      <div className="section-title-row">
        <h2> {site.filmsHeading} <span>{site.filmsHeadingHighlight}</span> </h2>
        <div className="section-title-line" aria-hidden="true" />
      </div>
      <div className="film-grid">
        {site.films.map((film) => (
          <button
            className="film-card"
            type="button"
            key={film.id}
            onClick={() => onSelectFilm(film)}
            aria-label={`Watch ${film.title}`}
          >
            <img src={film.image} alt={`${film.title} thumbnail`} />
            {/* Sample screenshots already include play icons; this clickable
                card works with any replacement photo, too. */}
            <span className="film-card-label">{film.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
