import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../store/contexts";
import { actions } from "../../store/action";
import { useEffect, useState } from "react";
import TitleRoom from "../../componet/roomComponets/titleRoom";
import SlideRoom from "../../componet/roomComponets/slideRoom";
import TitleHome from "../../componet/homeComponets/titleHome";
import NavButton from "../../componet/roomComponets/navButton";
import Utilitie from "../../componet/roomComponets/utilitie";
import CheckBox from "../../componet/hotelComponets/checkBox";
import InfoRoom from "../../componet/roomComponets/infoRoom";
import DetailRoom from "../../componet/roomComponets/detailRoom";
import FormBooking from "./formBooking";

function Room() {
    const [state, dispatch] = useStore();
    const [showInfoRoom, setShowInfoRoom] = useState(false);
    const [showFormBooking, setShowFromBooking] = useState(false)
    const { isInforoom,isFormBooking } = state;

    // Open Information Room
    useEffect(() => {
        setShowInfoRoom(isInforoom)
    }, [isInforoom])

    // Open Form Booking
    useEffect(() =>{
        setShowFromBooking(isFormBooking)
    },[isFormBooking])

    // when click
    const handleClickOutsideModal = (event) => {
        var overlay = document.getElementById("overlay")
        if (event.target === overlay) {
            setShowInfoRoom(false)
            setShowFromBooking(false)
            dispatch(actions.ModalInforRoom(false))
            dispatch(actions.ModalFormBooking(false))
        }
    };

    // 
    useEffect(() => {
        window.addEventListener('click', handleClickOutsideModal)
    })

    return (
        <div className="">
            <div className="flex flex-col containerr px-8 py-20 ">
                <TitleRoom address={"so8, ton that thuyet, Nam Tu Liem, Ha Noi"} sao={5} title={"Room VIP Chung Dung"} introduce={"3,550,000/phòng"} />
            </div>
            <div className=" px-6">
                {/* sildes */}
                <div className="flex justify-center gap-8 m-auto relative w-full rounded-3xl h-auto overflow-hidden">
                    {/* prev */}
                    <button type="button" className=" z-10 hover:bg-[#0e4f4f] hover:text-white 
                            border text-[#0e4f4f] bg-white flex p-3 rounded-full 
                            absolute w-[41px] left-5 top-1/2 translate-y-1/2 "
                    >
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </button>
                    {/* next */}
                    <button type="button" className=" z-10 hover:bg-[#0e4f4f] hover:text-white border 
                            text-[#0e4f4f] bg-white flex p-3 rounded-full 
                            absolute w-[41px] right-5 top-1/2 translate-y-1/2 "
                    >
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </button>
                    {/* images */}
                    <SlideRoom imgSlide={"https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/images/2l1uxvb4jp973ya1.webp"} />
                    <SlideRoom imgSlide={"https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/images/2l1uxvb4jp973ya1.webp"} />
                    <SlideRoom imgSlide={"https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/images/2l1uxvb4jp973ya1.webp"} />
                </div>
            </div>
            {/* end slide */}
            <div className="flex flex-col gap-10 px-8 py-20 containerr">
                {/* navi  */}
                <div className=" bg-slate-200 rounded-lg text-sm flex items-center gap-2 p-1">
                    <NavButton nav={"Đặc điểm"} />
                </div>

                <div className="flex gap-8  w-full">
                    <div className="flex flex-col gap-20 flex-grow">
                        {/* dac diem noi bat */}
                        <div className="flex flex-col gap-10">
                            <TitleHome title={"Dac diem noi bat"} />
                            <div className=" grid grid-cols-2 gap-x-8 gap-y-6">
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"bo suc"} />
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"bo suc"} />
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"bo suc"} />
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"bo suc"} />
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"bo suc"} />
                            </div>
                            <div className="flex flex-col gap-6">
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"Du thuyền được thiết kế với phong cách sang trọng và truyền thống"} />
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"Du thuyền được thiết kế với phong cách sang trọng và truyền thống"} />
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"Du thuyền được thiết kế với phong cách sang trọng và truyền thống"} />
                            </div>
                        </div>

                        {/* cac loai phong gia */}
                        <div className=" flex flex-col gap-10">
                            <TitleHome title={"Cac loai phong & gia"} />
                            <div className="flex flex-col gap-6 border rounded-lg px-5 py-6">
                                <span className=" text-lg font-semibold ">
                                    Tìm kiếm nhanh hơn bằng cách chọn những tiện nghi bạn cần
                                </span>
                                <div className="grid grid-cols-3 gap-y-2">
                                    <CheckBox amenities={"abc"} />
                                    <CheckBox amenities={"abc"} />
                                    <CheckBox amenities={"abc"} />
                                    <CheckBox amenities={"abc"} />
                                </div>
                            </div>
                            <div className=" p-8 rounded-3xl bg-[url('https://mixivivu.com/section-background.png')] flex flex-col gap-10 bg-[#f2f4f7]">
                                <InfoRoom nameRoom={"Superior Double"}
                                    sizeR={30}
                                    kindOfRoom={"Phong Superior doi"}
                                    amoutPeople={2}
                                    bed={"1 giường cỡ queen "}
                                    price={3000000}
                                />
                                <InfoRoom nameRoom={"Superior Double"}
                                    sizeR={30}
                                    kindOfRoom={"Phong Superior doi"}
                                    amoutPeople={2}
                                    bed={"1 giường cỡ queen "}
                                    price={3000000}
                                />
                                <InfoRoom nameRoom={"Superior Double"}
                                    sizeR={30}
                                    kindOfRoom={"Phong Superior doi"}
                                    amoutPeople={2}
                                    bed={"1 giường cỡ queen "}
                                    price={3000000}
                                />
                                <InfoRoom nameRoom={"Superior Double"}
                                    sizeR={30}
                                    kindOfRoom={"Phong Superior doi"}
                                    amoutPeople={2}
                                    bed={"1 giường cỡ queen "}
                                    price={3000000}
                                />
                                <InfoRoom nameRoom={"Superior Double"}
                                    sizeR={30}
                                    kindOfRoom={"Phong Superior doi"}
                                    amoutPeople={2}
                                    bed={"1 giường cỡ queen "}
                                    price={3000000}
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" min-w-96 max-w-[25vw]">
                        <div className=" rounded-[32px] box ">
                            <div className=" px-6 py-5 border-b-2 border-b-[#eaecf0]">Room Information</div>
                            <div className="py-5 px-6 flex flex-col gap-4">
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"sang "} />
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"xin"} />
                                <Utilitie src={"../icon/icon-utiliti.svg"} util={"min"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail Room */}
            {showInfoRoom ?
                <div className="modal">
                    <div className="flex h-full w-full">
                        <div id="overlay" className="modal_overlay"></div>
                        <div className="modal_body">
                            <DetailRoom />
                        </div>
                    </div>
                </div>
                : null
            }

            {/* Form Booking */}
            {showFormBooking ?
                <div className="modal">
                    <div className="flex h-full w-full">
                        <div id="overlay" className="modal_overlay"></div>
                        <div className="modal_body">
                            <FormBooking />
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    );
}
export default Room;