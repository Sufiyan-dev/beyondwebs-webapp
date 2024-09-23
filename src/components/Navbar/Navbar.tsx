import { useEffect, useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <h1 className="navbar-logo">Logo</h1>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="navbar-item">Our Services</li>
          <li className="navbar-item">The Work</li>
          <li className="navbar-item">The Team</li>
          <li className="navbar-item navbar-item-highlight">Start Your Project</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar