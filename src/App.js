import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './components/History';
import Nav from './components/Nav';
import Overview from './components/Overview';

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
