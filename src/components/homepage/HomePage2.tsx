import HomePage2Section1 from "./sectionhomepage/homepage2/HomePage2Section1.tsx";
import HomePage2Section2 from "./sectionhomepage/homepage2/HomePage2Section2.tsx";
import HomePage2Section3 from "./sectionhomepage/homepage2/HomePage2Section3.tsx";


function HomePage2() {
    return (
        <>
            <div className="md:h-[100vh] h-full flex flex-col md:flex-row">
                <div className="w-[100%]">
                    <HomePage2Section1/>
                </div>
                <div className="w-[100%] md:my-16">
                    <HomePage2Section2/>
                </div>
                <div className="w-[100%]">
                    <HomePage2Section3/>
                </div>
            </div>
        </>
    )
}

export default HomePage2;