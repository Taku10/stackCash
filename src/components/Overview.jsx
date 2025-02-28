import { ArcElement, Chart, defaults } from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import { FaChartPie } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import budgetData from "../data/budget.json";
import chess from '../images/chess.png';
import netflix from '../images/netflix.png';
import roger from '../images/roger.jpg';
import walmart from '../images/walmart.png';
import '../styles/overview.css';

// Register the ArcElement
Chart.register(ArcElement);
defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Overview = () => {
    function upload(event) {
        const fileUploadInput = event.target;

        // using index [0] to take the first file from the array
        const image = fileUploadInput.files[0];

        // check if the file selected is not an image file
        if (!image.type.includes('image')) {
            return alert('Only images are allowed!');
        }

        // check if size (in bytes) exceeds 10 MB
        if (image.size > 10_000_000) {
            return alert('Maximum upload size is 10MB!');
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);

        fileReader.onload = (fileReaderEvent) => {
            const profilePicture = document.querySelector('.profile-picture');
            profilePicture.style.backgroundImage = `url(${fileReaderEvent.target.result})`;
        };
    }

    return (
    
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
                                    $120.54
                                </h3>
                            </div>

                        </div>
                        <div className="add-bank">
                            <GoPlus className="plus" />
                            <p>Add Bank</p>
                        </div>
                    </div>
                    <div className="transaction-section">
                        <div className="transaction-header header">
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
                        <div className="profile-picture move-left">
                            <input
                                className="file-uploader"
                                type="file"
                                onChange={upload}
                                accept="image/*"
                            />
                        </div>
                        <div className="profile-bio move-left">
                            <h2>Takunda Madziwa</h2>
                            <p>tmadziwa@css.edu</p>
                        </div>
                    </div>
                    <div className="budget-section">
                        <div className="budget-header header">
                            <h4>Budgets</h4>
                        </div>
                        <div className="budget-wrapper">
                            <Doughnut
                                data={{
                                    labels: budgetData.map((data) => data.label),
                                    datasets: [
                                        {
                                            label: "Budgets",
                                            data: budgetData.map((data) => data.value),
                                            backgroundColor: budgetData.map((data) => data.bColor),
                                        },
                                    ],
                                }}
                                options={{
                                    plugins: {
                                        legend: {
                                            display: false
                                        }
                                    }
                                }}
                                className='pie-chart'
                            />
                        </div>
                    </div>
                </div>
            </div>
      
    )
}

export default Overview