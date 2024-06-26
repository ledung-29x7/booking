import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as apis from "../../apis"

function BookingComfirmation() {

    const navigate = useNavigate()
    const [infoBooked,setInfoBooked] = useState();

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await apis.Confirmation()
                setInfoBooked(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchData();
    }, [])

    return (
        <div className="">
            <div className="flex flex-col gap-8 containerr px-8 py-8 ">
                <div className="">
                    <span></span>
                </div>

                <div className="flex flex-col gap-8">
                    <div className=" bg-blue-400 py-6 px-5 rounded-t-2xl">
                        <h3 className="font-bold text-2xl">Xác nhận đặt phòn</h3>
                    </div>
                    {/*  */}
                    <div className=" flex-col flex gap-7 border-2 rounded-lg px-5">
                        {/*  number*/}
                        <div className=" border-b-2 py-4">
                            <h4 className="font-semibold">Số điện thoại xác nhận: </h4>
                            <div className="">{infoBooked?.confirmationNumber}</div>
                        </div>
                        {/* info Booking */}
                        <div className="flex flex-col gap-6 border-b-2">
                            {/* name Hotel */}
                            <div>
                                <h4 className=" text-lg font-bold">{infoBooked?.hotelName}</h4>
                                <span className=" text-sm text-gray-600">{infoBooked?.hotelAddress}</span>
                            </div>
                            
                            {/* Date Booking */}
                            <div className="flex justify-around">
                                <div>
                                    <h4 className="font-semibold">Đăng ký vào</h4>
                                    <p className=" text-gray-600">{infoBooked?.checkinDate}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Kiểm tra</h4>
                                    <p className="text-gray-600">{infoBooked?.checkoutDate}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Khoảng thời gian</h4>
                                    <p className="">{infoBooked?.durationDays} Đêm</p>
                                </div>
                            </div>

                            {/*  */}
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold">Phòng</h4>
                                {infoBooked?.roomSelections?.map((room)=>
                                    <div className="px-5">{room?.count} loại {room?.roomType}</div>
                                )}
                            </div>
                        </div>
                        {/* phuong thuc lien lac  */}
                        <div className="flex flex-col gap-6 pb-5">
                            <div className="flex gap-5 items-center">
                                <h4 className=" text-xl font-bold">Tổng giá:</h4>
                                <p className=" font-semibold">{infoBooked?.totalPrice}</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <h4 className="font-semibold">Phương thức thanh toán:</h4>
                                <p className="text-sm">{infoBooked?.paymentMethod}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-semibold">Chi tiết khách hàng:</h4>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-600">Tên: {infoBooked?.customerName}</p>
                                    <p className="text-gray-600">Email: {infoBooked?.customerEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 justify-end">
                    <button onClick={() => navigate("/")} className="bottom border font-bold border-cyan-500">Trang chủ</button>
                    <a href="/bookings"
                        className="bottom font-bold bg-cyan-500">My Booking</a>
                </div>
            </div>
        </div>
    );
}
export default BookingComfirmation;