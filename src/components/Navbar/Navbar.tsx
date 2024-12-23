import { useEffect, useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [shadowColor, setShadowColor] = useState('rgba(255, 255, 255, 0.5)'); // Default to a light shadow.

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);

    // Detect background color of the current section
    const sections = document.querySelectorAll("section"); // Assuming you have `section` tags
    let currentShadowColor = 'rgba(255, 255, 255, 0.5)'; // Default shadow

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        console.log(window.getComputedStyle(section).backgroundColor);
        // Check for background color or class
        const bgColor = window.getComputedStyle(section).backgroundColor;
        currentShadowColor = bgColor === 'rgb(0, 0, 0)' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.2)';
      }
    });

    setShadowColor(currentShadowColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToServiceSection = () => {
    const serviceSection = document.getElementById("service-section");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
  <div className={`navbar ${scrolled ? 'scrolled' : ''}`} 
  style={{
    boxShadow: scrolled ? `0 0px 30px ${shadowColor}` : "none",
  }}>
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <h1 className="navbar-logo">BeyondWebs</h1>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="navbar-item underline-effect" onClick={scrollToServiceSection}>Our Services</li>
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