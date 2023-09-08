import React, {useEffect, useState} from "react";
import axios from 'axios'
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import {useCookies} from "react-cookie";


function Login() {

    const [cookies, setCookie, removeCookie] = useCookies(['secretkey']);

    useEffect(() => {
        document.title = "Login"
        if (cookies.secretkey !== null) {
            removeCookie("secretkey");
        }
    }, [])

    const [usernameValue, setUsernameValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [eyeValue, setEyeValue] = useState<boolean>(false);
    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.id === 'email') {
            setUsernameValue(event.target.value)
        } else {
            setPasswordValue(event.target.value);
        }
    };

    const toggleShow = () => {
        setEyeValue(!eyeValue)
    }

    const eyeToggle = ():JSX.Element => {
        if(eyeValue){
            return <BsFillEyeFill/>
        } else {
            return <BsFillEyeSlashFill/>
        }
    }

    async function login(){
        if(!usernameValue || !passwordValue){
            return;
        }
        try{
            const login = await axios.post("http://localhost:8080/api/v1/auth/login", {
                "username": usernameValue,
                "password": passwordValue
            });
            setCookie("secretkey", login.data.token)
            window.location.href = "/";
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }


    return (
        <>
            <span className="text-pos text-login text-center block">
                Login as Member
            </span>
            <span className="text-pos text-username block">Username</span>
            <input
                type="email"
                className="d-block"
                id="email"
                placeholder="a4em@gmail.com"
                value={usernameValue}
                onChange={handleInputChange}
            />
            <span className="text-pos text-username block">Password</span>
            <div className="password-container  h-[60px]">
                <input type={eyeValue ? "text" : "password"} id="password" className="password-input" placeholder="Password" onChange={handleInputChange}/>
                <span id="togglePassword" className="password-toggle" onClick={toggleShow}>{eyeToggle()}
                </span>
            </div>
            <div className="block text-center forget-pass">
                <a href="#" id="forget-pass">
                    Forget Password?
                </a>
            </div>
            <button className="btn-login block" id="login" onClick={login}>
                Login
            </button>
            <div className="block text-center text-register">
                Didnt Have an Account yet? {" "}
                <a href="/register" id="register">Register Now</a>
            </div>
        </>
    );
}

export default Login;
