import { BsStack } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";


const MainNav = () => {
    // hide Login and signUp link when on signUp page
    const location = useLocation();
    const hideNavPaths = ["/signUp"];
    const showNav = !hideNavPaths.includes(location.pathname);
    return (
        <nav className="main-nav">
            
            <div className='home-logo-wrapper'>
                <BsStack className="home-logo" />
                <h1>Stack Cash</h1>
            </div>
            
           
            {showNav &&
            
                <div className="auth-links">

                    <NavLink to="/login" className="auth-link login-link">Login</NavLink>
                    <NavLink to="/signUp" className="auth-link signUp-link">Sign Up</NavLink>
                </div>}
            
                
        </nav>
    )
};

export default MainNav;