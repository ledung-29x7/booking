import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import { useEffect, useState } from "react";
import * as apis from "../../../apis";
import { useNavigate } from "react-router-dom";
import InputRoom from "../../roomHotel/inputRoom";
import CheckBox from "../../../componet/hotelComponets/checkBox";

function AddManagerHotel() {
    const [editRoomDTO, setEditRoomDTO] = useState({});
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const [rooms, setRooms] = useState({

        roomType: "",
        pricePerNight:0,
        roomCount: 0,
        imageDTOs: [],
        serviceDTOs: []
    });
    const service = [
        "Wifi",
        "Bồn tắm",
        "Nóng lạnh",
        "Điều hòa",
        "Ti vi",
        "Tủ lạnh",
        "Tủ để đồ",
        "Đồ ăn",
        "Chỗ đỗ xe",
        "Vòi sen",
        "Khu vực bếp",
        "Ban công",
        "Bể sục",
        "Máy sấy tóc",
        "Máy pha cà phê",
    ]

    const [valueAdd, setValueAdd] = useState({
        name: "",
        addressDTO: {
            addressLine: "",
            district: "",
            city: "",
            country: ""
        },
        imageDTOs: [],
        managerUsername: 'manager@gmail.com',
        roomDTOs: [],
        starRating: 'FIVESTAR'

    })
    console.log(valueAdd)


    // gán cho valueedit

    function HandleCloseEdit() {
        navigate("/manager/myHotels")
    }

    // hand Change
    function handleChange(e) {
        const { name, value } = e.target;
        // Nếu trường đang thay đổi thuộc addressDTO
        if (name.includes('addressDTO')) {
            const addressName = name.split('.')[1]; // Lấy tên trường con (ví dụ: addressLine, district, city, country)
            setValueAdd({
                ...valueAdd,
                addressDTO: {
                    ...valueAdd.addressDTO,
                    [addressName]: value
                }
            });
        } else {
            setValueAdd({
                ...valueAdd,
                [name]: value
            });
        }
    }

    // 
    function handleChangeRoom(e) {
        const { name, value } = e.target;
        switch (name) {
            case "service":
                var checkbox = document.getElementsByName('service');
                var resule = []
                // Lặp qua từng checkbox để lấy giá trị
                for (var i = 0; i < checkbox.length; i++) {
                    if (checkbox[i].checked === true) {
                        resule.push({name:checkbox[i].value})
                    }
                }
                return (
                    setRooms({ ...rooms, serviceDTOs: resule })
                )

            case "roomCount":
                return(
                    setRooms({ ...rooms, roomCount: parseInt(value, 10) })
                )
                
            case "pricePerNight":
                return(
                    setRooms({...rooms,pricePerNight: parseInt(value, 10)})
                )
            default:
                return(
                    setRooms({...rooms,[name]:value})
                )
        }
    }

    useEffect(() => {
        setValueAdd({ ...valueAdd, roomDTOs: [rooms] })
    }, [rooms])


    // Submit
    function handleSubmit(e) {
        const FetchEdit = async () => {
            try {
                e.preventDefault();
                await apis.AddManagerHotel(valueAdd)
                    .then(res => {
                        console.log(res)
                        if (res.status === 200) {
                            return (
                                sessionStorage.setItem("idHotel",res.data.id),
                                dispatch(actions.ModalSuccsessfull(true)),
                                navigate("/manager/myHotel/add/imagehotel")
                            )
                        }
                    });

            } catch (error) {
                console.log(error)
            }
        }
        FetchEdit()
    }

    return (
        <div className="containerr">
            <div className="px-10 my-7 flex justify-between w-full h-14 font-bold text-xl border-b border-b-slate-400 ">
                <span>Thêm khách sạn</span>
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
                            type={'text'}
                            placeholder={"tên khách sạn"}
                            nameInput={"name"}
                            value={valueAdd?.name}
                            onChange={handleChange}
                            titleInput={"Tên Khách Sạn"}
                        />

                        <InputRoom
                            placeholder="số nhà/thôn/xóm"
                            value={valueAdd?.addressDTO?.addressLine}
                            nameInput="addressDTO.addressLine"
                            onChange={handleChange}
                            titleInput={"Địa Chỉ Cụ Thể"}
                            type={"text"}
                        />

                        <InputRoom
                            placeholder="District"
                            nameInput={"addressDTO.district"}
                            value={valueAdd?.addressDTO?.district}
                            onChange={handleChange}
                            titleInput={"district"}
                            type={"text"}
                        />

                        <InputRoom
                            placeholder="City"
                            nameInput={"addressDTO.city"}
                            value={valueAdd?.addressDTO?.city}
                            onChange={handleChange}
                            titleInput={"City"}
                            type={"text"}
                        />

                        <InputRoom
                            placeholder="Country"
                            nameInput={"addressDTO.country"}
                            value={valueAdd?.addressDTO?.country}
                            onChange={handleChange}
                            titleInput={"Country"}
                            type={"text"}
                        />

                    </div>
                    <div>
                       <div>
                       <InputRoom
                            type={"text"}
                            placeholder={"Kiểu phòng"}
                            nameInput={"roomType"}
                            value={rooms?.roomType}
                            onChange={handleChangeRoom}
                            titleInput={"Kiểu Phòng"}
                        />
                        <InputRoom
                            type={"number"}
                            placeholder={"số phòng"}
                            nameInput={"roomCount"}
                            value={rooms?.roomCount}
                            onChange={handleChangeRoom}
                            titleInput={"Số lượng phòng"}
                        />
                        <InputRoom
                            type={"number"}
                            placeholder={"giá phòng"}
                            nameInput={"pricePerNight"}
                            value={rooms?.pricePerNight}
                            onChange={handleChangeRoom}
                            titleInput={"Gía Phòng"}
                        />
                       </div>
                        <div>
                            <span>Dịch vụ Phòng</span>
                            {service.map((serv) =>
                                <CheckBox

                                    amenities={serv}
                                    value={serv}
                                    onClick={handleChangeRoom}
                                />
                            )}
                        </div>
                    </div>
                    <div className="border-gray-500 border text-right rounded-lg overflow-hidden h-9">
                        <button className=" bg-blue-500 h-full w-full font-bold text-white"
                        >Cập nhật</button>
                    </div>
                </form>{/* end form */}
                <div className=" h-14 flex justify-end items-center">
                    <button onClick={HandleCloseEdit} className=" rounded-md text-white bg-zinc-400  font-bold w-32 h-8 ">Hủy bỏ</button>
                </div>
            </div>
        </div>
    );
}
export default AddManagerHotel;