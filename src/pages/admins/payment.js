import React from "react";
import Popular from "../../componet/homeComponets/popular";

function Payment(){
    return (
        <div className="containerr flex flex-col gap-10 px-8 py-20">
            <h1 style={{fontFamily: "Bahnschrift", fontSize: "50px", textAlign: "center"}}>Hướng dẫn thanh toán</h1>
            <Popular
                local="Domestic"
                nameHotel="BIDV"
                infoHotel="111222333"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6vzG_VzTdMKT3dTbTg3G-xW953rOi6lzT7edB_abng&s"
            />
            <Popular
                local="Domestic"
                nameHotel="Momo"
                infoHotel="111222333"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGds0dVYCpsArM9iAbJ8GNMQIHWR_M7vECi27mUxg1cQ&s"
            />
            <Popular
                local="Domestic"
                nameHotel="VNPay"
                infoHotel="111222333"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULr3Ust3Yw-IS1KvGuHQFys81W1ava9Ohd8gduuRPXA&s"
            />
            <Popular
                local="International"
                nameHotel="PayPal"
                infoHotel="111222333"
                src="https://canhme.com/wp-content/uploads/2016/01/Paypal.png"
            />
        </div>
    );
}
export default Payment;