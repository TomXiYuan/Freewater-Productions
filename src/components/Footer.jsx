const links = {
  mailingList: '',
  groupMe: '',
  instagram: ''
};

const socials = [
  { key: 'mailingList', label: 'Join Our Mailing List' },
  { key: 'groupMe', label: 'Join the GroupMe' },
  { key: 'instagram', label: 'Follow on Instagram' },
];

export default function Footer() {
  function showSetupReminder(event, label) {
    event.preventDefault();
    alert(`To enable “${label}”, add its URL to the links object in src/components/Footer.jsx.`);
  }

  return (
    <footer className="footer" id="get-involved">
      <div className="footer-links">
        <strong>GET INVOLVED</strong>
        <span className="footer-separator" aria-hidden="true" />
        {socials.map((link) => (
          <a
            key={link.key}
            href={links[link.key] || '#get-involved'}
            target={links[link.key] ? '_blank' : undefined}
            rel={links[link.key] ? 'noopener noreferrer' : undefined}
            onClick={links[link.key] ? undefined : (e) => showSetupReminder(e, link.label)}
          >
            <span className="footer-icon" aria-hidden="true">{link.symbol}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
