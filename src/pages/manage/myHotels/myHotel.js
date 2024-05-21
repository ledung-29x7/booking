import { useEffect, useState } from "react";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import * as apis from "../../../apis"
import RowList from "./rowRoom";


function ListUser() {
    const navigate = useNavigate();
    const [rooms,setRooms] = useState([]);
    const [state, dispatch] = useStore();   
    

    // Read apis
    
    useEffect(() => {
        const FetchData = async() => {
            try {
                const response = await apis.getManager("hotels")
                setRooms(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchData()
    },[])


    return (
        <div className=" my-10 px-10">
            <div className=" containerr">
                <div className=" flex justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-4xl w-80">
                        Thêm khách sạn mới                      </h4>
                        <img className="w-24" src="../icon/heading-border.png" alt="" />
                    </div>
                    <button className="mx-10 bg-lime-600 w-32 h-10 flex justify-center items-center gap-3 rounded-md"
                        onClick={()=>navigate('/manager/myHotel/add')}
                    >
                        <FontAwesomeIcon style={{color:"white"}} icon="fa-solid fa-plus"/>
                        <span className="buttom_crud ">Thêm khách sạn</span>
                    </button>
                </div>
                <div>
                    
                </div>
                <div className=" mt-4">
                    <table className="  w-full shadow ">
                        <tr className="bg-slate-200 h-12">
                            <th>ID</th>
                            <th>Tên Khách Sạn</th>
                            <th>Địa Chỉ</th>
                            <th>Sô Lượng Phòng</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {rooms.map((us)=>(
                            <RowList
                            key={us.id}
                            room={us}
                        />
                        ))}
                    </table>
                </div>
            </div>
            {/* modal add */}
        </div>
    );
}
export default ListUser;