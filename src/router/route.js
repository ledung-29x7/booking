import Home from "../pages/home/home";
import Hotel from "../pages/hotel/hotel";
import ThingsToDo from "../pages/thingsToDo/thingsToDo";
import Wed from "../pages/thingsToDo/wed/wed";
const publicRoute = [
    { path: '/', componet: Home },
    { path: '/hotel', componet: Hotel },
    { path: '/thingsToDo', componet: ThingsToDo },
    { path: '/wed', componet: Wed }
]

export default publicRoute;