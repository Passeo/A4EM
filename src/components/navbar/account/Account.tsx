import NavBarIcon from "../pieces/NavBarIcon.tsx";
import {CgProfile} from "react-icons/cg";
import {IoMdArrowDropdown} from "react-icons/io";
import AccountDropDown from "./AccountDropDown.tsx";
import {useComponentVisible} from "../../Utils.tsx";


function Account() {

    const {logoRef, ref, isComponentVisible} = useComponentVisible(false);

    return (
        <>
            <NavBarIcon>
                <div ref={logoRef}>
                    <button className="flex">
                        <CgProfile/>
                        <IoMdArrowDropdown/>
                    </button>
                </div>
            </NavBarIcon>
            <div ref={ref}>
                <AccountDropDown isDropDown={isComponentVisible}/>
            </div>
        </>
    )
}

export default Account;