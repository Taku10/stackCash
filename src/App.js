import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './components/history';
import Nav from './components/nav';
import Overview from './components/overview';
import Transfer from './components/Transfer';

function App() { 
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path = "/" element={<Overview />} />
        <Route path = "/transaction-history" element={<History />} />
        <Route path = "/transfer-funds" element={<Transfer />} />
      </Routes>
    </div>
  );
}

export default App;
