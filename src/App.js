import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './components/history';
import Nav from './components/nav';
import Overview from './components/overview';

function App() { 
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path = "/" element={<Overview />} />
        <Route path = "/transaction-history" element={<History />} />

      </Routes>
    </div>
  );
}

export default App;
