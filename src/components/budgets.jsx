import { ArcElement, Chart, defaults } from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../styles/budgets.css";



Chart.register(ArcElement);
defaults.maintainAspectRatio = false;
defaults.responsive = true;


const Budgets = () => {


    return (
        <div className="budgets-container">
            <div className="budgets-wrapper">
                <div className="budgets-header">
                    <h1>Budgets</h1>
                    <div className='budgets-select-account'>
                        <select name="budgets-accounts" id="budget-accounts">
                            <option value="budgets-chase">Chase</option>
                            <option value="budgets-wellsFargo">Wells Fargo</option>
                            <option value="budgets-usBank">US Bank</option>
                        </select>
                    </div>
                </div>

                <div className="budgets-chart-container">

                    <Line data={{
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                        datasets: [
                            {
                                label: "Expenses",
                                data: [645, 767, 875, 600, 660, 789, 564, 450, 440, 665, 550, 676],
                                pointBackgroundColor: "green",
                                pointBorderColor: "green",

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

                    />
                </div>
                <div className="budgets-bottom-half">
                    <div className='budgets-tabs'>
                        <Tabs>
                            <TabList>
                                <Tab>Income</Tab>
                                <Tab>Expenses</Tab>
                            </TabList>
                                <img src="" alt="" />
                            <TabPanel>
                                
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                    <div className='budgets-summary'>

                    </div>
                </div>


            </div>
        </div>
    )
};

export default Budgets;