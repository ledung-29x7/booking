import { useNavigate } from "react-router-dom";
import InputRoom from "./inputRoom";
import * as apis from "../../apis";
import { useState } from "react";

function Pay({ dateIn, dateOut, totalPrice, roomSingle, roomDouble }) {
    const navigate = useNavigate();
    const [infoPay,setInfoPay] = useState({
        
            cardholderName:"",
            cardNumber:"",
            expirationDate:"",
            cvc:""
        
    });

    const handleChange = (e) => {
        setInfoPay({...infoPay,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        const FetchData = async () => {
            e.preventDefault();
            try {
                const response = await apis.Payment(infoPay)
                .then(res=> {
                    if (res.status === 200) {
                        sessionStorage.setItem("idBooking",res.data.id)
                        navigate("/bookingConfirmation")
                        console.log(res)
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        FetchData();
    }

    return (
        <div className="flex flex-col containerr px-8 ">
            <div className=" flex py-6 border-b font-bold">
                <button className=" hover:text-cyan-600 flex-1">Your Selection</button>
                <button className=" hover:text-cyan-600 flex-1">Complete Detail</button>
            </div>

            <div className="py-5 flex">
                {/* info date booking */}
                <div className="flex flex-col gap-3 flex-1 px-3">
                    <div className="border p-4 rounded-lg flex flex-col gap-3">
                        <div>
                            Swisstoel The Bosphorus Itanbul
                        </div>
                        <div>
                            Acisu Sokagi No:19,34357
                        </div>
                        <div>
                            Istanbul, Turkey
                        </div>
                    </div>
                    <div className="border p-4 rounded-lg flex flex-col gap-10">
                        <div className=" grid grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <h4 className=" font-semibold">Check In</h4>
                                <div className=" text-gray-600">{"dateIn"}</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold">Check Out</h4>
                                <div className="text-gray-600">{"dateOut"}</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-semibold">Duration of stay</h4>
                            <div className="text-gray-600">
                                {dateOut - dateIn} nights
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-semibold">Selected rooms</h4>
                            <div className="flex flex-col gap-2">
                                <div className="text-gray-600">
                                    {roomSingle} Single
                                </div>
                                <div className="text-gray-600">
                                    {roomDouble} Double
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* enter info Pay */}
                <form action="/pay" className="flex flex-col justify-between flex-[2_1_0%] px-5" onSubmit={handleSubmit}>
                    <div className="">
                        <h3 className="font-bold text-xl">Total Price: </h3>
                        <div>{totalPrice}</div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <InputRoom
                            nameInput={"cardholderName"}
                            placeholder={"Cardholder Name"}
                            onChange={handleChange}
                            value={infoPay.cardholderName}
                        />
                        <InputRoom
                            nameInput={"cardNumber"}
                            placeholder={"Card Number"}
                            onChange={handleChange}
                            value={infoPay.cardNumber}
                        />
                        <div className="flex justify-between gap-5">
                            <div className="flex-1">
                                <InputRoom
                                    nameInput={"expirationDate"}
                                    placeholder={"Expiration Date"}
                                    onChange={handleChange}
                                    value={infoPay.expirationDate}
                                />
                            </div>
                            <div className="flex-1">
                                <InputRoom
                                    nameInput={"cvc"}
                                    placeholder={"CVC"}
                                    onChange={handleChange}
                                    value={infoPay.cvc}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <button  className="  bg-sky-600 rounded-3xl text-white px-6 py-3">
                            Complete Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Pay;