import { useEffect } from 'react';

export default function VideoModal({ film, onClose }) {
  useEffect(() => {
    if (!film) return;
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div className="video-modal" role="dialog" aria-modal="true" aria-label={film.title} onClick={(e) => e.stopPropagation()}>
        <div className="modal-topline">
          <h2>{film.title}</h2>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close video">✕</button>
        </div>
        {film.youtubeId ? (
          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1`}
              title={film.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="video-placeholder">
            <span className="placeholder-icon" aria-hidden="true">▶</span>
            <h3>Your film goes here!</h3>
            <p>Open <code>src/siteContent.js</code> and add a YouTube video ID to <code>{`films`}</code>.</p>
          </div>
        )}
      </div>
    </div>
  );
}
