import './CreditCard.css';

const CreditCards = () => {
  return (
    <div className="content-page">
      <div className="page-header">
        <div className="container">
          <h1>Credit Cards and Credit Scores</h1>
          <p className="page-description">Learn how credit works and how to use it responsibly</p>
        </div>
      </div>

      <div className="container">
        <div className="content-section">
          <h2>What is Credit?</h2>
          <p>
            Credit is the ability to borrow money with the promise to pay it back later, usually with interest.
            Building good credit early can help you throughout your life.
          </p>
          
          <div className="info-box">
            <h3>Why Credit Matters for Teens</h3>
            <p>
              Even though you might not be thinking about credit now, your credit history will affect:
            </p>
            <ul>
              <li>Renting an apartment</li>
              <li>Getting a cell phone plan</li>
              <li>Car insurance rates</li>
              <li>Future job opportunities (some employers check credit)</li>
              <li>Ability to get student loans</li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <h2>Credit Cards Explained</h2>
          
          <div className="credit-basics">
            <div className="credit-basic">
              <h3>How Credit Cards Work</h3>
              <p>
                A credit card lets you borrow money up to a certain limit. You can make purchases now and pay later, 
                but if you don't pay the full balance each month, you'll be charged interest.
              </p>
            </div>
            
            <div className="credit-basic">
              <h3>Credit Card Terms to Know</h3>
              <ul>
                <li><strong>APR (Annual Percentage Rate):</strong> The yearly interest rate you pay if you carry a balance</li>
                <li><strong>Credit Limit:</strong> The maximum amount you can borrow</li>
                <li><strong>Minimum Payment:</strong> The smallest amount you must pay each month</li>
                <li><strong>Due Date:</strong> When your payment must be received</li>
                <li><strong>Grace Period:</strong> Time between purchase and when interest begins</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Credit Scores Explained</h2>
          
          <div className="score-explanation">
            <p>
              A credit score is a number (usually between 300-850) that represents your creditworthiness. 
              Higher scores mean lenders see you as less risky.
            </p>
            
            <div className="score-ranges">
              <div className="score-range poor">
                <h4>Poor</h4>
                <p>300-579</p>
              </div>
              <div className="score-range fair">
                <h4>Fair</h4>
                <p>580-669</p>
              </div>
              <div className="score-range good">
                <h4>Good</h4>
                <p>670-739</p>
              </div>
              <div className="score-range very-good">
                <h4>Very Good</h4>
                <p>740-799</p>
              </div>
              <div className="score-range excellent">
                <h4>Excellent</h4>
                <p>800-850</p>
              </div>
            </div>
            
            <h3>What Affects Your Credit Score</h3>
            <div className="factors-grid">
              <div className="factor">
                <h4>Payment History (35%)</h4>
                <p>Do you pay bills on time?</p>
              </div>
              <div className="factor">
                <h4>Credit Utilization (30%)</h4>
                <p>How much of your available credit are you using?</p>
              </div>
              <div className="factor">
                <h4>Length of Credit History (15%)</h4>
                <p>How long have you had credit accounts?</p>
              </div>
              <div className="factor">
                <h4>Credit Mix (10%)</h4>
                <p>Do you have different types of credit?</p>
              </div>
              <div className="factor">
                <h4>New Credit (10%)</h4>
                <p>Have you applied for a lot of new accounts recently?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Credit Cards for Teens</h2>
          
          <div className="options-container">
            <div className="option">
              <h3>Authorized User</h3>
              <p>
                Your parent adds you to their credit card account. You get your own card, but they're responsible for payments.
                This helps you build credit history while learning responsible use.
              </p>
              <div className="pros-cons">
                <div className="pros">
                  <h4>Pros</h4>
                  <ul>
                    <li>Builds credit history</li>
                    <li>No application needed</li>
                    <li>Parent can monitor spending</li>
                  </ul>
                </div>
                <div className="cons">
                  <h4>Cons</h4>
                  <ul>
                    <li>Limited independence</li>
                    <li>Depends on parent's good credit habits</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="option">
              <h3>Secured Credit Card</h3>
              <p>
                For those 18+. You deposit money as collateral, and your credit limit equals your deposit.
              </p>
              <div className="pros-cons">
                <div className="pros">
                  <h4>Pros</h4>
                  <ul>
                    <li>Easier to qualify for</li>
                    <li>Builds credit history</li>
                    <li>Limited risk of debt</li>
                  </ul>
                </div>
                <div className="cons">
                  <h4>Cons</h4>
                  <ul>
                    <li>Requires deposit</li>
                    <li>May have annual fees</li>
                    <li>Must be 18+</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="option">
              <h3>Student Credit Card</h3>
              <p>
                For college students 18+. Designed for those with limited credit history.
              </p>
              <div className="pros-cons">
                <div className="pros">
                  <h4>Pros</h4>
                  <ul>
                    <li>Often has student perks</li>
                    <li>Lower credit requirements</li>
                    <li>May have rewards</li>
                  </ul>
                </div>
                <div className="cons">
                  <h4>Cons</h4>
                  <ul>
                    <li>Must be 18+ and enrolled in college</li>
                    <li>May have higher interest rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Credit Card Safety Tips</h2>
          
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Pay in Full Each Month</h3>
              <p>
                Always try to pay your full balance to avoid interest charges.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Never Miss a Payment</h3>
              <p>
                Late payments hurt your credit score and can result in fees.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Stay Below 30% Utilization</h3>
              <p>
                Try not to use more than 30% of your available credit limit.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Monitor for Fraud</h3>
              <p>
                Check your statements regularly and report any suspicious charges immediately.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Avoid Cash Advances</h3>
              <p>
                These often have high fees and interest rates with no grace period.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Read the Fine Print</h3>
              <p>
                Understand all fees, interest rates, and terms before using a credit card.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Building Credit Without a Credit Card</h2>
          
          <div className="alternatives-grid">
            <div className="alternative-card">
              <h3>Credit Builder Loans</h3>
              <p>
                Small loans designed specifically to help build credit history.
              </p>
            </div>
            
            <div className="alternative-card">
              <h3>Report Rent Payments</h3>
              <p>
                Some services let you add rent payments to your credit report.
              </p>
            </div>
            
            <div className="alternative-card">
              <h3>Become an Authorized User</h3>
              <p>
                As mentioned above, this is one of the best ways for teens to start building credit.
              </p>
            </div>
            
            <div className="alternative-card">
              <h3>Student Loans</h3>
              <p>
                If you have student loans, making on-time payments helps build credit.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-box">
          <h2>Ready to Learn More?</h2>
          <p>Ask our AI assistant any questions you have about credit cards and building credit!</p>
          <a href="/ai-help" className="btn btn-primary">Ask AI Assistant</a>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
