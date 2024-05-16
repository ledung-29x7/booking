import { useNavigate } from "react-router-dom";

function BookingComfirmation({idconfir,address,dateIn,dateout,roomDouble,roomSingle,firtname,email,totalPrice}){
    const navigate = useNavigate()
    return(
        <div className="">
            <div className="flex flex-col gap-8 containerr px-8 py-8 ">
                <div className="">
                    <span></span>
                </div>
                <div className="flex flex-col gap-8">
                    <div className=" bg-blue-400 py-6 px-5 rounded-t-2xl">
                        <h3 className="font-bold text-2xl">Xác nhận đặt phòng</h3>
                    </div>
                    {/*  */}
                    <div className=" flex-col flex gap-7 border-2 rounded-lg px-5">
                        {/*  number*/}
                        <div className=" border-b-2 py-4">
                            <h4 className="font-semibold">Số điện thoại xác nhận: </h4>
                            <div className="">{"idconfir"}</div>
                        </div>
                        {/* info Booking */}
                        <div className="flex flex-col gap-6 border-b-2">
                            <div>
                                <h4 className=" text-lg font-bold">Khách sạn Thiên Đường</h4>
                                <span className=" text-sm text-gray-600">{"address"}</span>
                            </div>
                            <div className="flex justify-around"> 
                                <div>
                                    <h4 className="font-semibold">Đăng ký vào</h4>
                                    <p className=" text-gray-600">{"dateIn"}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Kiểm tra</h4>
                                    <p className="text-gray-600">{"dateout"}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Khoảng thời gian</h4>
                                    <p className="">{dateout-dateIn} Đêm</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold">Phòng</h4>
                                <div className="px-5">{roomSingle} Đơn</div>
                                <div className="px-5">{roomDouble} Đôi</div>
                            </div>
                        </div>
                        {/* phuong thuc lien lac  */}
                        <div className="flex flex-col gap-6 pb-5">
                            <div className="flex gap-5 items-center">
                                <h4 className=" text-xl font-bold">Tổng giá</h4>
                                <p className=" font-semibold">{"totalPrice"}</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <h4 className="font-semibold">Phương thức thanh toán</h4>
                                <p className="text-sm">{"CREDIT CARD"}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-semibold">Chi tiết khách hàng:</h4>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-600">Tên khách hàng: {"firtname"}</p>
                                    <p className="text-gray-600">Email: {"email"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-end">
                    <button onClick={()=>navigate("/")} className="bottom border font-bold border-cyan-500">Trang chủ</button>
                    <a href="/bookings"
                     className="bottom font-bold bg-cyan-500">My Booking</a>
                </div>
            </div>
        </div>
    );
}
export default BookingComfirmation;