import MenuItem from "./menuItem";

function SiderbarManager() {
    return(
        <div>
            <MenuItem title={"/manager/myHotels"} icon={"fa-solid fa-hotel"} to={"Quản lý khách sạn"} />
            <MenuItem title={"/manager/manageBookings"} icon={"fa-solid fa-calendar-days"} to={"Danh sách bookings"} />
        </div>
    );
}
export default SiderbarManager;