import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">MoneyWise</span>
              <span className="logo-teens">Teens</span>
            </Link>
            <p className="footer-tagline">
              Building financial literacy for the next generation
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Learn</h3>
              <ul>
                <li><Link to="/budgeting">Budgeting</Link></li>
                <li><Link to="/investing">Investing</Link></li>
                <li><Link to="/banking">Banking</Link></li>
                <li><Link to="/credit-cards">Credit Cards</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Tools</h3>
              <ul>
                <li><Link to="/savings-calculator">Savings Calculator</Link></li>
                <li><Link to="/ai-help">AI Assistant</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>About</h3>
              <ul>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} MoneyWise Teens. All rights reserved.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
