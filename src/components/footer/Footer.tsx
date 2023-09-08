import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import FooterItem from "./FooterItem.tsx";
function Footer() {

    const a4emContents:Array<{key:string, hrefLink: string, content: string }> = [
        {key:uuidv4(), hrefLink:"#", content:"About A4EM"},
        {key:uuidv4(), hrefLink:"#", content:"Terms and conditions"},
        {key:uuidv4(), hrefLink:"#", content:"Privacy Policy"},
        {key:uuidv4(), hrefLink:"#", content:"Blog"},
        {key:uuidv4(), hrefLink:"#", content:"Career"},
        ]

    const community:Array<{key:string, hrefLink: string, content: string }> = [
        {key:uuidv4(), hrefLink:"#", content:"Meet the Team"},
        {key:uuidv4(), hrefLink:"#", content:"Acknowledgements"},
    ]

    const services:Array<{key:string, hrefLink: string, content: string }> = [
        {key:uuidv4(), hrefLink:"#", content:"Event Management"},
        {key:uuidv4(), hrefLink:"#", content:"Event Planning"}
    ]


    return (
        <>
            <footer className="bg-footer py-10 text-primary-dark dark:text-primary-light">
                <div className="container mx-auto px-4 flex flex-col md:flex-row">
                    <div className="md:w-1/3 mr-16">
                        <h2 className="text-xl font-semibold mb-4">Butuh Bantuan ?</h2>
                        <p className="w-[70%]">Kamu bisa menghubungi layanan pelanggan kami di:</p>
                        <div className="flex w-fit my-5 text-primary-dark dark:text-primary-light dark:hover:text-primary-dark text-xl transition-colors duration-300">
                            <p className="pr-3 pt-1"><FaWhatsapp/></p>
                            <p className="">
                                0851-5535-5221</p>
                        </div>
                        <div className="flex w-fit my-5 text-primary-dark dark:text-primary-light dark:hover:text-primary-dark text-xl transition-colors duration-300">
                            <p className="pr-3 pt-1"><MdEmail/></p>
                            <p className="">
                                rakhasyahputra96@gmail.com</p>
                        </div>
                    </div>
                    <div className="md:w-1/3 md:mt-0 mt-6">
                        <h2 className="text-xl font-semibold mb-4">A4EM</h2>
                        <ul className="space-y-2">
                            <FooterItem className={`text-primary-dark dark:text-primary-light dark:hover:text-primary-dark  transition-colors duration-300`} contents={a4emContents}/>
                        </ul>
                    </div>
                    <div className="md:w-1/3 md:mt-0 mt-6">
                        <h2 className="text-xl font-semibold mb-4">Community</h2>
                        <ul className="space-y-2">
                            <FooterItem className={`text-primary-dark dark:text-primary-light dark:hover:text-primary-dark  transition-colors duration-300`} contents={community}/>
                        </ul>
                    </div>
                    <div className="md:w-1/3 md:mt-0 mt-6">
                        <h2 className="text-xl font-semibold mb-4">Services</h2>
                        <ul className="space-y-2">
                            <FooterItem className={`text-primary-dark dark:text-primary-light dark:hover:text-primary-dark  transition-colors duration-300`} contents={services}/>
                        </ul>
                    </div>
                    <div className="md:w-1/3 md:mt-0 mt-6">
                        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4 md:justify-start justify-center">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FaFacebook
                                    className="text-primary-dark dark:text-primary-light dark:hover:text-primary-dark text-xl transition-colors duration-300"/>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FaTwitter
                                    className="text-primary-dark dark:text-primary-light dark:hover:text-primary-dark text-xl transition-colors duration-300"/>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FaInstagram
                                    className="text-primary-dark dark:text-primary-light dark:hover:text-primary-dark text-xl transition-colors duration-300"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <p>&copy; 2023 A4EM. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer