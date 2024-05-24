import { useStore } from "../../../store/contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actions } from "../../../store/action";
import { useNavigate } from "react-router-dom";


function RowRoom({ room}) {

    const [, dispatch] = useStore();
    const navigate = useNavigate();

    function HandleEdit() {
        navigate(`/manager/myHotels/edit/${room.id}`)
        dispatch(actions.getIdEND(room.id));
    }

    const handleDelete = () => {
        dispatch(actions.ModalDelete(true))
        dispatch(actions.getIdEND(room?.id))
    }

    return (
        <tbody className=" text-gray-600 h-11">
            <td className=" text-center">{room.id}</td>
            <td>{room.name}</td>
            <td>{room.addressDTO?.addressLine}</td>
            <td>{room.roomDTOs?.roomCount}</td>
            <td className=" text-center">
                <button className=" buttom_crud w-14 h-8 text-yellow-500"
                    onClick={HandleEdit}
                >
                    <FontAwesomeIcon style={{ color: "#EFE616" }} icon="fa-solid fa-pen" />
                </button>
            </td>
            <td className=" text-center">
                <button className=" buttom_crud w-14 h-8 "
                    onClick={handleDelete}
                >
                    <FontAwesomeIcon style={{ color: "#F44F44" }} icon="fa-solid fa-trash-can" />
                </button>
            </td>
        </tbody>
    );
}
export default RowRoom;