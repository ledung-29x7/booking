import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import { useEffect, useState } from "react";
import * as apis from "../../../apis";
import { useNavigate } from "react-router-dom";
import InputRoom from "../../roomHotel/inputRoom";

function EditManagerHotel({ room }) {

    const [valueEdit,setValueEdit] = useState({
        
        name: "Khách sạn Thiên Đường",
        addressDTO: {
            addressLine: "ss",
            district: "",
            city: "",
            country: ""
        },
        roomDTOs: [
            {
                roomType: "SINGLE",
                roomCount: 20,
                pricePerNight: 150.0,
                services: null,
                image: null
            },
            {
                roomType: "DOUBLE",
                roomCount: 25,
                pricePerNight: 250.0,
                services: null,
                image: null
            },
            {
                roomType: "FAMILY",
                roomCount: 10,
                pricePerNight: 450.0,
                services: null,
                image: null
            }
        ],
        managerUsername: "",
        starRating: "FIVESTAR",
        image: null
    })

    const [editRoomDTO,setEditRoomDTO] = useState({});
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const {idEdit} = state;

    // as
    useEffect(()=> {
        setValueEdit(room)
    },[room])

    function HandleCloseEdit() {
        navigate("/manager/myHotels")
    }

    function handleChange (e){
        const { name, value } = e.target;
        if (name.includes('addressDTO')) {
            const addressName = name.split('.')[1]; // Lấy tên trường con (ví dụ: addressLine, district, city, country)
            setValueEdit({
                ...valueEdit,
                addressDTO: {
                    ...valueEdit.addressDTO,
                    [addressName]: value
                }
            });
        } 
        setValueEdit({...valueEdit,[e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        const FetchEdit = async() => {
            try {
                e.preventDefault();
                await apis.editRoom("users",idEdit,valueEdit)
                .then(res=>{
                    if(res.status === 200){
                        return(
                            setValueEdit(res.data),
                            dispatch(actions.ModalEdit(false)),
                            dispatch(actions.ModalSuccsessfull(true))
                        )
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        FetchEdit()
    }

    return (
        <div className="containerr">
            <div className="px-10 my-7 flex justify-between w-full h-14 font-bold text-xl border-b border-b-slate-400 ">
                <span>Edit User</span>
                <span onClick={HandleCloseEdit} className=" w-6 h-6 text-2xl text-slate-500 flex justify-center items-center text-center cursor-pointer "  >
                    &times;
                </span>
            </div>
            <div className=" px-10">
                {/* title edit */}
                <form onSubmit={handleSubmit} className=" my-10 flex flex-col gap-10">
                    {/* form edit */}
                    <div className=" flex flex-col gap-6">
                        <InputRoom
                            placeholder={"tên khách sạn"}
                            nameInput={"name"}
                            value={valueEdit?.name}
                            onChange={handleChange}
                            titleInput={"Tên Khách Sạn"}
                        />

                        <InputRoom
                            placeholder="số nhà/thôn/xóm"
                            value={valueEdit?.addressDTO?.addressLine}
                            nameInput="addressDTO.addressLine"
                            onChange={handleChange}  
                            titleInput={"Địa Chỉ Cụ Thể"}
                        />
                        <InputRoom
                            placeholder="Firt Name"
                            name="addressDTO.district"
                            value={valueEdit?.addressDTO?.district}
                            onChange={handleChange}
                            titleInput={""}
                        />

                        <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
                            <input
                                className="outline-none w-11/12 h-full"
                                placeholder="Last Name"
                                type="text"
                                name="addressDTO.city"
                                value={valueEdit?.addressDTO?.city}
                                onChange={handleChange}
                            />
                        </div>
                        
                        
                    </div>
                    <div className="border-gray-500 border text-right rounded-lg overflow-hidden h-9">
                        <button className=" bg-blue-500 h-full w-full font-bold text-white">Update</button>
                    </div>
                </form>{/* end form */}
                <div className=" h-14 flex justify-end items-center">
                    <button onClick={HandleCloseEdit} className=" rounded-md text-white bg-zinc-400  font-bold w-32 h-8 ">Cancel</button>
                </div>
            </div>
        </div>
    );
}
export default EditManagerHotel;