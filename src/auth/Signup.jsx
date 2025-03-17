import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MainNav from "../components/mainNav";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import "../styles/auth.css";

const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    // const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!isRegistering){
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password);
            navigate("/overview");
        }
    };

    return (
        <div className="signup-container">
            <MainNav />
            <div className="signup-wrapper">
                <div className="form-container-signUp">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="form-divider">
                            <div className="form-left">
                                <div className="form-group-signUp">
                                    <label htmlFor="first-name">First Name</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first-name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group-signUp">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last-name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group-signUp">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-right">
                                <div className="form-group-signUp">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group-signUp">
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirm-password"
                                        name="confirm-password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
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