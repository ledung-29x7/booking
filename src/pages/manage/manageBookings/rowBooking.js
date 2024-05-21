import { useNavigate } from "react-router-dom";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";

function RowBooking({booking}){

    const [,dispatch] = useStore();

    const handleOpenDetail = () =>{
        dispatch(actions.ModalEdit(true))
    }
    console.log(booking)
    return(
        <tbody className=" text-gray-600 h-11">
            <td className=" text-center">{booking?.id}</td>
            <td>{booking?.customerName}</td>
            <td>{booking?.hotelName}</td>
            <td>{booking?.bookingDate}</td>
            <td>{booking?.checkinDate}</td>
            <td>{booking?.checkoutDate}</td>
            <td>{booking?.totalPrice}</td>
            <td className=" text-center">
                <button onClick={handleOpenDetail}  className="buttom_crud w-14 h-8 bg-blue-500 ">Details</button>
            </td>
        </tbody>
    );
}
export default RowBooking;