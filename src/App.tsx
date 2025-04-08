import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/layout';
import Home from './pages/Home';
import Budgeting from './pages/Budgeting';
import Investing from './pages/Investing';
import Banking from './pages/Banking';
import CreditCards from './pages/CreditCards';
import SavingsCalculator from './pages/Savingscalculator';
import AiHelp from './pages/AiHelp';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/savings-calculator" element={<SavingsCalculator />} />
          <Route path="/ai-help" element={<AiHelp />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
