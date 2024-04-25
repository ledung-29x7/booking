import Home from "../pages/home/home";
import Hotel from "../pages/hotel/hotel";
import ThingsToDo from "../pages/thingsToDo/thingsToDo";
import Admin from "../pages/admins/homeAdmin/admin";
import DefaultLayoutAdmin from "../layout/defaultLayout/defaultLayoutAdmin";
import ListUser from "../pages/admins/listUser/listUsers";
import ListHotel from "../pages/admins/listHotels/listHotel";
import ListBooking from "../pages/admins/listBookings/listBooking";
import Room from "../pages/roomHotel/room";
import ListRoom from "../pages/manage/listRooms/listRoom";
import HomeManage from "../pages/manage/homeManages/homeManage";
import MyHotel from "../pages/manage/myHotels/myHotel";
import ManagerBooking from "../pages/manage/manageBookings/manageBooking";
const publicRoute = [
    { path: '/', componet: Home },
    { path: '/hotel', componet: Hotel },
    { path: '/thingsToDo', componet: ThingsToDo },
    { path: '/admin', componet: Admin, layout: DefaultLayoutAdmin },
    { path: '/admin/listUser', componet: ListUser, layout: DefaultLayoutAdmin },
    { path: '/admin/listHotel', componet: ListHotel, layout: DefaultLayoutAdmin },
    { path: '/admin/listBooking', componet: ListBooking, layout: DefaultLayoutAdmin },
    { path: '/hotel/room', componet: Room },
    { path: '/manage/listRooms', componet: ListRoom, layout: DefaultLayoutAdmin },
    { path: '/manage', componet: HomeManage, layout:DefaultLayoutAdmin },
    {path:'/manage/myHotels',componet:MyHotel,layout:DefaultLayoutAdmin},
    {path:'/manage/manageBookings',componet:ManagerBooking,layout:DefaultLayoutAdmin}


]

export default publicRoute;