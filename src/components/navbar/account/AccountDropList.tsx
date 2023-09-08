import {Props} from "../../Utils.tsx";

function AccountDropList({children, href = "#", className} : Props){
    return (
        <>
            <li>
                <a href={href}
                   className={`block
                           px-4
                           py-2
                           text-primary-dark
                           hover:text-primary-light
                           hover:bg-primary-dark
                           dark:text-primary-light
                           dark:hover:bg-primary-light
                           dark:hover:text-primary-dark
                           ${className}
                           `}>{children}</a>
            </li>
        </>
    )
}

export default AccountDropList;