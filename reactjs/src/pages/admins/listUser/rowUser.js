import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";

function RowUser({user}){
    
    const [,dispatch] = useStore();

    function HandleEdit(){
        dispatch(actions.ModalEdit(true));
        dispatch(actions.getIdEND(user.id));
    }
    return(
        <tbody className=" text-gray-600 h-11">
            <td className=" text-center">{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.role}</td>
            <td className=" text-center">
                <button onClick={HandleEdit} className="buttom_crud w-14 h-8 bg-amber-400 ">
                    <FontAwesomeIcon icon="fa-solid fa-pen" />
                </button>
            </td>
            <td className=" text-center">
                <button className=" buttom_crud w-14 h-8 bg-red-500">
                    <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                </button>
            </td>
        </tbody>
    );
}
export default RowUser;