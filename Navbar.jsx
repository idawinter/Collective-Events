import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/menus">Menus</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/partnerships">Partnerships</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
