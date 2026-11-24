import { useEffect } from 'react';

function getYouTubeVideoId(value) {
  if (typeof value !== 'string') return null;

  const input = value.trim();
  const videoIdPattern = /^[\w-]{11}$/;
  if (videoIdPattern.test(input)) return input;

  let url;
  try {
    url = new URL(input);
  } catch {
    return null;
  }

  const hostname = url.hostname.toLowerCase().replace(/^www\./, '');
  if (hostname === 'youtu.be') {
    const shortLinkId = url.pathname.split('/')[1];
    return videoIdPattern.test(shortLinkId) ? shortLinkId : null;
  }

  if (!['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(hostname)) {
    return null;
  }

  const pathMatch = url.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]{11})(?:\/|$)/);
  const videoId = url.searchParams.get('v') || pathMatch?.[1];
  return videoId && videoIdPattern.test(videoId) ? videoId : null;
}

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
  const youtubeVideoId = getYouTubeVideoId(film.youtubeId);
  const hasYouTubeValue = Boolean(
    typeof film.youtubeId === 'string' && film.youtubeId.trim()
  );

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div className="video-modal" role="dialog" aria-modal="true" aria-label={film.title} onClick={(e) => e.stopPropagation()}>
        <div className="modal-topline">
          <h2>{film.title}</h2>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close video">✕</button>
        </div>
        {youtubeVideoId ? (
          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1`}
              title={film.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="video-placeholder">
            <span className="placeholder-icon" aria-hidden="true">▶</span>
            <h3>{hasYouTubeValue ? 'Invalid YouTube link' : 'Your film goes here!'}</h3>
            <p>
              {hasYouTubeValue
                ? 'Add a valid YouTube video URL or 11-character video ID.'
                : 'Add a YouTube video URL or ID to the film data.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
