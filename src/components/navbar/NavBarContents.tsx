import {v4 as uuidv4} from "uuid";

export const Contents: Array<{key:string, hrefLink: string, content: string }> =
    [   {key:uuidv4() ,hrefLink: "#", content:"Home"},
        {key:uuidv4() ,hrefLink: "#", content:"About Us"},
        {key:uuidv4() ,hrefLink: "#", content:"Explore"},
        {key:uuidv4() ,hrefLink: "#", content:"Create Your Event"}
    ]