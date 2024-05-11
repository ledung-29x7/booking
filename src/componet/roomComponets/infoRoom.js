import Utilities from "../hotelComponets/utilities";
import { useStore } from "../../store/contexts";
import { actions } from "../../store/action";

function InfoRoom({dataInfoRoom}){
    
    const [,dispath] = useStore();

    const handleDetailRoom = () => {
        dispath(actions.ModalInforRoom(true))
        dispath(actions.GetIdRoom(dataInfoRoom.id))
    }

    const handleFormBooking = () => {
        dispath(actions.ModalFormBooking(true))
    }

    return(
        <div className="box px-5 py-6">
            {/* title */}
            <div className=" py-3">
                <span className=" text-xl font-semibold">
                    {dataInfoRoom.roomType}
                </span>
            </div>
            {/* info  */}
            <div className=" flex">
                {/* image and size Room */}
                <div className=" flex flex-col gap-5 flex-1 pr-4">
                    <div className=" w-72 rounded-2xl overflow-hidden">
                        <img  src="https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/Ph%C3%B2ng%20Delta%20Suite/a6f3b1uro1rfttjx.webp" alt=""/>
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className=" text-gray-600">
                            {30} m2
                        </span>
                        <div className="flex flex-col gap-3">
                            <Utilities utilitie={"vòi tắm đứng"}/>
                            <Utilities utilitie={"tủ lạnh khu vực chờ"}/>
                            <Utilities utilitie={"máy lạnh"}/>
                        </div>
                        <div className="flex justify-center">
                            <button className=" rounded-2xl px-6 py-1 bg-cyan-400 text-white" type="buttom" onClick={handleDetailRoom} >
                                xem chi tiết phòng
                            </button>
                        </div>
                    </div>
                </div>
                {/* Utilitis Room */}
                <div className=" flex flex-col justify-between gap-6 flex-1 border-2 rounded-2xl px-4 py-6">
                    <div className=" flex flex-col gap-4 pb-3 border-b-2 ">
                        <span className=" text-lg font-semibold">
                            {dataInfoRoom.roomType}
                        </span>
                        <div className=" flex justify-between px-4 text-gray-600">
                            <span className="">
                                {1}
                            </span>
                            <span className="">
                                {2} nguoi
                            </span>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex-1 border-b-2">
                        <div className=" grid grid-cols-2  gap-y-4">
                            <Utilities utilitie={"không gồm bữa sáng "} />
                            <Utilities utilitie={"Không đổi lịch "} />
                            <Utilities utilitie={"Wifi miễn phí "} />
                            <Utilities utilitie={"hủy phòng có thu phí"} />
                            <Utilities utilitie={"Không hút thuốc "} />
                            <Utilities utilitie={"Không hoàn tiền "} />
                        </div>
                    </div>
                    <div className=" flex justify-between items-center">
                        <span className=" text-xl font-semibold">
                            {dataInfoRoom.pricePerNight}$
                        </span>
                        <button className=" bottom bg-cyan-500"
                            onClick={handleFormBooking}
                        >
                            Đặt ngay
                        </button>
                    </div>
                </div>
                {/* end Utilitis */}
            </div>
        </div>
    );
}
export default InfoRoom;