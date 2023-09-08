import DarkLightIcon from "./DarkLightIcon.tsx";
import NavBarIcon from "./NavBarIcon.tsx";
import {AiFillGithub} from "react-icons/ai";
import Account from "../account/Account.tsx";

interface Props {
    isDarkMode: boolean,
    setDarkMode: () => void;
}


function AllIcon({isDarkMode, setDarkMode}: Props) {
    return (
        <>
            <DarkLightIcon isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
            <NavBarIcon>
                <a href="#">
                    <AiFillGithub/>
                </a>
            </NavBarIcon>
            <Account/>
        </>
    )
}

export default AllIcon;