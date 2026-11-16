import { site } from '../siteContent.js';

const socials = [
  { key: 'mailingList', symbol: '✉', label: 'Join Our Mailing List' },
  { key: 'groupMe', symbol: '♧', label: 'Join the GroupMe' },
  { key: 'instagram', symbol: '◎', label: 'Follow on Instagram' },
];

export default function Footer() {
  function showSetupReminder(event, label) {
    event.preventDefault();
    alert(`To enable “${label}”, add its URL to the links section in src/siteContent.js.`);
  }

  return (
    <footer className="footer" id="get-involved">
      <div className="footer-top" id="about">
        <div>
          <p className="eyebrow">ABOUT FREEWATER</p>
          <h2>{site.about.heading}</h2>
        </div>
        <p>{site.about.body}</p>
      </div>
      <div className="footer-links">
        <strong>GET INVOLVED</strong>
        <span className="footer-separator" aria-hidden="true" />
        {socials.map((link) => (
          <a
            key={link.key}
            href={site.links[link.key] || '#get-involved'}
            target={site.links[link.key] ? '_blank' : undefined}
            rel={site.links[link.key] ? 'noopener noreferrer' : undefined}
            onClick={site.links[link.key] ? undefined : (e) => showSetupReminder(e, link.label)}
          >
            <span className="footer-icon" aria-hidden="true">{link.symbol}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
      <p className="footer-note">Made with ♥ by student filmmakers. This is an editable starter template.</p>
    </footer>
  );
}
