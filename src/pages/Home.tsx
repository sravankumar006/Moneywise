import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Take Control of Your Financial Future</h1>
            <p className="hero-subtitle">
              Learn essential money skills that school doesn't teach you.
              Start your financial journey today!
            </p>
            <div className="hero-buttons">
              <Link to="/budgeting" className="btn btn-primary">Start Learning</Link>
              <Link to="/savings-calculator" className="btn btn-secondary">Try Our Calculator</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/images/hero-image.svg" alt="Teens managing finances" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title text-center">Why Financial Literacy Matters</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Build Wealth Early</h3>
              <p>Learn how compound interest can turn small savings into significant wealth over time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Prepare for College</h3>
              <p>Understand student loans, scholarships, and how to minimize education debt.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏦</div>
              <h3>Banking Basics</h3>
              <p>Learn how to choose the right bank accounts and avoid unnecessary fees.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Credit Fundamentals</h3>
              <p>Build good credit habits early and understand how credit scores work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="topics-section section">
        <div className="container">
          <h2 className="section-title text-center">What You'll Learn</h2>
          <div className="topics-grid">
            <Link to="/budgeting" className="topic-card">
              <h3>Budgeting</h3>
              <p>Create a personal budget that helps you save for what matters.</p>
              <span className="topic-link">Learn more →</span>
            </Link>
            <Link to="/investing" className="topic-card">
              <h3>Investing</h3>
              <p>Understand the basics of investing and growing your money.</p>
              <span className="topic-link">Learn more →</span>
            </Link>
            <Link to="/banking" className="topic-card">
              <h3>Banking</h3>
              <p>Navigate checking, savings accounts, and mobile banking.</p>
              <span className="topic-link">Learn more →</span>
            </Link>
            <Link to="/credit-cards" className="topic-card">
              <h3>Credit Cards</h3>
              <p>Use credit responsibly and build a strong financial foundation.</p>
              <span className="topic-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section section">
        <div className="container">
          <h2 className="section-title text-center">Interactive Tools</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <h3>Savings Calculator</h3>
              <p>See how your savings can grow over time with our interactive calculator.</p>
              <Link to="/savings-calculator" className="btn btn-primary">Try Calculator</Link>
            </div>
            <div className="tool-card">
              <h3>AI Financial Assistant</h3>
              <p>Get personalized financial advice and answers to your money questions.</p>
              <Link to="/ai-help" className="btn btn-secondary">Ask AI Assistant</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title text-center">What Teens Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "This website helped me understand how to save for college. I've already saved $2,000 using these tips!"
              </p>
              <p className="testimonial-author">- Alex, 17</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "The budgeting section changed how I think about money. Now I can save for things I really want."
              </p>
              <p className="testimonial-author">- Jamie, 16</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "I never understood investing until I found this site. Now I'm starting small with my first investments!"
              </p>
              <p className="testimonial-author">- Taylor, 18</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Take Control of Your Financial Future?</h2>
            <p>Start learning essential money skills today!</p>
            <Link to="/budgeting" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
