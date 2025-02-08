import { BsStack } from "react-icons/bs";
import '../styles/nav.css';



const Nav = () => {
    return (
        <div className="nav">
            <div className='logo-wrapper'>
                <BsStack className="logo"/>
                <h1>Stack Cash</h1>
            </div>
            <ul className="nav-links">
                <li className="nav-item">Home</li>
                <li className="nav-item">Transaction History</li>
                <li className="nav-item">Transer Funds</li>
                <li className="nav-item">Budgets</li>
                <li className="nav-item">Connect Bank</li>
            </ul>
        </div>
    )
}

export default Nav