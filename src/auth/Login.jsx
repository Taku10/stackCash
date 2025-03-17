import { useEffect } from "react";
import { BsStack } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
    useEffect(() => {
        document.title = "Stack Cash | Login";
    }, []);
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="form-container">
                    <div className='logo-wrapper'>
                        <BsStack className="logo" />
                        <h1>Stack Cash</h1>
                    </div>
                    <form className="auth-form login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <button type="submit">Login</button>
                       
                       <p>Don't have an account? <NavLink to="/signUp" className="">Sign Up</NavLink></p>    
                       
                        
                    </form>
                    

                    
                </div>

            </div>

        </div>
    );
};

export default Login;