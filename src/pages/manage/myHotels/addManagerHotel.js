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
    
    const [roomSing, setRoomSing] = useState({
        roomType: "SINGLE",
        pricePerNight: 0,
        roomCount: 0,
        imageDTOs: [],
        serviceDTOs: []
    });

    const [roomDou, setRoomDou] = useState({
        roomType: "DOUBLE",
        pricePerNight: 0,
        roomCount: 0,
        imageDTOs: [],
        serviceDTOs: []
    });
    const [roomFami,setRoomFami] = useState({
        roomType: "FAMILY",
        pricePerNight: 0,
        roomCount: 0,
        imageDTOs: [],
        serviceDTOs: []
    })

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

    // Single
    function handleChangeRoomSing(e) {
        const { name, value } = e.target;
        switch (name) {
            case "service":
                var checkbox = document.getElementsByName('service');
                var resule = []
                // Lặp qua từng checkbox để lấy giá trị
                for (var i = 0; i < checkbox.length; i++) {
                    if (checkbox[i].checked === true) {
                        resule.push({ name: checkbox[i].value })
                    }
                }
                return (
                    setRoomSing({ ...roomSing, serviceDTOs: resule })
                )

            case "roomCount":
                if (roomSing?.roomCount >= 0) {
                    return setRoomSing({ ...roomSing, roomCount: parseInt(value, 10) });
                }

            case "pricePerNight":
                if (roomSing.pricePerNight >= 0) {
                    setRoomSing({ ...roomSing, pricePerNight: parseInt(value, 10) })
                }
            default:
                return (
                    setRoomSing({ ...roomSing, [name]: value })
                )
        }
    }

    // Double
    function handleChangeRoomDou(e) {
        const { name, value } = e.target;
        switch (name) {
            case "service":
                var checkbox = document.getElementsByName('service');
                var resule = []
                // Lặp qua từng checkbox để lấy giá trị
                for (var i = 0; i < checkbox.length; i++) {
                    if (checkbox[i].checked === true) {
                        resule.push({ name: checkbox[i].value })
                    }
                }
                return (
                    setRoomDou({ ...roomDou, serviceDTOs: resule })
                )

            case "roomCount":
                if (roomDou?.roomCount >= 0) {
                    return setRoomDou({ ...roomDou, roomCount: parseInt(value, 10) });
                }

            case "pricePerNight":
                if (roomDou?.pricePerNight >= 0) {
                    setRoomDou({ ...roomDou, pricePerNight: parseInt(value, 10) })
                }
            default:
                return (
                    setRoomDou({ ...roomDou, [name]: value })
                )
        }
    }

    // Family
    function handleChangeRoomFami(e) {
        const { name, value } = e.target;
        switch (name) {
            case "service":
                var checkbox = document.getElementsByName('service');
                var resule = []
                // Lặp qua từng checkbox để lấy giá trị
                for (var i = 0; i < checkbox.length; i++) {
                    if (checkbox[i].checked === true) {
                        resule.push({ name: checkbox[i].value })
                    }
                }
                return (
                    setRoomFami({ ...roomFami, serviceDTOs: resule })
                )

            case "roomCount":
                if (roomFami?.roomCount >= 0) {
                    return setRoomFami({ ...roomFami, roomCount: parseInt(value, 10) });
                }

            case "pricePerNight":
                if (roomFami?.pricePerNight >= 0) {
                    setRoomFami({ ...roomFami, pricePerNight: parseInt(value, 10) })
                }
            default:
                return (
                    setRoomFami({ ...roomFami, [name]: value })
                )
        }
    }

    // push Single
    useEffect(() => {
        const newRooms = []
        if (roomSing?.roomCount > 0 && 
            roomSing?.pricePerNight > 0 && 
            roomSing?.serviceDTOs.length > 0
            ) {
                newRooms.push(roomSing)
        }

        if (roomDou?.roomCount > 0 && 
            roomDou?.pricePerNight > 0 && 
            roomDou?.serviceDTOs.length > 0
            ) {
                newRooms.push(roomDou)
        }

        if (roomFami?.roomCount > 0 && 
            roomFami?.pricePerNight > 0 && 
            roomFami?.serviceDTOs.length > 0
            ) {
                newRooms.push(roomFami)
        }

        setValueAdd((pre)=> ({
            ...pre,
            roomDTOs: newRooms
        }))
    }, [roomSing,roomDou,roomFami])



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
                                sessionStorage.setItem("idHotel", res.data.id),
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
                    <div className=" flex flex-col gap-28">
                        {/* Single */}
                        <div>
                            <div className=" flex justify-around ">
                                <input
                                    className="outline-none pl-1 w-28"
                                    type={"text"}
                                    name={"roomType"}
                                    value={"SINGLE"}
                                    onChange={handleChangeRoomSing}
                                />
                                <InputRoom
                                    type={"number"}
                                    placeholder={"số phòng"}
                                    nameInput={"roomCount"}
                                    value={roomSing?.roomCount}
                                    onChange={handleChangeRoomSing}
                                    titleInput={"Số lượng phòng"}
                                />
                                <InputRoom
                                    type={"number"}
                                    placeholder={"giá phòng"}
                                    nameInput={"pricePerNight"}
                                    value={roomSing?.pricePerNight}
                                    onChange={handleChangeRoomSing}
                                    titleInput={"Gía Phòng"}
                                />

                                
                            </div>  

                            <span>Dịch vụ Phòng</span>
                                <div className=" grid grid-cols-5">
                                    {service.map((serv) =>
                                        <CheckBox

                                            amenities={serv}
                                            value={serv}
                                            onClick={handleChangeRoomSing}
                                        />
                                    )}
                                </div>

                        </div>
                        
                        {/* Double */}
                        <div>
                            <div className=" flex justify-around ">
                                <input
                                    className="outline-none pl-1 w-28"
                                    type={"text"}
                                    name={"roomType"}
                                    value={"DOUBLE"}
                                    onChange={handleChangeRoomDou}
                                />
                                <InputRoom
                                    type={"number"}
                                    placeholder={"số phòng"}
                                    nameInput={"roomCount"}
                                    value={roomDou?.roomCount}
                                    onChange={handleChangeRoomDou}
                                    titleInput={"Số lượng phòng"}
                                />
                                <InputRoom
                                    type={"number"}
                                    placeholder={"giá phòng"}
                                    nameInput={"pricePerNight"}
                                    value={roomDou?.pricePerNight}
                                    onChange={handleChangeRoomDou}
                                    titleInput={"Gía Phòng"}
                                />

                            </div>  

                            <span>Dịch vụ Phòng</span>
                                <div className=" grid grid-cols-5">
                                    {service.map((serv) =>
                                        <CheckBox

                                            amenities={serv}
                                            value={serv}
                                            onClick={handleChangeRoomDou}
                                        />
                                    )}
                                </div>

                        </div>
                        {/* Family  */}
                        <div>
                            <div className=" flex justify-around ">
                                <input
                                    className="outline-none pl-1 w-28"
                                    type={"text"}
                                    name={"roomType"}
                                    value={"FAMILY"}
                                    onChange={handleChangeRoomFami}
                                />
                                <InputRoom
                                    type={"number"}
                                    placeholder={"số phòng"}
                                    nameInput={"roomCount"}
                                    value={roomFami?.roomCount}
                                    onChange={handleChangeRoomFami}
                                    titleInput={"Số lượng phòng"}
                                />
                                <InputRoom
                                    type={"number"}
                                    placeholder={"giá phòng"}
                                    nameInput={"pricePerNight"}
                                    value={roomFami?.pricePerNight}
                                    onChange={handleChangeRoomFami}
                                    titleInput={"Gía Phòng"}
                                />

                            </div>  

                                <div className=" grid grid-cols-5 gap-y-4">
                                    {service.map((serv) =>
                                        <CheckBox

                                            amenities={serv}
                                            value={serv}
                                            onClick={handleChangeRoomFami}
                                        />
                                    )}
                                </div>

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