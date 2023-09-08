import {BiMoon} from "react-icons/bi";
import {MdSunny} from "react-icons/md";

interface props{
    isDarkMode:boolean,
    setDarkMode:() => void;
}

function DarkLightIcon(props:props) {
    return (
        <>
            <li
                onClick={props.setDarkMode}
                className="py-3 px-1 dark:text-primary-light text-primary-dark m-3 text-3xl hover:cursor-pointer"
            >
                {props.isDarkMode ? <BiMoon/> : <MdSunny/>}
            </li>

        </>
    )
}

export default DarkLightIcon;