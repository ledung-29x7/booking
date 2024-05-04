import Home from "../pages/home/home";
import Hotel from "../pages/hotel/hotel";
import ThingsToDo from "../pages/thingsToDo/thingsToDo";
import Admin from "../pages/admins/homeAdmin/admin";
import DefaultLayoutAdmin from "../layout/defaultLayout/defaultLayoutAdmin";
import ListUser from "../pages/admins/listUser/listUsers";
import ListHotel from "../pages/admins/listHotels/listHotel";
import ListBooking from "../pages/admins/listBookings/listBooking";
import Room from "../pages/hotel/roomHotel";
import HaLongresorts from "../pages/thingsToDo/details/halongresorts";

const publicRoute = [
    { path: '/', componet: Home },
    { path: '/hotel', componet: Hotel },
    { path: '/thingsToDo', componet: ThingsToDo },
    { path: '/admin', componet: Admin, layout: DefaultLayoutAdmin },
    { path: '/admin/listUser', componet: ListUser, layout: DefaultLayoutAdmin },
    { path: '/admin/listHotel', componet: ListHotel, layout: DefaultLayoutAdmin },
    { path: '/admin/listBooking', componet: ListBooking, layout: DefaultLayoutAdmin },
<<<<<<< Updated upstream
    { path: '/admin/listBooking', componet: ListBooking, layout: DefaultLayoutAdmin },
    {path: '/hotel/room', componet: Room },
    {path: '/thingsToDo/halong', componet: HaLongresorts}
=======
    { path: '/hotel/room', componet: Room },
    { path: '/manage/listRooms', componet: ListRoom, layout: DefaultLayoutAdmin },
    { path: '/manage', componet: HomeManage, layout: DefaultLayoutAdmin },
    { path: '/manage/myHotels', componet: MyHotel, layout: DefaultLayoutAdmin },
    { path: '/manage/manageBookings', componet: ManagerBooking, layout: DefaultLayoutAdmin },
    { path: '/pay', componet: Pay, layout: DefaultLayoutAdmin },
    { path: '/bookingConfirmation', componet: BookingComfirmation, layout: DefaultLayoutAdmin },
    { path: '/bookings', componet: MyBookings },
    { path: '/user/signin', componet: Login, layout: DefaultLayoutLogin },
    { path: '/user/signup', componet: SignUp, layout: DefaultLayoutLogin },
    { path: '/thingsToDo/halong', componet: HaLongresorts}
>>>>>>> Stashed changes
]

export default publicRoute;