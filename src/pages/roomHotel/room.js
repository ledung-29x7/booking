import TitleHome from "../../componet/homeComponets/titleHome";
import SlideRoom from "../../componet/roomComponets/slideRoom";

function Room(){
    return(
        <div>
            <div>
                <div>
                    <TitleHome title={"Room VIP Chung Dung"} introduce={"3,550,000/phòng"}/>
                </div>
                <div className=" px-6">
                    <div className="flex justify-center gap-8 m-auto relative w-full rounded-3xl h-auto overflow-hidden">
                        <SlideRoom/>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <div>
                            <div>
                                <TitleHome title={"Dac diem noi bat"}/>
                                <div id="detail"></div>
                                <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>
                                </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Room;