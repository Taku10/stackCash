import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import ProtectedRoute from "./auth/protectedRoute";
import Signup from './auth/Signup';
import Budgets from './components/budgets';
import History from './components/history';
import Home from './components/home';
import Nav from './components/nav';
import Overview from './components/overview';
import Transfer from './components/Transfer';


function App() { 
  const location = useLocation();
  const hideNavPaths = ["/login", "/signUp", "/"]; // Don't show nav on these pages
  const showNav = !hideNavPaths.includes(location.pathname);

  return (
    <div className={` ${showNav ? 'App' : 'App-no-nav'}`}> 
      {showNav && <Nav />} 
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route 
          path="/overview" 
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/transaction-history" 
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/transfer-funds" 
          element={
            <ProtectedRoute>
              <Transfer />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/budgets" 
          element={
            <ProtectedRoute>
              <Budgets />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
