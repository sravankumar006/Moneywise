import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">MoneyWise</span>
          <span className="logo-teens">Teens</span>
        </Link>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                to="/budgeting" 
                className={`nav-link ${isActive('/budgeting')}`}
                onClick={closeMenu}
              >
                Budgeting
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/investing" 
                className={`nav-link ${isActive('/investing')}`}
                onClick={closeMenu}
              >
                Investing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/banking" 
                className={`nav-link ${isActive('/banking')}`}
                onClick={closeMenu}
              >
                Banking
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/credit-cards" 
                className={`nav-link ${isActive('/credit-cards')}`}
                onClick={closeMenu}
              >
                Credit Cards
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/savings-calculator" 
                className={`nav-link ${isActive('/savings-calculator')}`}
                onClick={closeMenu}
              >
                Savings Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/ai-help" 
                className={`nav-link ${isActive('/ai-help')}`}
                onClick={closeMenu}
              >
                Ask AI
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
