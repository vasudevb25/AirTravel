import React, { useState , useEffect    } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './login.css';


function Loginpage() {
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
            const res = await fetch("/api/unames");
            const unames = await res.json();

            if (!unames.includes(username)) {
                usernameError.textContent = "Username Does Not Exist";
                document.getElementById("register-username").value = '';
            } else {
                const passRes = await fetch("/api/checkpass", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ usern: username })
                });
                const sqpassword = await passRes.json();

                if (password !== sqpassword) {
                    passwordError.textContent = "Invalid Password";
                    document.getElementById("register-password").value = '';
                } else {
                    window.location.replace(username !== "admin" ? 'Main.html' : 'admin.html');
                }
            }
        }
    };

    const validateRegister = async () => {
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;

        const usernameError = document.getElementById("register-username-error");
        const passwordError = document.getElementById("register-password-error");
        const fnameError = document.getElementById("register-fname-error");
        const lnameError = document.getElementById("register-lname-error");

        usernameError.textContent = "";
        passwordError.textContent = "";
        fnameError.textContent = "";
        lnameError.textContent = "";

        if (fname === "") {
            fnameError.textContent = "First Name is required.";
        }
        if (lname === "") {
            lnameError.textContent = "Last Name is required.";
        }
        if (username === "") {
            usernameError.textContent = "Username is required.";
        } else if (username.length <= 5) {
            usernameError.textContent = "UserName is too Short";
        } else if (username.length > 20) {
            usernameError.textContent = "UserName is too Long";
        }
        if (password === "") {
            passwordError.textContent = "Password is required.";
        } else if (password.length <= 3) {
            passwordError.textContent = "Password is too short";
        } else if (password.length > 20) {
            passwordError.textContent = "Password is too Long";
        }

        if (username.length < 20 && password.length >= 3 && username.length > 3 && password.length < 20 && fname !== "" && lname !== "") {
            const res = await fetch("/api/unames");
            const unames = await res.json();

            if (unames.includes(username)) {
                usernameError.textContent = "Username Already Exists";
                document.getElementById("register-username").value = '';
            } else {
                await fetch("/api/adduser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ usern: username, firstn: fname, lastn: lname, pass: password })
                });
                window.location.replace('Main.html');
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
