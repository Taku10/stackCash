import { NavLink } from "react-router-dom";
import MainNav from "../components/mainNav";
import "../styles/auth.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <MainNav />
            <div className="signup-wrapper">
                <div className="form-container-signUp">
                    <form className="signup-form">
                        <div className="form-divider">
                            <div className="form-left">
                                <div className="form-group-signUp">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" id="first-name" name="first-name" />
                                </div>
                                <div className="form-group-signUp">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id="last-name" name="last-name" />
                                </div>
                                <div className="form-group-signUp">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                            </div>
                            <div className="form-right">
                                <div className="form-group-signUp">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" />
                                </div>
                                <div className="form-group-signUp">
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <input type="password" id="confirm-password" name="confirm-password" />
                                </div>
                            </div>
                        </div>


                        <button type="submit">Sign Up</button>
                        <p>
                            Already have an account? <NavLink to="/login">Login</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;