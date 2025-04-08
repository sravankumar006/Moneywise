import './Investing.css';

const Investing = () => {
  return (
    <div className="content-page">
      <div className="page-header">
        <div className="container">
          <h1>Investing for Teens</h1>
          <p className="page-description">Learn how to grow your money through smart investing</p>
        </div>
      </div>

      <div className="container">
        <div className="content-section">
          <h2>Why Start Investing as a Teen?</h2>
          <p>
            Investing isn't just for adults! Starting early gives you a huge advantage because of compound interest.
            The earlier you start, the more time your money has to grow.
          </p>
          
          <div className="info-box">
            <h3>The Power of Compound Interest</h3>
            <p>
              If you invest $1,000 at age 15 with an average 7% annual return:
            </p>
            <ul>
              <li>By age 25: $1,967</li>
              <li>By age 35: $3,870</li>
              <li>By age 45: $7,612</li>
              <li>By age 65: $29,449</li>
            </ul>
            <p>That's nearly $30,000 from a single $1,000 investment!</p>
          </div>
        </div>

        <div className="content-section">
          <h2>Investment Basics</h2>
          
          <div className="investment-types">
            <div className="investment-type">
              <h3>Stocks</h3>
              <p>
                When you buy a stock, you own a small piece of a company. If the company does well, 
                your stock value increases. Stocks can be volatile (prices change frequently) but 
                typically provide higher returns over long periods.
              </p>
            </div>
            
            <div className="investment-type">
              <h3>Bonds</h3>
              <p>
                Bonds are like loans you give to companies or the government. They promise to pay you back 
                with interest. Bonds are generally less risky than stocks but offer lower returns.
              </p>
            </div>
            
            <div className="investment-type">
              <h3>Mutual Funds</h3>
              <p>
                Mutual funds pool money from many investors to buy a mix of stocks, bonds, or other investments. 
                They're managed by professionals and offer instant diversification.
              </p>
            </div>
            
            <div className="investment-type">
              <h3>ETFs (Exchange-Traded Funds)</h3>
              <p>
                Similar to mutual funds, ETFs hold a collection of investments but trade like stocks. 
                They often have lower fees than mutual funds and are a great way for beginners to start investing.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>How Teens Can Start Investing</h2>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Open a Custodial Account</h3>
                <p>
                  Since you're under 18, you'll need a custodial account that a parent or guardian manages for you. 
                  Popular options include:
                </p>
                <ul>
                  <li>UGMA/UTMA accounts</li>
                  <li>Custodial brokerage accounts</li>
                  <li>Custodial Roth IRAs (if you have earned income)</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Start with Index Funds</h3>
                <p>
                  Index funds track market indexes like the S&P 500. They offer:
                </p>
                <ul>
                  <li>Instant diversification</li>
                  <li>Low fees</li>
                  <li>Historically reliable returns</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Practice with Stock Simulators</h3>
                <p>
                  Before investing real money, try virtual stock market games to learn how investing works without risk.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Learn Continuously</h3>
                <p>
                  Read books, follow financial news, and learn about companies you're interested in investing in.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Investment Strategies for Teens</h2>
          
          <div className="strategy-cards">
            <div className="strategy-card">
              <h3>Long-Term Growth</h3>
              <p>
                Focus on investments that will grow over many years or decades. 
                As a teen, time is your biggest advantage!
              </p>
            </div>
            
            <div className="strategy-card">
              <h3>Dollar-Cost Averaging</h3>
              <p>
                Invest a fixed amount regularly (monthly or quarterly) regardless of market conditions. 
                This reduces the impact of market volatility.
              </p>
            </div>
            
            <div className="strategy-card">
              <h3>Diversification</h3>
              <p>
                Don't put all your money in one investment. Spread it across different types of investments 
                to reduce risk.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Common Investment Terms</h2>
          
          <div className="terms-grid">
            <div className="term-card">
              <h3>Bull Market</h3>
              <p>
                A market where prices are rising or expected to rise.
              </p>
            </div>
            
            <div className="term-card">
              <h3>Bear Market</h3>
              <p>
                A market where prices are falling or expected to fall.
              </p>
            </div>
            
            <div className="term-card">
              <h3>Dividend</h3>
              <p>
                A portion of a company's profits paid to shareholders.
              </p>
            </div>
            
            <div className="term-card">
              <h3>Capital Gain</h3>
              <p>
                The profit when you sell an investment for more than you paid.
              </p>
            </div>
            
            <div className="term-card">
              <h3>Portfolio</h3>
              <p>
                The collection of all investments you own.
              </p>
            </div>
            
            <div className="term-card">
              <h3>Risk Tolerance</h3>
              <p>
                How comfortable you are with the possibility of losing money.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-box">
          <h2>See How Your Investments Can Grow</h2>
          <p>Use our savings calculator to see the power of compound interest over time!</p>
          <a href="/savings-calculator" className="btn btn-primary">Try Our Calculator</a>
        </div>
      </div>
    </div>
  );
};

export default Investing;
