import './Banking.css';

const Banking = () => {
  return (
    <div className="content-page">
      <div className="page-header">
        <div className="container">
          <h1>Banking Basics</h1>
          <p className="page-description">Learn how to use bank accounts and banking services effectively</p>
        </div>
      </div>

      <div className="container">
        <div className="content-section">
          <h2>Why You Need a Bank Account</h2>
          <p>
            Having a bank account is an important step toward financial independence. Bank accounts offer:
          </p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Safety</h3>
              <p>
                Your money is safer in a bank than at home. Most banks are FDIC insured, 
                which means your money is protected up to $250,000.
              </p>
            </div>
            
            <div className="benefit-card">
              <h3>Convenience</h3>
              <p>
                Access your money through ATMs, debit cards, mobile apps, and online banking.
              </p>
            </div>
            
            <div className="benefit-card">
              <h3>Money Management</h3>
              <p>
                Track your spending, set up automatic savings, and learn financial responsibility.
              </p>
            </div>
            
            <div className="benefit-card">
              <h3>Building History</h3>
              <p>
                Start building a banking history, which will help you access financial services in the future.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Types of Bank Accounts</h2>
          
          <div className="account-types">
            <div className="account-type">
              <h3>Checking Account</h3>
              <p>
                For everyday spending and bill payments. Features include:
              </p>
              <ul>
                <li>Debit card for purchases</li>
                <li>Check writing ability</li>
                <li>Easy access to your money</li>
                <li>Little to no interest earned</li>
              </ul>
            </div>
            
            <div className="account-type">
              <h3>Savings Account</h3>
              <p>
                For setting aside money you don't need right away. Features include:
              </p>
              <ul>
                <li>Earns interest (though usually modest)</li>
                <li>Limited withdrawals per month</li>
                <li>No debit card or checks</li>
                <li>Good for emergency funds and saving for goals</li>
              </ul>
            </div>
            
            <div className="account-type">
              <h3>Student/Teen Account</h3>
              <p>
                Specially designed for young people. Features often include:
              </p>
              <ul>
                <li>No or low minimum balance requirements</li>
                <li>No or reduced monthly fees</li>
                <li>Parental monitoring options</li>
                <li>Educational resources</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>How to Open Your First Bank Account</h2>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Research Banks and Credit Unions</h3>
                <p>
                  Look for accounts with:
                </p>
                <ul>
                  <li>No monthly fees</li>
                  <li>No minimum balance requirements</li>
                  <li>Convenient ATM locations</li>
                  <li>Good mobile banking app</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Gather Required Documents</h3>
                <p>
                  You'll typically need:
                </p>
                <ul>
                  <li>Social Security Number</li>
                  <li>Government-issued ID (or school ID)</li>
                  <li>Proof of address</li>
                  <li>Parent/guardian (if under 18)</li>
                  <li>Initial deposit (often $25-$100)</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Visit the Bank or Apply Online</h3>
                <p>
                  Many banks allow you to start the application online, but you may need to visit in person to finalize it.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Set Up Online Banking</h3>
                <p>
                  Download the bank's app and set up your online account to easily monitor your money.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Banking Tools and Features</h2>
          
          <div className="tools-grid">
            <div className="tool-card">
              <h3>Debit Cards</h3>
              <p>
                A card linked to your checking account that lets you make purchases and withdraw cash from ATMs.
              </p>
            </div>
            
            <div className="tool-card">
              <h3>Mobile Banking</h3>
              <p>
                Apps that let you check balances, deposit checks, transfer money, and pay bills from your phone.
              </p>
            </div>
            
            <div className="tool-card">
              <h3>Direct Deposit</h3>
              <p>
                Have your paycheck or allowance automatically deposited into your account.
              </p>
            </div>
            
            <div className="tool-card">
              <h3>Automatic Transfers</h3>
              <p>
                Set up regular transfers from checking to savings to build your savings automatically.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Banking Safety Tips</h2>
          
          <div className="tips-container">
            <div className="tip-card">
              <h3>Protect Your PIN</h3>
              <p>
                Never share your PIN with anyone and shield the keypad when entering it at ATMs or stores.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Monitor Your Account</h3>
              <p>
                Check your account regularly to spot any unauthorized transactions.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Use Strong Passwords</h3>
              <p>
                Create unique, complex passwords for your online banking and enable two-factor authentication if available.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Be Wary of Scams</h3>
              <p>
                Banks will never ask for your password or PIN via email or phone. Be suspicious of unexpected requests.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-box">
          <h2>Ready to Start Saving?</h2>
          <p>Once you have a bank account, use our savings calculator to plan your financial goals!</p>
          <a href="/savings-calculator" className="btn btn-primary">Try Our Calculator</a>
        </div>
      </div>
    </div>
  );
};

export default Banking;
