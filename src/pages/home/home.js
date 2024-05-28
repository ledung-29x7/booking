import Search from "./search";
import Popular from "../../componet/homeComponets/popular";
import LocaltionPicnic from "../../componet/homeComponets/localtionPicnic";
import TitleHome from "../../componet/homeComponets/titleHome";

function Home() {

    return (
        <div>
            {/* Banner */}
            <div className="banner">
                {/*Change the video depending on the occasion. The first one will be used on non-holiday days.*/}
                <video className="home-bn-video" src="https://minio.fares.vn/mixivivu-dev/video/Mixivivuduthuyen.mp4" autoPlay muted playsInline loop></video>
                {/*<video className="home-bn-video" src="../video/Cartoon Network soidutS VHS intro.mp4" autoPlay muted playsInline loop></video>*/}
                <div className="searchBox flex flex-col gap-10 box">
                    <div className="flex flex-col gap-4">
                        <h1 style={{fontFamily:"Bahnschrift", fontSize: "40px", textAlign: "center"}}>Bạn muốn đi đâu?</h1>
                        <h2 style={{fontFamily:"Bahnschrift", fontSize: "20px", textAlign: "center"}}>Hàng ngàn địa điểm khám phá</h2>
                    </div>
                    <Search />
                </div>
            </div>

            {/* Popular home */}
            <div className=" pt-32 ">
                <div className="containerr flex flex-col gap-20 px-8 py-20">
                    <TitleHome title="Khách sạn" introduce="..."/>
                    <div className=" flex gap-6 flex-wrap">
                        <Popular local="Hanoi" nameHotel="Sofitel Legend Metropole Hotel"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/sofitel.jpg"
                            rating="5/5"
                        />
                        <Popular local="Hanoi" nameHotel="Meliá Hanoi"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/meliahn.jpg"
                            rating="5/5"
                        />
                        <Popular local="Hanoi" nameHotel="Pan Pacific Hanoi"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/panpacific.jpg"
                            rating="5/5"
                        />
                        <Popular local="Hanoi" nameHotel="Grand Vista Hanoi"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/grandvista.jpg"
                            rating="5/5"
                        />
                        <Popular local="Hanoi" nameHotel="InterContinential Hanoi Westlake"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/intercontinentalwestlake.jpg"
                            rating="5/5"
                        />
                        <Popular local="Hanoi" nameHotel="Movenpick Hanoi"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/movenpickhn.jpg"
                            rating="5/5"
                        />
                        <Popular local="Hanoi" nameHotel="Hilton Hanoi Opera"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/hiltonhn.jpg"
                            rating="5/5"
                        />
                        <Popular local="Hanoi" nameHotel="Elegant Suites Westlake"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/elegantsuite.jpg"
                            rating="5/5"
                        />
                        <Popular local="Hanoi" nameHotel="Pullman Hanoi"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/pullmanhn.jpg"
                            rating="5/5"
                        />
                        <Popular local="Hanoi" nameHotel="JW Mariott Hotel Hanoi"
                            infoHotel="Chi tiết >>"
                            src="../image/hotels/mariotthn.jpg"
                            rating="5/5"
                        />
                    </div>
                    <div></div>
                </div>
            </div>

            {/* địa điểm du lịch  */}
            <div className="bg-[#f3ffff] section-bg">
                <div className="containerr flex flex-col gap-20 px-8 pb-20 ">
                    <TitleHome title="Tourist attractions"
                        introduce="Interesting places you can go..."
                    />
                    <div className="flex gap-6 container ">
                        <LocaltionPicnic
                            src="../image/travel/hanoitravel01.jpg"
                            nameLocal="Nhà Hát Lớn Hà Nội"
                            infoLocal="1 Tràng Tiền, Phan Chu Trinh, Hoàn Kiếm, Hà Nội"
                        />
                        <LocaltionPicnic
                            src="../image/travel/hanoitravel10.jpg"
                            nameLocal="Hoàng thành Thăng Long"
                            infoLocal="19c Hoàng Diệu, Điện Biên, Ba Đình, Hà Nội"
                        />
                        <LocaltionPicnic
                            src="../image/travel/huetravel04.jpg"
                            nameLocal="Chợ Đông Ba"
                            infoLocal="Phú Hoà, Thành phố Huế, Thừa Thiên Huế"
                        />

                        <LocaltionPicnic
                            src="../image/travel/huetravel05.jpg"
                            nameLocal="Trường Quốc học Huế"
                            infoLocal="12 Lê Lợi, Vĩnh Ninh, Thành phố Huế, Thừa Thiên Huế"
                        />
                    </div>
                </div>
            </div>
            {/* Blog ve du lich */}
            <div>
                <div className="containerr flex flex-col gap-20 px-8 pb-20">
                    <TitleHome title="What is there in the places you want to go"
                        introduce="Secrets and Life at the Tourist Destination - Discover and Update exciting news from this wonderful destination."
                    />
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;