import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className=" bg-black flex justify-center text-gray-400 ">
            <div className="footer">
                <div className="flex flex-col gap-4 first-child">
                    <a href="/" className=" w-40 h-16 ">
                        <img src="" alt="" />
                        Booking
                    </a>
                    <div className=" ">
                        <p className="">© 2024 Dung Le Pte. Ltd. All Rights Reserved.</p>
                    </div>
                </div>
                <div className=" flex flex-grow gap-8 justify-between ">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold">Introduction</span>
                        <div className="flex gap-2 flex-col">
                            <a href="/">About Us</a>
                            <a href="/">Term And Use</a>
                            <a href="/">Payment</a>
                            <a href="/">Contract Us</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold">San Pham</span>
                        <div className="flex gap-2 flex-col">
                            <a href="/">Booking Khach San</a>
                            <a href="/">quan ly khach hang</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold">Khach San</span>
                        <div className="flex gap-2 flex-col">
                            <Link to={"/thingsToDo"}>
                                <p>Things To Do</p>
                            </Link>
                            <a href="/">Dieu khoan Dieu kien chung</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;