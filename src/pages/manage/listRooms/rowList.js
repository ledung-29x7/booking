import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";

function RowList({room}){
    
    const [,dispatch] = useStore();

   

    return(
        <tbody className=" text-gray-600 h-11">
            <td className=" text-center">{room.id}</td>
            <td>{room.HotelName}</td>
            <td>{room.AddressLine}</td>
            <td>{room.Country}</td>
            <td>{room.SingleRoomCount}</td>
            <td>{room.SingleRoomPrice}</td>
            <td>{room.DoubleRoomCount}</td>
            <td>{room.DoubleRoomPrice}</td>
            <td className=" text-center">
                <button className=" buttom_crud w-14 h-8 bg-red-500">
                    <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                </button>
            </td>
        </tbody>
    );
}
export default RowList;