import DetailImageRoom from "./detailImageRoom";
import IconNText from "./iconNText";
import { useStore } from "../../store/contexts";
import { actions } from "../../store/action";


function DetailRoom({nameRoom,dientich,feature,convenient,price}){

    const [,dispatch] = useStore();

    function handleClose(){
        dispatch(actions.ModalInforRoom(false))
    }
    return(
        <div className=" p-2 ">
            <div className="w-[960px] flex p-6">
                <div className="">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className=" w-[400px] h-[400px] rounded-xl overflow-hidden">
                            
                                <DetailImageRoom src={"https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/Ph%C3%B2ng%20Delta%20Suite/ji40giht574e26xg.webp"}/>
                            
                        </div>
                        <div className=" max-w-[400px] overflow-auto  flex gap-2">
                            <div className=" min-w-16 w-16 h-16 rounded-xl overflow-hidden cursor-pointer">
                                <DetailImageRoom src={"https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/Ph%C3%B2ng%20Delta%20Suite/kg6xnii8w2pvebyk.webp"}/>
                            </div>
                            <div className=" min-w-16 w-16 h-16 rounded-xl overflow-hidden cursor-pointer">
                                <DetailImageRoom src={"https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/Ph%C3%B2ng%20Delta%20Suite/kg6xnii8w2pvebyk.webp"}/>
                            </div>
                            <div className=" min-w-16 w-16 h-16 rounded-xl overflow-hidden cursor-pointer">
                                <DetailImageRoom src={"https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/Ph%C3%B2ng%20Delta%20Suite/kg6xnii8w2pvebyk.webp"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-5 w-full flex flex-col justify-between">
                    
                    <h3 className="text-2xl font-semibold">{"nameRoom"}</h3>
                    
                    <div className="py-5 flex-initial flex flex-col gap-3 ">
                        <h4 className="text-xl">Thông tin phòng</h4>
                        <div className="flex justify-between px-7">
                            <IconNText icon="fa-solid fa-bed" text={"180 m2"}/>
                            <IconNText icon="fa-solid fa-user" text={"tối đa: 2"}/>
                        </div>

                    </div> 
                    <div className=" pb-5 flex-[1_1_0%] flex flex-col gap-3">
                        <h4 className=" font-bold">Tính năng phòng bạn thích</h4>
                        <div className="grid grid-cols-2">
                            <IconNText icon="fa-solid fa-check" style={{color: "#66d9ff",}} text={"vòi tắm đứng"} />
                            <IconNText icon="fa-solid fa-check" style={{color: "#66d9ff",}} text={"tủ lạnh"} />
                            <IconNText icon="fa-solid fa-check" style={{color: "#66d9ff",}} text={"Máy lạnh"} />
                            <IconNText icon="fa-solid fa-check" style={{color: "#66d9ff",}} text={"Bình nóng lạnh"} />
                        </div>
                    </div>
                    <div className="pt-5 flex-[2_1_0%] flex flex-col gap-3">
                        <h4 className=" font-bold">Tiện nghi phòng</h4>
                        <div className="grid grid-cols-2">
                            <IconNText icon="fa-solid fa-check" style={{color: "#66d9ff",}} text={"máy lạnh"} />
                            <IconNText icon="fa-solid fa-check" style={{color: "#66d9ff",}} text={"nước đóng chai miễn phí"} />
                            <IconNText icon="fa-solid fa-check" style={{color: "#66d9ff",}} text={"TV"} />
                            <IconNText icon="fa-solid fa-check" style={{color: "#66d9ff",}} text={"Tủ lạnh"} />
                        </div>
                    </div>
                    <div className="flex-[1_1_0%] flex flex-col gap-3">
                        <span className=" text-yellow-700 font-bold">Giá chỉ từ</span>
                        <div className="flex justify-between">
                            <div className="">
                                <span className=" text-lg font-semibold text-[#0e4f4f]">{"4500000"} VND</span>
                                <span className=" text-gray-600 font-semibold">/phòng/đêm</span>
                            </div>
                            <button className=" px-6 py-1 rounded-lg bg-cyan-500 text-white" 
                                type="button"
                                onClick={handleClose}
                            >
                                Lựa chọn khác
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailRoom;