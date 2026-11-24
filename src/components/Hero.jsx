import { Link } from 'react-router-dom';

export default function Hero({
  titleFirst,
  titleAccent,
  subtitle,
  image,
  primaryButton,
  secondaryButton
}) {
  return (
    <section className="hero" id="home">
      <div
        className="hero-photo"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-corners" aria-hidden="true" />

        <h1>
          {titleFirst}
          {titleAccent && (
            <>
              <br />
              <span>{titleAccent}</span>
            </>
          )}
        </h1>

        {subtitle && <p>{subtitle}</p>}

        {(primaryButton || secondaryButton) && (
          <div className="hero-buttons">
            {primaryButton && (
              <Link className="button button-primary" to="/films">
                <span aria-hidden="true">▶</span>
                {primaryButton}
              </Link>
            )}

            {secondaryButton && (
              <Link
                className="button button-outline"
                to="/#get-involved"
              >
                {secondaryButton}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
