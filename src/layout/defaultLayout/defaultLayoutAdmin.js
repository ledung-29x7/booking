import HeaderAdmin from "../header/headerAdmin";
import SiderbarManager from "../siderbar/siderbarManager";

function DefaultLayoutAdmin({ children }) {
    return (
        <div className=" flex flex-col overflow-y-hidden">
            <div className="header-wapper ">
                <HeaderAdmin />
            </div>
            <div className="w-ful flex relative siderbar ">
                <div className="flex-1 sticky top-0 left-0  ">
                    <SiderbarManager />
                </div>
                <div className="flex-[3_1_0%] overflow-y-scroll ">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default DefaultLayoutAdmin;