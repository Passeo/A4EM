import {AiOutlineMenu} from "react-icons/ai";
import {useEffect, useRef, useState} from "react";
import SubMenu from "./pieces/SubMenu.tsx";
import AllIcon from "./pieces/AllIcon.tsx";
import NavBarItem from "./pieces/NavBarItem.tsx";
import {Contents} from "./NavBarContents.tsx";

function NavBarMenu() {

    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [navBarDown, setNavBarDown] = useState<boolean>(false);
    const ref = useRef<HTMLElement>(null)
    const setDark = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.theme = newDarkMode ? "dark" : "light";
    };


    useEffect(() => {
        document.title = "HomePage";

        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleNavBar = () => {
        setNavBarDown(!navBarDown);
    };

    useEffect(() => {
        const nav = document.querySelector("#navbar");

        if (nav) {
            if (navBarDown) {
                nav.classList.add("fixed")
                nav.classList.remove("hidden")

            } else {
                nav.classList.remove("fixed")
                nav.classList.add("hidden")
            }
        }
    }, [navBarDown]);

    return (
        <nav ref={ref} className="backdrop-filter backdrop-blur
         flex justify-between items-center h-20 mx-auto p-5 top-0 sticky z-10 bg-raspberryfull dark:bg-raspberry">
            <h1 className="dark:text-primary-light text-3xl font-bold text-primary-dark">
                A4EM
            </h1>
            <NavBarItem contents={Contents}>
                <AllIcon isDarkMode={darkMode} setDarkMode={setDark}/>
            </NavBarItem>
            <ul className="flex flex-row md:hidden">
                <li
                    onClick={toggleNavBar}
                    className="dark:text-primary-light text-primary-dark mx-3 my-2.5 hover:cursor-pointer"
                >
                    <AiOutlineMenu className="my-3 text-4xl hover:cursor-pointer"/>
                </li>
                <AllIcon isDarkMode={darkMode} setDarkMode={setDark}/>
            </ul>
            <SubMenu/>
        </nav>
    );
}

export default NavBarMenu;