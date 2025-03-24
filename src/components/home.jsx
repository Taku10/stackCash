import { AnimateHome } from '../framer-motion/AnimatePage';
import homeImg from '../images/hand_home.png';
import '../styles/home.css';
import MainNav from "./mainNav";

const Home = () => {
    return (
        <div className="home-container">
            <MainNav />
            <AnimateHome>
            <div className="home-wrapper">
                <div className="h-left-wrapper">
                    <h1 className="main-heading">Track Your <span>Money</span> the Smart Way</h1>
                    <p> Stay in control of your finances with easy money tracking and budgeting features.</p>
                    <div className='btn-wrapper'>
                        <button className="btn-started h-btn">Get Started</button>
                        <button className='btn-learn  h-btn'>Learn More</button>

                    </div>
                    <p className='h-footer'>Powered by Unlimited Coffee</p>
                </div>
                <div className="h-right-wrapper">
                    <div className='img-overlay'>

                    </div>
                    <img src={homeImg} alt="home-img" className="home-img" />
                </div>
            </div>
            </AnimateHome>
        </div>
    );
}

export default Home;