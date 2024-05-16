import { useNavigate } from "react-router-dom";
import InputRoom from "./inputRoom";
import { useState } from "react";

function Pay({ dateIn, dateOut, totalPrice, roomSingle, roomDouble }) {
    const navigate = useNavigate();
    const [infoPay,setInfoPay] = useState({
        
    });
    return (
        <div className="flex flex-col containerr px-8 ">
            <div className=" flex py-6 border-b font-bold">
                <button className=" hover:text-cyan-600 flex-1">Lựa chọn của bạn</button>
                <button className=" hover:text-cyan-600 flex-1">Chi tiết đầy đủ</button>
            </div>

            <div className="py-5 flex">
                {/* info date booking */}
                <div className="flex flex-col gap-3 flex-1 px-3">
                    <div className="border p-4 rounded-lg flex flex-col gap-3">
                        <div>
                            Hà Nội 
                        </div>
                        <div>
                           DungLe No:19,34357
                        </div>
                        <div>
                            Hà Nội, Việt Nam
                        </div>
                    </div>
                    <div className="border p-4 rounded-lg flex flex-col gap-10">
                        <div className=" grid grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <h4 className=" font-semibold">Đăng ký vào</h4>
                                <div className=" text-gray-600">{"dateIn"}</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold">Thủ tục thanh toán</h4>
                                <div className="text-gray-600">{"dateOut"}</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-semibold">Thời gian cư trú</h4>
                            <div className="text-gray-600">
                                {dateOut - dateIn} Đêm
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-semibold">Phòng đã chọn</h4>
                            <div className="flex flex-col gap-2">
                                <div className="text-gray-600">
                                    {roomSingle} Đơn
                                </div>
                                <div className="text-gray-600">
                                    {roomDouble} Đôi
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* enter info Pay */}
                <div className="flex flex-col justify-between flex-[2_1_0%] px-5">
                    <div className="">
                        <h3 className="font-bold text-xl">Tổng giá: </h3>
                        <div>{totalPrice}</div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <InputRoom
                            nameInput={"cardName"}
                            placeholder={"Tên chủ thẻ"}
                        />
                        <InputRoom
                            nameInput={"cardNumber"}
                            placeholder={"Số thẻ"}
                        />
                        <div className="flex justify-between gap-5">
                            <div className="flex-1">
                                <InputRoom
                                    nameInput={"expiration"}
                                    placeholder={"Nhập Họ và tên"}
                                />
                            </div>
                            <div className="flex-1">
                                <InputRoom
                                    nameInput={"CVC"}
                                    placeholder={"Nhập Họ và tên"}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <button onClick={() => navigate("/bookingConfirmation")} className="  bg-sky-600 rounded-3xl text-white px-6 py-3">
                        Hoàn tất đặt chỗ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pay;