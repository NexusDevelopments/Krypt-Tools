import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div className="animated-bg"></div>
      <div className="container" style={{ padding: '40px 20px', maxWidth: '1100px' }}>
        <div className="card fade-in">
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Krypt Tools</h1>
          <p style={{ opacity: 0.75, marginBottom: '1.2rem' }}>
            Railway-ready dashboard for webhook controls, vouch workflows, and ticket setup.
          </p>
          <div style={{ display: 'grid', gap: '0.8rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <Link to="/webhook" className="btn" style={{ textDecoration: 'none' }}>Webhook Sender</Link>
            <Link to="/vouch" className="btn" style={{ textDecoration: 'none' }}>Vouch Sender</Link>
            <Link to="/invite" className="btn" style={{ textDecoration: 'none' }}>Support / Invite</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
