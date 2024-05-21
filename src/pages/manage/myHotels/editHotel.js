import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import { useEffect, useState } from "react";
import * as apis from "../../../apis";
import { useNavigate } from "react-router-dom";
import InputRoom from "../../roomHotel/inputRoom";

function EditManagerHotel() {

    const [editRoomDTO, setEditRoomDTO] = useState({});
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const [editRoom, setEditRoom] = useState({});
    const [rooms, setRooms] = useState([]);
    const { idEdit } = state;
    const [imageInfo, setImageInfo] = useState({
        id: '',
        image: '',
        name: '',
        type: ''
    });
    const [valueEdit, setValueEdit] = useState({
        ...rooms,
        name: "",
        addressDTO: {
            id: 0,
            addressLine: "",
            district: "",
            city: "",
            country: ""
        },
        imageDTOs:[]
    })
    console.log(valueEdit)

    // call api
    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await apis.getManager("hotels")
                setRooms(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchData()
    }, [])


    // get hotel edit 
    useEffect(() => {
        const GetEdit = (id) => {
            if (id != null) {
                const getIdEND = rooms?.find(ob => ob.id === id)
                console.log(getIdEND)
                setEditRoom(getIdEND)
            }
        }
        GetEdit(idEdit)
    }, [rooms])

    // gán cho valueedit
    useEffect(() => {
        setValueEdit(editRoom)
    }, [editRoom])

    function HandleCloseEdit() {
        navigate("/manager/myHotels")
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        
        setImageInfo((prevInfo) => ({
            ...prevInfo,
            name: file.name,
            type: file.type
        }));
    };

    // hand Change
    function handleChange(e) {
        const { name, file, value } = e.target;
        // Nếu trường đang thay đổi thuộc addressDTO
        if (name.includes('addressDTO')) {
            const addressName = name.split('.')[1]; // Lấy tên trường con (ví dụ: addressLine, district, city, country)
            setValueEdit({
                ...valueEdit,
                addressDTO: {
                    ...valueEdit.addressDTO,
                    [addressName]: value
                }
            });
        } else {
            setValueEdit({
                ...valueEdit,
                [name]: value
            });
        }
    }

    // Submit
    function handleSubmit(e) {
        const FetchEdit = async () => {
            try {
                e.preventDefault();
                await apis.editRoom("users", idEdit, valueEdit)
                    .then(res => {
                        if (res.status === 200) {
                            return (
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
                <span>Người dùng biên tập</span>
                <span onClick={HandleCloseEdit} className=" w-6 h-6 text-2xl text-slate-500 flex justify-center items-center text-center cursor-pointer "  >
                    &times;
                </span>
            </div>
            <div className=" px-10">
                {/* title edit */}
                <form onSubmit={handleSubmit} className=" my-10 flex flex-col gap-10">
                    {/* form edit */}
                    <div className=" flex flex-col gap-6">
                        <input

                            type="file"
                            placeholder={"tên khách sạn"}
                            name={"image"}
                            value={valueEdit?.image}
                            onChange={handleFileChange}
                        />
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
                            placeholder="District"
                            name="addressDTO.district"
                            value={valueEdit?.addressDTO?.district}
                            onChange={handleChange}
                            titleInput={"district"}
                        />

                        <InputRoom
                            placeholder="City"
                            name="addressDTO.city"
                            value={valueEdit?.addressDTO?.city}
                            onChange={handleChange}
                            titleInput={"City"}
                        />

                        <InputRoom
                            placeholder="Country"
                            name="addressDTO.country"
                            value={valueEdit?.addressDTO?.country}
                            onChange={handleChange}
                            titleInput={"Country"}
                        />

                    </div>
                    <div className="border-gray-500 border text-right rounded-lg overflow-hidden h-9">
                        <button className=" bg-blue-500 h-full w-full font-bold text-white">Cập nhật</button>
                    </div>
                </form>{/* end form */}
                <div className=" h-14 flex justify-end items-center">
                    <button onClick={HandleCloseEdit} className=" rounded-md text-white bg-zinc-400  font-bold w-32 h-8 ">Hủy bỏ</button>
                </div>
            </div>
        </div>
    );
}
export default EditManagerHotel;