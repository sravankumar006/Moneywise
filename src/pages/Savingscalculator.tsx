import { useState, useEffect } from 'react';
import './SavingsCalculator.css';

const SavingsCalculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(1000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100);
  const [interestRate, setInterestRate] = useState<number>(7);
  const [years, setYears] = useState<number>(10);
  const [results, setResults] = useState<{
    futureValue: number;
    totalContributions: number;
    interestEarned: number;
    yearlyData: Array<{
      year: number;
      balance: number;
      contributions: number;
      interest: number;
    }>;
  }>({
    futureValue: 0,
    totalContributions: 0,
    interestEarned: 0,
    yearlyData: [],
  });

  // Calculate savings
  useEffect(() => {
    const calculateSavings = () => {
      const monthlyRate = interestRate / 100 / 12;
      
      let balance = initialAmount;
      let totalContributions = initialAmount;
      let yearlyData = [];
      
      for (let year = 1; year <= years; year++) {
        let startYearBalance = balance;
        let yearlyContribution = 0;
        
        // Calculate 12 months for this year
        for (let month = 1; month <= 12; month++) {
          // Add monthly contribution
          balance += monthlyContribution;
          yearlyContribution += monthlyContribution;
          
          // Add interest for the month
          balance *= (1 + monthlyRate);
        }
        
        totalContributions += yearlyContribution;
        
        yearlyData.push({
          year,
          balance: Math.round(balance * 100) / 100,
          contributions: Math.round(yearlyContribution * 100) / 100,
          interest: Math.round((balance - startYearBalance - yearlyContribution) * 100) / 100
        });
      }
      
      const futureValue = Math.round(balance * 100) / 100;
      const interestEarned = Math.round((futureValue - totalContributions) * 100) / 100;
      
      setResults({
        futureValue,
        totalContributions: Math.round(totalContributions * 100) / 100,
        interestEarned,
        yearlyData
      });
    };
    
    calculateSavings();
  }, [initialAmount, monthlyContribution, interestRate, years]);

  // Format currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="calculator-page">
      <div className="page-header">
        <div className="container">
          <h1>Savings Calculator</h1>
          <p className="page-description">See how your savings can grow over time with compound interest</p>
        </div>
      </div>

      <div className="container">
        <div className="calculator-container">
          <div className="calculator-inputs">
            <h2>Enter Your Information</h2>
            
            <div className="input-group">
              <label htmlFor="initialAmount">Starting Amount ($)</label>
              <input
                type="number"
                id="initialAmount"
                value={initialAmount}
                onChange={(e) => setInitialAmount(Number(e.target.value))}
                min="0"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="monthlyContribution">Monthly Contribution ($)</label>
              <input
                type="number"
                id="monthlyContribution"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                min="0"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="interestRate">Annual Interest Rate (%)</label>
              <input
                type="number"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                min="0"
                step="0.1"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="years">Time Period (Years)</label>
              <input
                type="range"
                id="years"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                min="1"
                max="50"
                step="1"
              />
              <div className="range-value">{years} years</div>
            </div>
          </div>
          
          <div className="calculator-results">
            <h2>Your Results</h2>
            
            <div className="results-summary">
              <div className="result-card">
                <h3>Future Value</h3>
                <div className="result-value">{formatCurrency(results.futureValue)}</div>
              </div>
              
              <div className="result-card">
                <h3>Total Contributions</h3>
                <div className="result-value">{formatCurrency(results.totalContributions)}</div>
              </div>
              
              <div className="result-card">
                <h3>Interest Earned</h3>
                <div className="result-value">{formatCurrency(results.interestEarned)}</div>
              </div>
            </div>
            
            <div className="results-breakdown">
              <h3>Year-by-Year Breakdown</h3>
              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Year-End Balance</th>
                      <th>Contributions</th>
                      <th>Interest Earned</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.yearlyData.map((yearData) => (
                      <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatCurrency(yearData.balance)}</td>
                        <td>{formatCurrency(yearData.contributions)}</td>
                        <td>{formatCurrency(yearData.interest)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div className="calculator-insights">
          <h2>Understanding Your Results</h2>
          
          <div className="insights-grid">
            <div className="insight-card">
              <h3>The Power of Compound Interest</h3>
              <p>
                Compound interest is when you earn interest not just on your initial investment, but also on the interest 
                you've already earned. This creates a snowball effect that accelerates your savings growth over time.
              </p>
            </div>
            
            <div className="insight-card">
              <h3>Start Early</h3>
              <p>
                The earlier you start saving, the more time your money has to grow. Even small amounts can grow 
                significantly over long periods thanks to compound interest.
              </p>
            </div>
            
            <div className="insight-card">
              <h3>Consistency Matters</h3>
              <p>
                Regular contributions, even small ones, can dramatically increase your savings over time. 
                Setting up automatic transfers to your savings account can help you stay consistent.
              </p>
            </div>
            
            <div className="insight-card">
              <h3>The Rule of 72</h3>
              <p>
                To estimate how long it will take for your money to double, divide 72 by your interest rate. 
                For example, at 7% interest, your money will double in approximately 10.3 years (72 ÷ 7 = 10.3).
              </p>
            </div>
          </div>
        </div>
        
        <div className="calculator-examples">
          <h2>Savings Goals Examples</h2>
          
          <div className="examples-grid">
            <div className="example-card">
              <h3>College Fund</h3>
              <p>
                If you start saving $100/month at age 10 with a 7% return, by age 18 you could have over $13,000 for college expenses.
              </p>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setInitialAmount(0);
                  setMonthlyContribution(100);
                  setInterestRate(7);
                  setYears(8);
                }}
              >
                Try This Example
              </button>
            </div>
            
            <div className="example-card">
              <h3>First Car</h3>
              <p>
                Saving $50/month with a $500 starting amount could give you $3,700+ in 5 years for your first car.
              </p>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setInitialAmount(500);
                  setMonthlyContribution(50);
                  setInterestRate(5);
                  setYears(5);
                }}
              >
                Try This Example
              </button>
            </div>
            
            <div className="example-card">
              <h3>Long-Term Growth</h3>
              <p>
                Starting with $1,000 and adding $100/month at 7% interest could grow to over $120,000 in 30 years.
              </p>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setInitialAmount(1000);
                  setMonthlyContribution(100);
                  setInterestRate(7);
                  setYears(30);
                }}
              >
                Try This Example
              </button>
            </div>
          </div>
        </div>
        
        <div className="cta-box">
          <h2>Have Questions About Saving?</h2>
          <p>Our AI assistant can help you understand savings concepts and answer your financial questions!</p>
          <a href="/ai-help" className="btn btn-primary">Ask AI Assistant</a>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
