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
            <ul className="nav-links">
                <li className="nav-item"><Link to = "/overview">Overview</Link></li>
                <li className="nav-item"><Link to = "/history">Transaction History</Link></li>
                <li className="nav-item"><Link to = "/transfer-funds">Transer Funds</Link></li>
                <li className="nav-item"><Link to = "budgets">Budgets</Link></li>
                <li className="nav-item"><Link to  = "connect-bank">Connect Bank</Link></li>
            </ul>
        </nav>
    )
}

export default Nav