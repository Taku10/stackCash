import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsStack } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
import { AnimatePage } from "../framer-motion/AnimatePage";
import "../styles/auth.css";


const Login = () => {
    // const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState(null);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Stack Cash | Login";
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        if(!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                navigate("/overview");
            } catch (error) {
                toast.error("Invalid email or password");
                setIsSigningIn(false);
            }
        }
        
    }

    return (
        <AnimatePage>
        <div className="login-container">
           
            <div className="login-wrapper">
                <div className="form-container">
                    <div className='logo-wrapper'>
                        <BsStack className="logo" />
                        <h1>Stack Cash</h1>
                    </div>
                    <form className="auth-form login-form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                     
                        <button type="submit">Login</button>
                        <Toaster
  position="top-center"
  reverseOrder={false}
/>
                       <p>Don't have an account? <NavLink to="/signUp" className="">Sign Up</NavLink></p>    
                       
                        
                    </form>
                    

                    
                </div>

            </div>

        </div>
        </AnimatePage>
    );
};

export default Login;