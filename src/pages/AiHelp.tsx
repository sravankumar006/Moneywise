import { useState } from 'react';
import './AiHelp.css';

const AiHelp = () => {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState<Array<{
    type: 'user' | 'ai';
    message: string;
  }>>([
    {
      type: 'ai',
      message: "Hi there! I'm your Financial Literacy Assistant. Ask me any questions about money, saving, investing, or financial concepts, and I'll help you understand them!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Sample responses for demo purposes
  const sampleResponses: Record<string, string> = {
    'what is compound interest': 
      "Compound interest is when you earn interest not just on your initial investment, but also on the interest you've already earned. It's like a snowball effect that makes your money grow faster over time. For example, if you invest $100 with 10% annual interest, after one year you'll have $110. In the second year, you earn interest on $110, not just the original $100, giving you $121. This effect becomes more powerful the longer your money is invested.",
    
    'how do i create a budget': 
      "Creating a budget is simple! Start by tracking all your income (allowance, job earnings, gifts). Then, list all your expenses and categorize them as needs (essential) or wants (nice to have). A good rule is the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings. Make sure your total spending doesn't exceed your income. Track your actual spending and adjust your budget as needed. There are many apps that can help you track your spending, like Mint or YNAB.",
    
    'what is a credit score': 
      "A credit score is a number (usually between 300-850) that represents how reliable you are with borrowing and repaying money. Higher scores mean lenders see you as less risky. Your score is affected by: payment history (35%), amounts owed (30%), length of credit history (15%), new credit (10%), and credit mix (10%). As a teen, you can start building credit by becoming an authorized user on a parent's credit card or getting a secured credit card when you're 18.",
    
    'how to save for college': 
      "Saving for college is a great goal! Start by setting a target amount based on the type of college you want to attend. Consider opening a 529 College Savings Plan, which offers tax advantages for education expenses. Set up automatic transfers from your allowance or part-time job earnings. Look into scholarships and grants early - there are many available even for middle and high school students. Consider dual enrollment or AP classes in high school to earn college credits at a lower cost. Remember, every dollar you save is a dollar you won't have to borrow later!",
    
    'what is investing': 
      "Investing means putting your money into something with the expectation that it will grow over time. Common investments include stocks (ownership in companies), bonds (loans to companies or governments), mutual funds (collections of stocks/bonds managed by professionals), and ETFs (similar to mutual funds but traded like stocks). Investing involves risk - the value can go up or down - but historically, the stock market has provided higher returns than savings accounts over long periods. As a teen, you can start investing with a custodial account managed by a parent or guardian.",
    
    'how to make money as a teen': 
      "There are lots of ways to make money as a teen! Traditional options include babysitting, lawn mowing, pet sitting, or retail/food service jobs. You could also leverage your skills - tutoring other students, creating digital art, building websites, or editing videos. Online platforms like Etsy let you sell crafts or designs. Consider offering tech support to adults in your community who need help with devices. You could also explore content creation on platforms like YouTube (though monetization requires being 18+). Remember to save some of what you earn for future goals!"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    // Add user question to conversation
    const userQuestion = question.trim();
    setConversation(prev => [...prev, { type: 'user', message: userQuestion }]);
    setQuestion('');
    setIsLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      let response = "I'm not sure about that yet, but I'm learning! Try asking about compound interest, budgeting, credit scores, saving for college, investing, or ways to make money as a teen.";
      
      // Check for matching keywords in sample responses
      const lowerQuestion = userQuestion.toLowerCase();
      for (const [key, value] of Object.entries(sampleResponses)) {
        if (lowerQuestion.includes(key)) {
          response = value;
          break;
        }
      }
      
      setConversation(prev => [...prev, { type: 'ai', message: response }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="ai-help-page">
      <div className="page-header">
        <div className="container">
          <h1>AI Financial Assistant</h1>
          <p className="page-description">Get personalized answers to your financial questions</p>
        </div>
      </div>

      <div className="container">
        <div className="ai-chat-container">
          <div className="chat-messages">
            {conversation.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-bubble">
                  {message.type === 'ai' && (
                    <div className="ai-avatar">
                      <span>AI</span>
                    </div>
                  )}
                  <div className="message-content">
                    {message.message}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message ai">
                <div className="message-bubble">
                  <div className="ai-avatar">
                    <span>AI</span>
                  </div>
                  <div className="message-content typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a financial question..."
              disabled={isLoading}
            />
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Thinking...' : 'Ask'}
            </button>
          </form>
        </div>
        
        <div className="suggested-questions">
          <h2>Suggested Questions</h2>
          <div className="questions-grid">
            <button 
              className="question-button"
              onClick={() => {
                setQuestion('What is compound interest?');
                document.querySelector<HTMLFormElement>('.chat-input')?.requestSubmit();
              }}
            >
              What is compound interest?
            </button>
            <button 
              className="question-button"
              onClick={() => {
                setQuestion('How do I create a budget?');
                document.querySelector<HTMLFormElement>('.chat-input')?.requestSubmit();
              }}
            >
              How do I create a budget?
            </button>
            <button 
              className="question-button"
              onClick={() => {
                setQuestion('What is a credit score?');
                document.querySelector<HTMLFormElement>('.chat-input')?.requestSubmit();
              }}
            >
              What is a credit score?
            </button>
            <button 
              className="question-button"
              onClick={() => {
                setQuestion('How to save for college?');
                document.querySelector<HTMLFormElement>('.chat-input')?.requestSubmit();
              }}
            >
              How to save for college?
            </button>
            <button 
              className="question-button"
              onClick={() => {
                setQuestion('What is investing?');
                document.querySelector<HTMLFormElement>('.chat-input')?.requestSubmit();
              }}
            >
              What is investing?
            </button>
            <button 
              className="question-button"
              onClick={() => {
                setQuestion('How to make money as a teen?');
                document.querySelector<HTMLFormElement>('.chat-input')?.requestSubmit();
              }}
            >
              How to make money as a teen?
            </button>
          </div>
        </div>
        
        <div className="ai-help-info">
          <h2>How the Financial AI Assistant Can Help You</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Learn Financial Concepts</h3>
              <p>
                Get easy-to-understand explanations of financial terms and concepts tailored for teens.
              </p>
            </div>
            
            <div className="info-card">
              <h3>Get Personalized Advice</h3>
              <p>
                Ask specific questions about your financial situation and goals to receive customized guidance.
              </p>
            </div>
            
            <div className="info-card">
              <h3>Plan for the Future</h3>
              <p>
                Learn strategies for saving, investing, and preparing for major expenses like college or a car.
              </p>
            </div>
            
            <div className="info-card">
              <h3>Build Good Habits</h3>
              <p>
                Discover tips and techniques for developing healthy financial habits that will benefit you for life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiHelp;
