import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Budgets from './components/budgets';
import History from './components/history';
import Home from './components/home';
import Nav from './components/nav';
import Overview from './components/overview';
import Transfer from './components/Transfer';

function App() { 
  const location = useLocation();
  const hideNavPaths = ["/login", "/signUp", "/"]; // dont show nav on these pages
  const showNav = !hideNavPaths.includes(location.pathname);


  return (
    <div className={` ${showNav ? 'App' : 'App-no-nav'}`}> 
      {!hideNavPaths.includes(location.pathname) && <Nav />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/transaction-history" element={<History />} />
        <Route path="/transfer-funds" element={<Transfer />} />
        <Route path="/budgets" element={<Budgets />} />
      </Routes>
    </div>
  );
}

export default App;
