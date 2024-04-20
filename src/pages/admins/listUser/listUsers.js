import { useEffect, useState } from "react";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import * as apis from "../../../apis"
import EditUser from "./editUser";
import RowUser from "./rowUser";
import AddUser from "./addUser";

function ListUser() {
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [isShowAdd, setisShowAdd] = useState(false);
    const [users,setUser] = useState([]);
    const [editUs,setEditUs] = useState({});
    const [state, dispatch] = useStore();
    const { isEdit,isAdd,id } = state;

    // Read apis
    useEffect(() => {
        const FetchData = async() => {
            const response = await apis.getUser();
            setUser(response.data)
        }
        FetchData();
    },[id])
    useEffect(() => {
        const GetEdit = (id) => {
            if(id != null){
                var getIdEND = users.filter(ob => ob.id ===id) 
            }
            setEditUs(getIdEND)
        }
        GetEdit(id)
    },[id])

    // open form Edit
    useEffect(() => {
        function OpenEdit(isEdit) {
            return (
                setIsShowEdit(isEdit)
            );
        }
        OpenEdit(isEdit)
    }, [isEdit])

    // Open form Add
    function HandleOpenAdd() {
        dispatch(actions.ModalAdd(true))
    }

    useEffect(() => {
        function OpenAdd (isAdd) {
            return(
                setisShowAdd(isAdd)
            );
        }
        OpenAdd(isAdd)
    },[isAdd])

    // when click 
    const handleClickOutsideModal = (event) => {
        var overlay = document.getElementById("overlay")
        if (event.target === overlay) {
            setIsShowEdit(false)
            setisShowAdd(false)
            dispatch(actions.ModalEdit(false))
            dispatch(actions.ModalAdd(false))
        }
    };

    // 
    useEffect(() => {
        window.addEventListener('click', handleClickOutsideModal)
    })

    return (
        <div className=" my-10 px-10">
            <div className=" containerr">
                <div className=" flex justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-4xl w-80">
                            User List
                        </h4>
                        <img className="w-24" src="../icon/heading-border.png" alt="" />
                    </div>
                    <div className="mx-10 ">
                        <button onClick={HandleOpenAdd} className="buttom_crud w-20 h-8 bg-lime-600">Add User</button>
                    </div>
                </div>
                <div className="frame mt-5 shadow_uslist relative">
                    <table className=" w-full shadow ">
                        <tr className="sticky top-0 bg-slate-200 h-12">
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Firt Name</th>
                            <th>Last Name</th>
                            <th>Role</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {users.map((us)=>(
                            <RowUser
                            key={us.id}
                            user={us}
                        />
                        
                        ))}
                    </table>
                </div>
            </div>
            {/* modal edit */}
            {isShowEdit ?
                <div className="modal z-50">
                    <div className="flex w-full h-full">
                        <div id="overlay" className="modal_overlay"></div>
                        <div className="modal_body">
                            <EditUser user={editUs} />
                        </div>
                    </div>
                </div>
                : null
            }

            {/* modal add */}
            {isShowAdd ?
                <div className="modal z-50">
                    <div className="flex w-full h-full">
                        <div id="overlay" className="modal_overlay"></div>
                        <div className="modal_body">
                            <AddUser />
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    );
}
export default ListUser;