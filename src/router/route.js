import Home from "../pages/home/home";
import Hotel from "../pages/hotel/hotel";
import ThingsToDo from "../pages/thingsToDo/thingsToDo";
import Admin from "../pages/admins/homeAdmin/admin";
import DefaultLayoutAdmin from "../layout/defaultLayout/defaultLayoutAdmin";
import ListUser from "../pages/admins/listUser/listUsers";
import ListHotel from "../pages/admins/listHotels/listHotel";
import ListBooking from "../pages/admins/listBookings/listBooking";

const publicRoute = [
    { path: '/', componet: Home },
    { path: '/hotel', componet: Hotel },
    { path: '/thingsToDo', componet: ThingsToDo },
    { path: '/admin', componet: Admin, layout: DefaultLayoutAdmin },
    { path: '/admin/listUser', componet: ListUser, layout: DefaultLayoutAdmin },
    { path: '/admin/listHotel', componet: ListHotel, layout: DefaultLayoutAdmin },
    { path: '/admin/listBooking', componet: ListBooking, layout: DefaultLayoutAdmin }
]

export default publicRoute;