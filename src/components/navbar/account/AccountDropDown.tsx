import AccountDropList from "./AccountDropList.tsx";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

function AccountDropDown({isDropDown}: { isDropDown: boolean }) {
    
    const [isLoggedIn, setLoggedIn] = useState<boolean>()
    const [cookies] = useCookies(['secretkey']);    
    useEffect(() => {
        if(cookies.secretkey) {
            setLoggedIn(true);
        }else {
            setLoggedIn(false)
        }
    }, [cookies.secretkey]);
    
    return (
        <>
            <div id="dropdown"
                 className={`${isDropDown ? "absolute" : "hidden"} bg-raspberryfull dark:bg-raspberry shadow w-44 right-2 top-20`}>
                <ul className="py-2 text-sm"
                    aria-labelledby="dropdownDefaultButton">
                    <AccountDropList>
                        Dashboard
                    </AccountDropList>
                    <AccountDropList>
                        Setting
                    </AccountDropList>
                    {isLoggedIn ? <AccountDropList className={`border-pale-sky-800 border-opacity-50`}>
                        Sign Out
                    </AccountDropList> : <AccountDropList className={`border-pale-sky-800 border-opacity-50`}>
                        Login</AccountDropList>}

                </ul>
            </div>

        </>
    )
}

export default AccountDropDown;