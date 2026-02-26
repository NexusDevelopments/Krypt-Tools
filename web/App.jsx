import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BotControls from './pages/BotControls';
import Tickets from './pages/Tickets';
import InviteBot from './pages/InviteBot';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <aside className="global-side-panel">
          <div className="side-brand">
            <div className="side-brand-text">Krypt</div>
          </div>
          <div className="side-section">Navigation</div>
          <nav className="side-nav">
            <NavLink to="/" className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}>Home</NavLink>
            <NavLink to="/webhook" className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}>Webhook Sender</NavLink>
            <NavLink to="/vouch" className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}>Vouch Sender</NavLink>
            <NavLink to="/invite" className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}>Support</NavLink>
          </nav>
        </aside>

        <div className="global-page-region">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/webhook" element={<BotControls />} />
            <Route path="/vouch" element={<Tickets />} />
            <Route path="/invite" element={<InviteBot />} />

            <Route path="/botcontrols" element={<BotControls />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
