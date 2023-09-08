import "../../styles/login.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";

function Register() {

    const [cookies, setCookie, removeCookie] = useCookies(['secretkey']);
    const [eyeValue, setEyeValue] = useState<boolean>(false);
    const [confirmEyeValue, setConfirmEyeValue] = useState<boolean>(false);
    enum propertyID {
        username = "username",
        email = "email",
        password = "password",
        confirmPassword = "confirm-password"
    }

    useEffect(() => {
        document.title = "Register"
        if (cookies.secretkey !== null) {
            removeCookie("secretkey");
        }
    })

    const [usernameValue, setUsernameValue] = useState<string>("");
    const [emailValue, setEmailValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("");
    const [clicked, setClicked] = useState<boolean>(false);

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const id: string = target.id;
        switch (id) {
            case propertyID.username:
                setUsernameValue(target.value)
                break;
            case propertyID.email:
                setEmailValue(target.value)
                break;
            case propertyID.password:
                setPasswordValue(target.value)
                break;
            case propertyID.confirmPassword:
                setConfirmPasswordValue(target.value)
                break;
            default:
                break;
        }
    };

    const register = async () => {
        if (clicked) {
            return;
        }

        if (isPasswordNotSame()) {
            return;
        }

        setClicked(true);

        // await Customer.getCustomerByUsername(usernameValue).then((customer) => {
        //     if(customer){
        //         setClicked(false)
        //         return;
        //     }
        // })

        const register = await axios.post('http://localhost:8080/api/v1/auth/register', {
            "username": usernameValue,
            "email": emailValue,
            "password": passwordValue
        });
        setCookie("secretkey", register.data.token);

        window.location.href = "/"
    };

    function passwordSameLogic(): JSX.Element | null {
        return isPasswordNotSame() ? <sup className="text-danger">*Password Must Be Same</sup> : null
    }

    function isPasswordNotSame(): boolean {
        return confirmPasswordValue !== passwordValue
    }

    return (
        <>
            <h1 className="text-center text-2xl">Register</h1>
            <div className="flex flex-col my-0">
                <label className="block mx-11">Username</label>
                <input onChange={handleInputChange} id="username" type="text" placeholder="Example: a4em123"/>
            </div>
            <div className="my-1">
                <label className="block mx-11">Email</label>
                <input onChange={handleInputChange} id="email" type="text" placeholder="Example: a4em@gmail.com"/>
            </div>
            <span className="text-pos text-username block">Password</span>
            <div className="password-container  h-[60px]">
                <input onInput={handleInputChange} type={eyeValue ? "text" : "password"} id="password" className="password-input" placeholder="Password" onChange={handleInputChange}/>
                <span id="togglePassword" className="password-toggle" onClick={() => setEyeValue(!eyeValue)}>{eyeValue ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
                </span>
            </div>
            <span className="text-pos text-username block">Confirm Password{passwordSameLogic()}</span>
            <div className="password-container  h-[60px]">
                <input onInput={handleInputChange} type={confirmEyeValue ? "text" : "password"} id="confirm-password" className="password-input" placeholder="Confirm Password" onChange={handleInputChange}/>
                <span id="togglePassword" className="password-toggle" onClick={() => setConfirmEyeValue(!confirmEyeValue)}>{confirmEyeValue ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
                </span>
            </div>
            <div className="my-4 text-center ">
                <button onClick={register} className="btn-login">Register</button>
            </div>
            <div className="my-4 text-center">
                Already Have an Account ? {" "}
                <a href="/login" id="register">Login Now</a>
            </div>
        </>
    )
}

export default Register;