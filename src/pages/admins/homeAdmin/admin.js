import AdminTask from "./adminTask";

function Admin(){
    
    return(
        <div className=" my-14 ">
            <div className=" containerr flex gap-12 h-full ">
                <AdminTask link={"/admin/listUser"} nameTask="User List" />
                <AdminTask link={"/admin/listHotel"} nameTask="List Hotel" />
                <AdminTask link={"/admin/listBooking"} nameTask="List Booking" />
            </div>
        </div>
    );
}
export default Admin;