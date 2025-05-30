import { ArcElement, Chart, defaults } from 'chart.js/auto';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Doughnut } from "react-chartjs-2";
import CountUp from 'react-countup';
import { GoPlus } from "react-icons/go";
import TypeWriter from 'typewriter-effect';
import budgetData from "../data/budget.json";
import { auth, db } from '../firebase/firebase';
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
    // const { currentUser } = useAuth();
    // const {firstName, lastName, email } = useSignAuth();

    const [userDetails, setUserDetails] = useState(null);
    const getUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                // console.log(user);
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                    console.log(docSnap.data());
                } else {
                    console.log("User is not logged in")
                }
            } else {
                setUserDetails(null);
            }

        })

    }

    useEffect(() => {
        getUserData();
    }, []);

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

    const typewriter = <TypeWriter
        onInit={(typeWriter) => {
            typeWriter
                .typeString(`${userDetails.firstName}`)
                .pauseFor(2000000000000000)
                .start();
        }}
        options={{
            loop: true,
            cursor: '',
        }}
    />




    const doughnut = <Doughnut
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
        className="pie-chart"
    />

    useEffect(() => {
        document.title = "Stack Cash | Overview";
    }, []);

    const nameLoading = <p>...</p>
    return (

        <div className='overview-wrapper'>
            <div className='left-middle-wrapper'>
                <div className='welcome-section'>
                    <h1>

                        Welcome <span className='name'> {userDetails ? typewriter : nameLoading}</span>
                    </h1>
                    <p>
                        Inspired by Stack Overflow, but stacking money
                    </p>
                </div>
                <div className='balance-section'>
                    {/* <div className='pie-header'> */}
                    <Doughnut
                        data={{
                            labels: ["Chase", "Wells Fargo", "US Bank"],
                            datasets: [
                                {
                                    label: "Banks",
                                    data: [344, 500, 200],
                                    backgroundColor: ["#58d68d", "#82e0aa", "#28b463"],
                                    offset: 10,
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: '50%',
                            plugins: {
                                legend: {
                                    display: false
                                }
                            }
                        }}
                        className='pie-chart-banks'
                    />
                    {/* </div> */}

                    <div className="bank-stuff">
                        <p className="num-bank">
                            3 Bank Accounts
                        </p>
                        <div className="total-balance">
                            <p>
                                Total Current Balance
                            </p>
                            <h3>
                                $<CountUp end={875.45} decimals={2} duration={1} />
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
                        <h4>Recent Transactions</h4>
                        <button>View all</button>
                    </div>
                    <div className="transaction-wrapper">
                        <table className="transaction-table">
                            <thead>
                                <tr>
                                    <th>Recipient</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="record-left">
                                            <img src={roger} alt="" />
                                            <p>Roger</p>
                                        </div>
                                    </td>
                                    <td className="record-amount-received">+$43.30</td>
                                    <td className="record-date">02/08/2025</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="record-left">
                                            <img src={walmart} alt="" />
                                            <p>Walmart</p>
                                        </div>
                                    </td>
                                    <td className="record-amount-spent">-$53.87</td>
                                    <td className="record-date">02/04/2025</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="record-left">
                                            <img src={netflix} alt="" />
                                            <p>Netflix</p>
                                        </div>
                                    </td>
                                    <td className="record-amount-spent">-$13.99</td>
                                    <td className="record-date">02/02/2025</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="record-left">
                                            <img src={chess} alt="" />
                                            <p>Chess.com</p>
                                        </div>
                                    </td>
                                    <td className="record-amount-received">+$150.30</td>
                                    <td className="record-date">01/25/2025</td>
                                </tr>
                            </tbody>
                        </table>
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
                        {userDetails ? (
                            <><h2>{`${userDetails.firstName}`}</h2>
                                <p>{`${userDetails.email}`}</p></>
                        ) : (
                            <p>Loading </p>

                        )}
                    </div>

                </div>
                <div className="budget-section">
                    <div className="budget-header header">
                        <h4>Budgets</h4>
                    </div>
                    <div className="budget-wrapper">
                        {doughnut}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Overview