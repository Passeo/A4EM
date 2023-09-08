import {Props} from "../../Utils.tsx";

function SubMenuItem(props: Props) {
    return (
        <ul className={`flex flex-col md:hidden`}>
            {props.contents?.map(content => (
                <li key={content.key} className={props.className}><a href={props.href}>
                    {content.content}</a></li>
            ))}
        </ul>

    )
}

export default SubMenuItem;