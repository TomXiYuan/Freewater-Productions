import { useEffect, useRef, useState } from 'react';
import { films } from '../data/carouselFilms.js';

export default function FilmGallery({ onSelectFilm }) {
  const [selected, setSelected] = useState(0);

  const carouselRef = useRef(null);
  const lastWheel = useRef(0);
  const touchStart = useRef(null);

  // Wrap around when reaching either end.
  const move = (direction) => {
    setSelected((current) =>
      (current + direction + films.length) % films.length
    );
  };

  // Calculate each film's position relative to the center.
  const getOffset = (index) => {
    let offset = index - selected;
    const half = Math.floor(films.length / 2);

    if (offset > half) offset -= films.length;
    if (offset < -half) offset += films.length;

    return offset;
  };

  // Mouse wheel navigation.
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || films.length <= 1) return;

    const handleWheel = (event) => {
      if (event.ctrlKey) return;

      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;

      if (delta === 0) return;
      event.preventDefault();

      const now = performance.now();
      if (now - lastWheel.current < 320) return;

      lastWheel.current = now;
      setSelected((current) =>
        (current + (delta > 0 ? 1 : -1) + films.length) % films.length
      );
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });
    return () => carousel.removeEventListener('wheel', handleWheel);
  }, [films.length]);

  // Keyboard navigation when carousel is focused.
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }
  };

  // Swipe navigation for phones/tablets.
  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;

    if (Math.abs(distance) > 50) {
      move(distance < 0 ? 1 : -1);
    }
  };

  if (films.length === 0) return null;

  return (
    <section className="films-section" id="films">
      <div
        className="film-carousel"
        ref={carouselRef}
        tabIndex={0}
        aria-label="Film selection carousel"
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="film-carousel-track">
          {films.map((film, index) => {
            const offset = getOffset(index);
            const distance = Math.abs(offset);
            const visible = distance <= 2;
            const active = offset === 0;

            return (
              <button
                key={film.id}
                type="button"
                className={`carousel-film ${active ? 'is-selected' : ''}`}
                style={{
                  '--offset': offset,
                  '--scale': Math.max(0.65, 1 - distance * 0.17),
                  '--opacity': visible ? Math.max(0.1, 1 - distance * 0.38) : 0,
                  zIndex: 10 - distance,
                  pointerEvents: visible ? 'auto' : 'none'
                }}
                tabIndex={visible ? 0 : -1}
                aria-label={active
                  ? `Watch ${film.title}`
                  : `Select ${film.title}`}
                aria-hidden={!visible}
                onClick={() => {
                  if (active) {
                    onSelectFilm?.(film);
                  } else {
                    setSelected(index);
                  }
                }}
              >
                <img src={film.image} alt="" draggable="false" />

                <div className="carousel-film-overlay">
                  <span className="carousel-film-play">▶</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="film-carousel-controls">

          <div className="carousel-film-details" aria-live="polite">
            <h3>{films[selected].title}</h3>
          </div>

        </div>
      </div>

    </section>
  );
}