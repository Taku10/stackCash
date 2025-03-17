import { BsStack } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
import { doSignOut } from "../firebase/auth";
import '../styles/nav.css';

const Nav = () => {

    const navigate = useNavigate();
    const signOut = () => {
        doSignOut();
        navigate("/login");

    }

    return (
        <nav className="nav">
            <div className='logo-wrapper'>
                <BsStack className="logo"/>
                <h1>Stack Cash</h1>
            </div>
            <div className="nav-links">
                <NavLink exact to="/overview" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Overview</NavLink>
                <NavLink to="/transaction-history" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Transaction History</NavLink>
                <NavLink to="/transfer-funds" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Transfer Funds</NavLink>
                <NavLink to="/budgets" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Budgets</NavLink>
                <NavLink to="/connect-bank" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Connect Bank</NavLink>
            </div>
            <div>
                <div className="sign-out">
                    <button onClick={signOut}>Sign Out</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;