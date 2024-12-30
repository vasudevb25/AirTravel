import React, { useState , useEffect    } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from "react-router-dom";
import './login.css';


function Loginpage() {
    let navigator=useNavigate()
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        document.body.style.backgroundImage = 'url(/pilotlogin.png)';
        document.body.style.backgroundSize = "cover";
    }, []);
    const login = () => {
        setIsLogin(true);
        document.body.style.backgroundImage = 'url(/pilotlogin.png)';
        document.body.style.backgroundSize = "cover";
        
    };

    const register = () => {
        setIsLogin(false);
        document.body.style.backgroundImage = 'url(/amsky.jpg)';
        document.body.style.backgroundSize = "cover";
    };

    const validateLogin = async () => {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        const usernameError = document.getElementById("login-username-error");
        const passwordError = document.getElementById("login-password-error");

        usernameError.textContent = "";
        passwordError.textContent = "";

        if (username === "") {
            usernameError.textContent = "Username or Email is required.";
        }
        if (password === "") {
            passwordError.textContent = "Password is required.";
        }

        if (username !== "" && password !== "") {
            const response = await fetch(`http://localhost:8000/users?username=${encodeURIComponent(username)}`);
            const data = await response.json();
            console.log(data)
            if(data.length!=0){
                if(data[0].password==password){
                    navigator("/home")
                }
            }else{
                console.log("User Does Exist")
            }
        }
    };

    const validateRegister = async () => {
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;
        if (username!="" && password!="" && fname !== "" && lname !== "") {
            const response = await fetch(`http://localhost:8000/users?username=${encodeURIComponent(username)}`);
            const data = await response.json();
            if(data.length!=0){
                const response = await fetch(`http://localhost:8000/users?username=${encodeURIComponent(username)}&&fname=${encodeURIComponent(fname)}`);
            }else {
                console.log(data.length)
                console.log("UserName Exist")
            }
        }
    };

    return (
        <div className="wrapper">
            <nav className="nav">
                <div className="nav-logo">
                    <p style={{ fontSize: '45px' }}>
                        <a href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                            αмѕку <img src="./dove.png" alt="Logo" />
                        </a>
                    </p>
                </div>
                <div className="nav-button">
                    <button className="btn white" id="loginBtn" onClick={login}>Sign In</button>
                    <button className="btn" id="registerBtn" onClick={register}>Sign Up</button>
                </div>
            </nav>
            <div className="form-box">
                {isLogin ? (
                    <div className="login-container" id="login">
                        <div className="top">
                            <span>Don't have an account? <a href="#" onClick={register}>Sign Up</a></span>
                            <header>Login</header>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" id="login-username" placeholder="Username" />
                            <span id="login-username-error" className="error"></span>
                        </div>
                        <div className="input-box">
                            <input type="password" className="input-field" id="login-password" placeholder="Password" />
                            <span id="login-password-error" className="error"></span>
                        </div>
                        <div className="input-box">
                            <input type="submit" className="submit" value="Sign In" onClick={validateLogin} />
                        </div>
                    </div>
                ) : (
                    <div className="register-container" id="register">
                        <div className="top">
                            <span>Have an account? <a href="#" onClick={login}>Login</a></span>
                            <header>Sign Up</header>
                        </div>
                        <div className="two-forms">
                            <div className="input-box">
                                <input type="text" className="input-field" id="fname" placeholder="Firstname" />
                                <span id="register-fname-error" className="error"></span>
                            </div>
                            <div className="input-box">
                                <input type="text" className="input-field" id="lname" placeholder="Lastname" />
                                <span id="register-lname-error" className="error"></span>
                            </div>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" id="register-username" placeholder="UserName" />
                            <span id="register-username-error" className="error"></span>
                        </div>
                        <div className="input-box">
                            <input type="password" className="input-field" id="register-password" placeholder="Password" />
                            <span id="login-password-error" className="error"></span>
                        </div>
                        <div className="input-box">
                            <input type="submit" className="submit" value="Register" onClick={validateRegister} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Loginpage;
