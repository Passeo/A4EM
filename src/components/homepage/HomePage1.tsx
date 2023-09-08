import HomepageCharacterComponent from "../../assets/image/HomepageCharacterComponent.svg"
function HomePage1() {


    return (
        <>
            <div className="flex h-full flex-col-reverse md:flex-row">
                <div
                    className="my-28 font-bold ml-10 text-greyDarkBlue dark:text-primary-light h-[55%]
                    w-full md:w-[45%]">
                    <div className="text-[50px]">
                        Fast service, better performance high quality event management
                    </div>
                    <div className="my-4 mx-2">
                        Elevating Excellence in Event Management: Unmatched Performance, Swift Service, and Top-notch
                        Quality.
                    </div>
                    <button
                        className="my-12 bg-raspberry text-white font-bold w-44 py-5 px-10 rounded-full">Get
                        Started
                    </button>
                </div>
                <div className="md:ml-28 mb-10">
                    <img src={HomepageCharacterComponent} width="524px"
                         height="505px"
                         alt="Test" draggable={false}/>
                </div>
            </div>
        </>
    )
}

export default HomePage1