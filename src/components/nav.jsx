import { BsStack } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <div className='logo-wrapper'>
                <BsStack className="logo"/>
                <h1>Stack Cash</h1>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-item">Overview</Link>
                <Link to="/transaction-history" className="nav-item">Transaction History</Link>
                <Link to="/transfer-funds" className="nav-item">Transfer Funds</Link>
                <Link to="/budgets" className="nav-item">Budgets</Link>
                <Link to="/connect-bank" className="nav-item">Connect Bank</Link>
            </div>
        </nav>
    )
}

export default Nav