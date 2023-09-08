import SubMenuItem from "./SubMenuItem.tsx";
import {Contents} from "../NavBarContents.tsx";

function SubMenu() {
    return (
        <>
            <div
                id="navbar"
                className={`absolute w-full text-center top-20 left-0 border-r bg-raspberryfull dark:bg-raspberry`}>
                <SubMenuItem contents={Contents} className={`dark:text-primary-light text-primary-dark mx-1 p-5 hover:cursor-pointer`}/>
            </div>
        </>
    )
}

export default SubMenu;