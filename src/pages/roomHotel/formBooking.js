import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/contexts";
import { actions } from "../../store/action";
import InputRoom from "./inputRoom";
import IconNText from "../../componet/roomComponets/iconNText";
import DetailImageRoom from "../../componet/roomComponets/detailImageRoom";
import BoxInputBoonking from "./boxInputBooking";
import { useEffect, useState } from "react";

function FormBooking({ dataRoom }) {
    const navigate = useNavigate();
    const [state,dispatch] = useStore();
    const {getIdRoom} = state;
    const [dataInfoRoom, setDataInfoRoom] = useState();
    const [bookingInfo,setBookingInfo] = useState({
        checkinDate: '',
        fullName: '',
        amountOfPeople: '',
        phone: '',
        email: ''
    });

    useEffect(()=>{
        var findData = dataRoom.find((ob)=> ob.id === getIdRoom)
        setDataInfoRoom(findData)
    },[])

    return (
        <div className="p-10 w-[800px] flex flex-col gap-10">
            <div className=" flex justify-between box p-3 ">
                <div className=" flex gap-4">
                    <div className=" min-w-16 w-16 h-16 rounded-xl overflow-hidden cursor-pointer">
                        <DetailImageRoom src={"https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/Ph%C3%B2ng%20Ocean%20Suite/ceb6gpnbn7ujv921.webp"} />
                    </div>
                    <div className="">
                        <h3 className=" text-xl font-bold">{dataInfoRoom?.roomType}</h3>
                        <div className="flex gap-4 ">
                            <IconNText icon="fa-solid fa-bed" text={`30 m2`} />
                            <IconNText icon="fa-solid fa-user" text={"tối đa: 2"} />
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div>
                        <div className="font-bold text-xl">{dataInfoRoom?.pricePerNight}</div>
                        <div className=""> /phòng</div>
                    </div>
                    <div className=" flex justify-center bottom w-24 bg-lime-100">
                        <span className="font-bold">{"quantity"}</span>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6 justify-start ">
                    <div className="w-full inline-block">
                        <div className=" relative w-full">
                            <div className=" text-gray-800 h-full input-group flex justify-center">
                                <BoxInputBoonking
                                    style={{ color: "#98a2b3" }}
                                    icon="fa-solid fa-calendar"
                                    value={bookingInfo.checkinDate}
                                    nameInput={"checkinDate"}
                                    type={"button"}
                                />
                                <FontAwesomeIcon style={{ color: "#98a2b3" }} icon="fa-solid fa-chevron-down" />
                                <label className=" absolute top-0 left-4 bg-white px-2 -translate-y-1/2 text-[#475467] text-sm">Ngày nhận phòng</label>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" text-gray-800 h-full input-group flex justify-center">
                            <BoxInputBoonking
                                style={{ color: "#98a2b3" }}
                                icon="fa-solid fa-calendar"
                                value={"1 nguoi lon - 0 tre em"}
                                nameInput={"amountOfPeople"}
                                type={"button"}
                            />
                            <FontAwesomeIcon style={{ color: "#98a2b3" }} icon="fa-solid fa-chevron-down" />
                            <label className=" absolute top-0 left-6 bg-white px-2 -translate-y-1/2 text-[#475467] text-sm">So luong nguoi</label>
                        </div>
                    </div>
                </div>
                <InputRoom 
                    placeholder={"Nhập Họ và tên"}
                    titleInput={"Họ và tên"}
                    nameInput={"fullName"}
                />
                <InputRoom 
                    placeholder={"Số Điện thoại"}
                    titleInput={"Số điện thoại"}
                    nameInput = {"phone"}
                />
                <InputRoom 
                    placeholder={"Email"}
                    titleInput={"địa chỉ email"}
                    nameInput={"email"}
                />
            </div>
            <div className="flex gap-10 justify-between ">
                <div className="flex flex-col ">
                    <p>Tổng Tiền</p>
                    <div className=" text-xl font-bold text-[#0E4F4F]">{dataInfoRoom?.pricePerNight} đ</div>
                </div>
                <div className="flex justify-end gap-5" >
                    <button className=" rounded-3xl border px-5 py-2">Đăng ký tư vấn</button>
                    <button className=" bottom bg-[#77dada]" onClick={() => navigate("/pay")}>
                        <div>Đặt ngay</div>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default FormBooking;