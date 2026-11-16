import { site } from '../siteContent.js';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Swap the hero image path in src/siteContent.js. */}
      <div className="hero-photo" style={{ backgroundImage: `url('${site.hero.image}')` }} aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-corners" aria-hidden="true" />
        <h1>{site.hero.titleFirst}<br /><span>{site.hero.titleAccent}</span></h1>
        <p>{site.hero.subtitle}</p>
        <div className="hero-buttons">
          <a className="button button-primary" href="#films"><span aria-hidden="true">▶</span> {site.hero.primaryButton}</a>
          <a className="button button-outline" href="#get-involved">{site.hero.secondaryButton}</a>
        </div>
      </div>
    </section>
  );
}
