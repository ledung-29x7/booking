import { useEffect, useState } from "react";
import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import * as apis from "../../../apis"
import RowList from "./rowList";

function ListUser() {
    const navigate = useNavigate();
    const [rooms,setRooms] = useState([]);
    const [editRoom,setEditRoom] = useState({});
    const [state, dispatch] = useStore();   
    const { idEdit,getToken } = state;

    // Read apis
    console.log(getToken)
    useEffect(() => {
        const FetchData = async() => {
            try {
                const response = await apis.getManager("hotels","eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyQGdtYWlsLmNvbSIsInJvbGUiOiJST0xFX01BTkFHRVIiLCJpYXQiOjE3MTU1OTQ1MjUsImV4cCI6MTcxNTU5ODEyNX0.GGM7dcQrJMxMvzIG3FmMranNoU-_YzbNP7yqIAVZQnE")
                setRooms(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchData()
    },[])

    useEffect(() => {
        const GetEdit = (id) => {
            if(id != null){
                var getIdEND = rooms.find(ob => ob.id ===id) 
            }
            setEditRoom(getIdEND)
        }
        GetEdit(idEdit)
    },[idEdit])

    return (
        <div className=" my-10 px-10">
            <div className=" containerr">
                <div className=" flex justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-4xl w-80">
                        Add New Hotel                        </h4>
                        <img className="w-24" src="../icon/heading-border.png" alt="" />
                    </div>
                    <div className="mx-10 bg-lime-600 w-32 h-10 flex justify-center items-center gap-3 rounded-md">
                        <FontAwesomeIcon style={{color:"white"}} icon="fa-solid fa-plus"/>
                        <button className="buttom_crud ">Add hotel</button>
                    </div>
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