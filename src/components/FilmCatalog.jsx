import { useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { catalogFilms } from '../data/catalogFilms.js';

export default function FilmCatalog({ onSelectFilm }) {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const filteredFilms = catalogFilms.filter((film) =>
    film.title.toLowerCase().includes(normalizedQuery)
  );

  return (
    <section className="catalog-section">
      <SectionTitle title="ALL" highlight="FILMS" />

      <div className="catalog-search">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search films"
          aria-label="Search films"
        />
      </div>

      {filteredFilms.length > 0 ? (
        <div className="catalog-grid">
          {filteredFilms.map((film) => (
            <button
              className="catalog-card"
              key={film.id}
              type="button"
              onClick={() => onSelectFilm?.(film)}
            >
              <div className="catalog-thumbnail">
                <img src={film.image} alt="" />
                <span className="catalog-play">▶</span>
              </div>

              <div className="catalog-info">
                <h3>{film.title}</h3>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <p className="catalog-empty" role="status">
          No films found.
        </p>
      )}
    </section>
  );
}
