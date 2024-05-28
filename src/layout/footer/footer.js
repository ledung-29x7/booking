import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className=" bg-black flex justify-center text-gray-400 ">
            <div className="footer">
                <div className="flex flex-col gap-2 first-child">
                    <div className=" ">
                        <p className="">© 2024 Dung Le Pte. Ltd. All Rights Reserved.</p>
                    </div>
                </div>
                <div className=" flex flex-grow gap-8 justify-between ">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold">Giới thiệu</span>
                        <div className="flex gap-2 flex-col">
                            <Link to={"/about"}>Về chúng tôi</Link>
                            <Link to="/termanduse">Điều khoản</Link>
                            <Link to={"/payment"}>Thanh toán</Link>
                            <Link to="/contracts">Liên hệ</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold">Sản phẩm</span>
                        <div className="flex gap-2 flex-col">
                            <Link to={"/hotel"}>Đặt phòng</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold">Khám phá</span>
                        <div className="flex gap-2 flex-col">
                            <Link to={"/thingsToDo"}>Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;