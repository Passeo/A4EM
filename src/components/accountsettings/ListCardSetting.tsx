import "../../styles/profile.css"
import profile from "../../assets/person/example.png"

function ListCardSetting() {
    return (
        <>
            <div className="flex m-5 p-1.5 w-[80%] justify-center">
                <div className="profile">
                    <img className="" alt="profile" src={profile}/>
                </div>
            </div>
        </>
    )
}

export default ListCardSetting;