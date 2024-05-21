import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyBookings() {
    return (
        <div className="bg-[#CDD0D1]/[.44] ">
        <div className=" flex m-auto py-8 w-[960px] min-h-[720px]">
            <div className=" px-3 flex-1">
                <h1 aria-level="1" dir="auto" role="heading" className=" mb-4 text-2xl text-left font-medium text-[#030810]">Đặt chỗ chưa hoàn tất</h1>
                <a href="/bookings" className="flex items-center p-2 rounded-md bg-white group hover:bg-[#0264c8]">
                    <div className=" pr-4 text-2xl text-[#605f63] group-hover:text-white">
                        <FontAwesomeIcon icon="fa-solid fa-rectangle-list" rotation={180} />
                    </div>
                    <div className=" group-hover:text-white text-[rgb(104,113,118)] ">
                    Tất cả phòng
                    </div>
                </a>
            </div>
            {/*  */}
            <div className=" flex items-stretch flex-col flex-[2_1_0%] px-3">
                {/* banner login */}
                <div className=" mb-3 ">
                    <div className="bg-[#1BA0E2] flex items-center shadow rounded-md p-6 ">
                        <div className=" text-8xl text-cyan-100 ">
                            <FontAwesomeIcon icon="fa-solid fa-list-check" />
                        </div>
                        <div className=" flex flex-col items-stretch ml-6 flex-1 text-white">
                            <h3 aria-level="3" dir="auto" role="heading" className=" mb-3 font-bold text-left">Xem lịch sử đặt phòng của bạn</h3>
                            <div dir="auto" className=" text-sm">
                                <a className=" underline" href="/user/signin">Đăng nhập</a>
                                <span> vào tài khoản Đặt chỗ của bạn hoặc </span>
                                <a className=" underline" href="/">Đăng ký</a>
                                <span> để xem lịch sử đặt phòng  hiện tại và trước đây của bạn, cũng như quản lý việc đặt phòng của bạn</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* list history */}
                <div className=" bg-white flex items-center shadow rounded-md p-6">
                    <img importan src="./icon/icon-emptyList.svg" alt="" />

                    <div className=" mx-6">
                        <h3 aria-level="3" dir="auto" role="heading" className=" my-3 font-bold text-left">
                        Không đặt chỗ chưa hoàn thành
                        </h3>
                        <div dir="auto" className=" text-sm">
                            <div dir="auto" className="">
                            Nếu bạn không thể hoàn tất quá trình đặt chỗ, chúng tôi sẽ lưu nó ở đây!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default MyBookings;