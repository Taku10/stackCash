import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from "react-router-dom";
import MainNav from "../components/mainNav";
import { auth, db } from "../firebase/firebase";
import { AnimatePage } from "../framer-motion/AnimatePage";
import "../styles/auth.css";



const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //    const [isRegistering, setIsRegistering] = useState(false);


    useEffect(() => {
        document.title = "Stack Cash | Sign Up";
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Form validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            toast.error("Please fill out all fields.");
            return;
        }
    
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }
    
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                });
            }
            console.log(firstName);
            console.log("User Created");
            navigate("/overview");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                toast.error("An account with this email already exists.");
            } else {
                toast.error("Error: " + error.message);
            }
        }
    };

    return (
       
        <div className="signup-container">
            <MainNav />
            <AnimatePage>
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
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                        <p>
                            Already have an account? <NavLink to="/login">Login</NavLink>
                        </p>
                    </form>
                </div>
            </div>
            </AnimatePage>
        </div>
       
    );
};

export default Signup;