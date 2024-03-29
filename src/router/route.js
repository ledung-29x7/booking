import Home from "../pages/home/home";
import Hotel from "../pages/hotel/hotel";
import ThingsToDo from "../pages/thingsToDo/thingsToDo";

const publicRoute = [
    {path:'/',componet:Home},
    {path:'/hotel',componet:Hotel},
    {path:'/thingsToDo',componet:ThingsToDo}
]

export default publicRoute;