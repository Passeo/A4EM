import "../styles/login.css";
import logo from "../assets/image/logo.svg";
import Login from "../components/auth/Login.tsx";
import {useLocation} from "react-router-dom";
import Register from "../components/auth/Register.tsx";




function authPanel() {

    const HeaderView = () => {
        const location:string = useLocation().pathname;
        return location === "/login" ? <Login/> : <Register/>
    }
    return (
        <>
            <section className="overflow-x-hidden">
                <div className="row">
                    <div className="col-12">
                        <div className="row-1 w-[90%] h-full"/>
                        <div className="row-2">
                            <img
                                src={logo}
                                alt="logo"
                                width="20%"
                                height="20%"
                                className="d-block"
                            />
                            {HeaderView()}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default authPanel;