import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";

function RowRoom({id,nameRoom,singleRoomPrice,doubleRoomPrice}){

    const [,dispatch] = useStore();

    function HandleEdit(){
        dispatch(actions.ModalEdit(true))
    }

    return(
        <tbody className=" text-gray-600 h-11">
            <td className=" text-center">{id}</td>
            <td>{nameRoom}</td>
            <td>{singleRoomPrice}</td>
            <td>{doubleRoomPrice}</td>
            <td className=" text-center">
                <button onClick={HandleEdit} className="buttom_crud w-14 h-8 bg-amber-400 ">Edit</button>
            </td>
            <td className=" text-center">
                <button className=" buttom_crud w-14 h-8 bg-red-500">Delete</button>
            </td>
        </tbody>
    );
}
export default RowRoom;