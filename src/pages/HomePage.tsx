import NavBarMenu from "../components/navbar/NavBarMenu.tsx";
import {useEffect} from "react";
import HomePage1 from "../components/homepage/HomePage1.tsx";
import HomePage2 from "../components/homepage/HomePage2.tsx";
import Footer from "../components/footer/Footer.tsx";



function HomePage() {


    //
    // const [cookies] = useCookies(['secretkey']);
    //
    // async function verifyKey(token:string):Promise<string> {
    //
    //     const post  = await axios.post("http://localhost:8080/api/v1/auth/verify", {}, {
    //         headers : {
    //             Authorization : `Bearer ${token}`
    //         }
    //     })
    //     return post.data.username;
    // }
    //
    // useEffect(() => {
    //     const secretKey:string = cookies.secretkey;
    //     if(!secretKey){
    //         // window.location.href = "/login"
    //     }
    //     verifyKey(secretKey).then((username) => {
    //         console.log(username)
    //     }).catch(() => console.log("a"))
    // })
    //
    // async function logoutHandler() {
    //     try{
    //         await axios.post("http://localhost:8080/api/v1/auth/logout", {}, {
    //             headers: {
    //                 Authorization : `Bearer ${cookies.secretkey}`
    //             }
    //         })
    //         window.location.href = "/login"
    //     }catch (e){
    //         console.log("Cannot Log out", e)
    //     }
    // }

    useEffect(() => {
        document.body.className = "dark:bg-primary-dark bg-gradient-to-r from-raspberry to-bluewhite transition-[background] duration-700 ease-in-out"
    })

    return (
        <>
            <NavBarMenu/>
            <HomePage1/>
            <HomePage2/>
            <Footer/>
        </>
    )
}

export default HomePage