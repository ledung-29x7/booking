


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
                        <p className="">Công ty TNHH Du Lịch và Dịch Vụ ChungDung</p>
                        <p className="">số nhà 8, đường Tôn Thất Thuyết, phương Mỹ Đình, quận Nam Từ Niêm, TP. Hà Nội</p>
                    </div>
                </div>
                <div className=" flex flex-grow gap-8 justify-between ">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold">Gioi thieu</span>
                        <div className="flex gap-2 flex-col">
                            <a href="/" >ve chunng toi</a>
                            <a href="/">Dieu khoan va dieu kien</a>
                            <a href="/">Huong Dan su dung</a>
                            <a href="/">Huong dan thah toan</a>
                            <a href="/">Lien he</a>
                            <a href="/">HotLine: </a>
                            <a href="/">Email:</a>
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
                            <a href="/">Blog</a>
                            <a href="/">Dieu khoan Dieu kien chung</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;