import card from "../../../../assets/image/homepage2-card-background.svg";
import rocket from "../../../../assets/image/rocket.svg";
import check from "../../../../assets/image/check-text.svg";
import hand from "../../../../assets/image/hand-write.svg";
import globe from "../../../../assets/image/globe.svg";

function HomePage2Section2() {
    return (
        <>
            <div className="hidden md:flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
                <div className="md:mt-10 relative">
                    <img draggable={false} loading="lazy" className="opacity-50 fill-[#3d3fd6] absolute md:block hidden" alt="card1" src={card} />
                    <img draggable={false} loading="lazy" className="md:block hidden" alt="rocket" src={rocket} />
                </div>
                <div className="md:mt-16 mx-5 relative">
                    <img draggable={false} loading="lazy" className="opacity-50 fill-[#3d3fd6] absolute md:block hidden" alt="card2" src={card} />
                    <img draggable={false} loading="lazy" className="mx-5 md:block hidden" alt="check" src={check} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 mt-6 md:mt-0">
                <div className="md:mt-10 relative">
                    <img draggable={false} loading="lazy" className="opacity-50 fill-[#3d3fd6] absolute md:block hidden" alt="card3" src={card} />
                    <img draggable={false} loading="lazy" className="md:block hidden" alt="hand" src={hand} />
                </div>
                <div className="md:mt-16 mx-5 relative">
                    <img draggable={false} loading="lazy" className="opacity-50 fill-[#3d3fd6] absolute md:block hidden" alt="card4" src={card} />
                    <img draggable={false} loading="lazy" className="mx-5 md:block hidden" alt="globe" src={globe} />
                </div>
            </div>
        </>
    )
}

export default HomePage2Section2