import {Props} from "../../Utils.tsx";

function NavBarItemParent({children}: Props) {
    return <ul className="md:flex flex-row justify-between hidden">{children}</ul>
}

function NavBarItemContainer({children}: Props) {
    return (
        <li className="py-3 px-3 transition-[background] duration-500 ease-in-out rounded-full hover:bg-primary-dark/5 hover:dark:bg-primary-light/5 dark:text-primary-light text-primary-dark my-4 mx-1 hover:cursor-pointer ">
            {children}
        </li>
    )
}


function NavBarItem(props: Props) {

    const contents = props.contents;

    return (
        <NavBarItemParent>
            {contents?.map(({key, hrefLink, content}) => (
                <NavBarItemContainer>
                    <a className={props.className} key={key} href={hrefLink}>
                        {content}
                    </a>
                </NavBarItemContainer>
            ))}
            {props.children}
        </NavBarItemParent>
    )
}

export default NavBarItem;