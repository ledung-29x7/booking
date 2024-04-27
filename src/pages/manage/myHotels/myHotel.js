import { useEffect, useState } from "react";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import EditRoom from "./editRoom";
import RowRoom from "./rowRoom";
function MyHotel() {
    const [isShowEdit,setIsShowEdit] = useState(false);
    const [state,dispatch] = useStore();
    const {isEdit} = state;

    useEffect(() => {
        function OpenEdit(isEdit) {
            return(
                setIsShowEdit(isEdit)
            )
        }
        OpenEdit(isEdit)
    },[isEdit])

    // Open Add user
    

    // when click outside overlay 
    const handleClickOutsideModal = (event) => {
        var overlay = document.getElementById("overlay")
        if (event.target === overlay) {
            setIsShowEdit(false)
            dispatch(actions.ModalEdit(false))
        }
    };

    // 
    useEffect(() =>{
        window.addEventListener('click',handleClickOutsideModal)
    })

    return (
        <div className=" my-10 px-10">
            <div className=" containerr">
                <div className=" flex justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-4xl w-80">
                           MyHotels
                        </h4>
                        <img className="w-24" src="../icon/heading-border.png" alt="" />
                    </div>
                    {/* <div className="mx-10 ">
                        <button  className="buttom_crud w-20 h-8 bg-lime-600">Add Room</button>
                    </div> */}
                </div>
                <div className="frame mt-5 shadow_uslist relative">
                    <table className=" w-full shadow ">
                        <tr className="sticky top-0 bg-slate-200 h-12">
                            <th>ID</th>
                            <th>Name Room</th>
                            <th>singleRoomPrice</th>
                            <th>doubleRoomPrice</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        <RowRoom

                        />
                    </table>
                </div>
            </div>
            {/* modal edit */}
            {isShowEdit ?
                <div className="modal z-50">
                    <div className="flex w-full h-full">
                        <div id="overlay" className="modal_overlay"></div>
                        <div className="modal_body">
                            <EditRoom />
                        </div>
                    </div>
                </div>
            : null
            }
        </div>
    );
}
export default MyHotel

