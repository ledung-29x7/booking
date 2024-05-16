import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";

function RowList({manage}){
    
    const [,dispatch] = useStore();

   

    return(
        <tbody className=" text-gray-600 h-11">
            <td className=" text-center">{manage.id}</td>
            <td>{manage.HotelName}</td>
            <td>{manage.AddressLine}</td>
            <td>{manage.Country}</td>
            <td>{manage.SingleRoomCount}</td>
            <td>{manage.SingleRoomPrice}</td>
            <td>{manage.DoubleRoomCount}</td>
            <td>{manage.DoubleRoomPrice}</td>
            <td className=" text-center">
                <button className=" buttom_crud w-14 h-8 bg-red-500">
                    <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                </button>
            </td>
        </tbody>
    );
}
export default RowList;