
import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <>
      <Hero
        titleFirst="ABOUT"
        titleAccent="US."
        subtitle="Meet the people behind the camera."
        image="/images/shocked-black-guy.jpg"
      />

      <section className="about-section">
        <SectionTitle title="WHO" highlight="WE ARE" />

        <div className="about-content">
          <h3>Movies Yay!</h3>

          <p>
            uh...
          </p>
        </div>
      </section>
    </>
  );
}