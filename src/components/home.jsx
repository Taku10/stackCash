import { FaChartPie } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import chess from '../images/chess.png';
import netflix from '../images/netflix.png';
import roger from '../images/roger.jpg';
import walmart from '../images/walmart.png';
import '../styles/home.css';
import Nav from './nav';


const Home = () => {
    
    return (
        <div className="home-container">
            <Nav />
            <div className='home-wrapper'>
                <div className='left-middle-wrapper'>
                    <div className='welcome-section'>
                        <h1>
                            Welcome <span className='name'>Takunda</span>
                        </h1>
                        <p>
                            Inspired by Stack Overflow, but stacking money
                        </p>
                    </div>
                    <div className='balance-section'>
                        <FaChartPie className="pie-chart" />
                        <div className="bank-stuff">
                            <p className="num-bank">
                                3 Bank Accounts
                            </p>
                            <div className="total-balance">
                                <p>
                                    Total Current Balance
                                </p>
                                <h3>
                                    $00.54
                                </h3>
                            </div>

                        </div>
                        <div className="add-bank">
                            <GoPlus className = "plus" />
                            <p>Add Bank</p>
                        </div>
                    </div>
                    <div className="transaction-section">
                        <div className="transaction-header">
                            <h4>Transactions</h4>
                            <button>View all</button>
                        </div>
                        <div className="transaction-wrapper">
                            <div className="record">
                                <div className="record-left">
                                    <img src={roger} alt="" />
                                    <p>Roger <span></span> </p>
                                </div>
                                <p className="record-amount-received">+$43.30</p>
                                <p className="record-date">02/08/2025</p>
                            </div>
                            <div className="record">
                                <div className="record-left">
                                    <img src={walmart} alt="" />
                                    <p>Walmart</p>
                                </div>
                                <p className="record-amount-spent">-$53.87</p>
                                <p className="record-date">02/04/2025</p>
                            </div>
                            <div className="record">
                                <div className="record-left">
                                    <img src={netflix} alt="" />
                                    <p>Netflix</p>
                                </div>
                                <p className="record-amount-spent">-$13.99</p>
                                <p className="record-date">02/02/2025</p>
                            </div>
                            <div className="record">
                                <div className="record-left">
                                    <img src={chess} alt="" />
                                    <p>Chess.com</p>
                                </div>
                                <p className="record-amount-received">+$150.30</p>
                                <p className="record-date">01/25/2025</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="right-wrapper">
                    <div className="profile-section">
                        <div className="profile-cover">

                        </div>
                        <div className="profile-picture">
                                                
                        </div>
                    </div>
                    <div className="budget-section">
                        <div className="budget-header">
                            <div className="budget-section">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home