import '../styles/section-title.css';

export default function SectionTitle({ title, highlight }) {
  return (
    <div className="section-title-container">
      <div className="section-title-row">
        <h2>
          {title} <span>{highlight}</span>
        </h2>
        <div className="section-title-line" />
      </div>
    </div>
  );
}