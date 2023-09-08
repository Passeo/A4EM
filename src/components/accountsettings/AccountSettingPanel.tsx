import NavBarMenu from "../navbar/NavBarMenu.tsx";
import LeftNavBarSetting from "./LeftNavBarSetting.tsx";
import RightNavBarSetting from "./RightNavBarSetting.tsx";

function AccountSettingPanel() {
    return (
        <>
            <NavBarMenu/>
            <div className="flex container">
                <LeftNavBarSetting/>
                <RightNavBarSetting/>
            </div>
        </>
    )
}

export default AccountSettingPanel;