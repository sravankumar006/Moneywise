import './Budeting.css';

const Budgeting = () => {
  return (
    <div className="content-page">
      <div className="page-header">
        <div className="container">
          <h1>Budgeting Basics</h1>
          <p className="page-description">Learn how to create and stick to a budget that works for you</p>
        </div>
      </div>

      <div className="container">
        <div className="content-section">
          <h2>What is a Budget?</h2>
          <p>
            A budget is a plan that helps you track your money, including how much you earn and spend. 
            It's like a roadmap for your finances that helps you reach your goals.
          </p>
          
          <div className="info-box">
            <h3>Why Budgeting Matters for Teens</h3>
            <p>
              Even if you don't have many expenses now, learning to budget early will help you:
            </p>
            <ul>
              <li>Save for things you want (like a car, phone, or college)</li>
              <li>Develop good money habits that will benefit you for life</li>
              <li>Gain independence and confidence with money</li>
              <li>Avoid debt problems that many young adults face</li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <h2>The 50/30/20 Rule</h2>
          <p>
            One popular budgeting method is the 50/30/20 rule. Here's how it works:
          </p>
          
          <div className="budget-breakdown">
            <div className="budget-category">
              <h3>50% - Needs</h3>
              <p>Essential expenses like food, transportation, and basic clothing.</p>
              <div className="examples">
                <span>School supplies</span>
                <span>Bus fare</span>
                <span>Lunch</span>
              </div>
            </div>
            
            <div className="budget-category">
              <h3>30% - Wants</h3>
              <p>Non-essential items that improve your life.</p>
              <div className="examples">
                <span>Movies</span>
                <span>Video games</span>
                <span>Eating out</span>
              </div>
            </div>
            
            <div className="budget-category">
              <h3>20% - Savings</h3>
              <p>Money set aside for future goals and emergencies.</p>
              <div className="examples">
                <span>College fund</span>
                <span>Car savings</span>
                <span>Emergency fund</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Creating Your First Budget</h2>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Track Your Income</h3>
                <p>
                  Write down all sources of money you receive:
                </p>
                <ul>
                  <li>Allowance</li>
                  <li>Part-time job earnings</li>
                  <li>Gifts</li>
                  <li>Side hustles (babysitting, lawn mowing, etc.)</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>List Your Expenses</h3>
                <p>
                  Write down everything you spend money on:
                </p>
                <ul>
                  <li>Regular expenses (phone bill, subscriptions)</li>
                  <li>Occasional expenses (clothes, entertainment)</li>
                  <li>Savings for specific goals</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Categorize Expenses</h3>
                <p>
                  Group your expenses into categories:
                </p>
                <ul>
                  <li>Needs (essentials you can't live without)</li>
                  <li>Wants (things that are nice to have)</li>
                  <li>Savings (money for future goals)</li>
                </ul>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Create Your Budget Plan</h3>
                <p>
                  Allocate your income to your expense categories. Make sure your total expenses don't exceed your income.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Track and Adjust</h3>
                <p>
                  Keep track of your actual spending and compare it to your budget. Adjust as needed to stay on track.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Budgeting Apps for Teens</h2>
          <p>
            These apps can help you manage your money more easily:
          </p>
          
          <div className="app-cards">
            <div className="app-card">
              <h3>Greenlight</h3>
              <p>A debit card and app designed for teens with parental oversight.</p>
            </div>
            
            <div className="app-card">
              <h3>FamZoo</h3>
              <p>Virtual family bank that helps teens learn to manage money.</p>
            </div>
            
            <div className="app-card">
              <h3>Mint</h3>
              <p>Free budgeting app that can help track spending (for older teens).</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Common Budgeting Mistakes to Avoid</h2>
          
          <div className="mistakes-grid">
            <div className="mistake-card">
              <h3>Not Tracking Small Expenses</h3>
              <p>
                Those $5 coffee shop visits add up quickly! Track everything, no matter how small.
              </p>
            </div>
            
            <div className="mistake-card">
              <h3>Forgetting Irregular Expenses</h3>
              <p>
                Remember to budget for things like birthday gifts, school events, and seasonal activities.
              </p>
            </div>
            
            <div className="mistake-card">
              <h3>Not Having an Emergency Fund</h3>
              <p>
                Even teens should have some money set aside for unexpected expenses.
              </p>
            </div>
            
            <div className="mistake-card">
              <h3>Setting Unrealistic Goals</h3>
              <p>
                Start with small, achievable goals to build confidence and momentum.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-box">
          <h2>Ready to Create Your Budget?</h2>
          <p>Use our savings calculator to see how your budget can help you reach your financial goals!</p>
          <a href="/savings-calculator" className="btn btn-primary">Try Our Calculator</a>
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
