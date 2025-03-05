import { BsStack } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <div className='logo-wrapper'>
                <BsStack className="logo"/>
                <h1>Stack Cash</h1>
            </div>
            <div className="nav-links">
                <NavLink exact to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Overview</NavLink>
                <NavLink to="/transaction-history" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Transaction History</NavLink>
                <NavLink to="/transfer-funds" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Transfer Funds</NavLink>
                <NavLink to="/budgets" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Budgets</NavLink>
                <NavLink to="/connect-bank" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Connect Bank</NavLink>
            </div>
        </nav>
    );
}

export default Nav;