import {Props} from "../../Utils.tsx";

function NavBarIcon({children} : Props) {
    return (
        <>
            <li className="py-3 px-1 dark:text-primary-light text-primary-dark m-3 text-3xl duration-200 hover:cursor-pointer mx-2 flex">
                {children}
            </li>
        </>
    )
}

export default NavBarIcon;