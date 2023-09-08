import {Props} from "../Utils.tsx";

function FooterItem({contents ,className} : Props) {
    return (
        <>
            {contents?.map(({key, hrefLink, content}) => (
                <li key={key}>
                    <a className={className} href={hrefLink}>
                        {content}
                    </a>
                </li>
            ))}
        </>
    )
}

export default FooterItem;