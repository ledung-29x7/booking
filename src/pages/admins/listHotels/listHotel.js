import { useEffect, useState } from "react";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import EditHotel from "./editHotel";
import RowHotel from "./rowHotel";

function ListHotel() {
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
                            Hotel List
                        </h4>
                        <img className="w-24" src="../icon/heading-border.png" alt="" />
                    </div>
                    <div className="mx-10 ">
                        <button  className="buttom_crud w-20 h-8 bg-lime-600">Add Hotel</button>
                    </div>
                </div>
                <div className="frame mt-5 shadow_uslist relative">
                    <table className=" w-full shadow ">
                        <tr className="sticky top-0 bg-slate-200 h-12">
                            <th>ID</th>
                            <th>Name Hotel</th>
                            <th>UserName Hotel</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        <RowHotel

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
                            <EditHotel />
                        </div>
                    </div>
                </div>
            : null
            }
        </div>
    );
}
export default ListHotel;