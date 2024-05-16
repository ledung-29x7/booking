
import Search from "./search";
import Popular from "../../componet/homeComponets/popular";
import LocaltionPicnic30 from "../../componet/homeComponets/localtionPicnic30-30";
import LocaltionPicnic50 from "../../componet/homeComponets/localtionPicnic50-50";
import TitleHome from "../../componet/homeComponets/titleHome";

function Home() {

    return (
        <div>
            {/* Banner */}
            <div className="banner">
                <video className="home-bn-video" src="https://minio.fares.vn/mixivivu-dev/video/Mixivivuduthuyen.mp4" autoPlay muted playsInline loop></video>
                <div className="searchBox flex flex-col gap-10 box">
                    <div className="flex flex-col gap-4">
                        <h4 className=" text-center font-bold text-4xl">Rong chơi bốn phương,giá vẫn yêu thương</h4>
                        <p className=" text-center text-lg text-gray-900 opacity-60">Hơn 10000 khách sạn gì tốt đang chờ bạn</p>
                    </div>
                    <Search />
                </div>
            </div>

            {/* Popular home */}
            <div className=" pt-20 ">
                <div className="containerr flex flex-col gap-20 px-8 py-20">
                    <TitleHome title="Khách sạn mới và phổ biến nhất"
                        // introduce="hotel duoc nhieu tuong tac nhat"
                    />
                    <div className=" flex gap-6 flex-wrap">
                        <Popular local="Da Nang" nameHotel="Chung Dung Hotel"
                            infoHotel=" hotel ba chach"
                            src="https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp"
                            price="3,000,000"
                        />
                        <Popular local="Da Nang" nameHotel="Chung Dung Hotel"
                            infoHotel=" hotel ba chach"
                            src="https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp"
                            price="3,000,000"
                        />
                        <Popular local="Da Nang" nameHotel="Chung Dung Hotel"
                            infoHotel=" hotel ba chach"
                            src="https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp"
                            price="3,000,000"
                        />
                        <Popular local="Nha Trang" nameHotel="Chung Dung Hotel"
                            infoHotel=" hotel ba chach"
                            src="https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp"
                            price="3,000,000"
                        />
                        <Popular local="Phu Quoc" nameHotel="Chung Dung Hotel"
                            infoHotel=" hotel ba chach"
                            src="https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp"
                            price="3,000,000"
                        />
                        <Popular local="Da Nang" nameHotel="Chung Dung Hotel"
                            infoHotel=" hotel ba chach"
                            src="https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp"
                            price="3,000,000"
                        />
                    </div>
                    <div></div>
                </div>
            </div>

            {/* địa điểm du lịch  */}
            <div className="bg-[#f3ffff] px-20 py-20 block gap-6 section-bg">
            <div className=" ">
                        <div className="flex">
                            <LocaltionPicnic50
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/DJI_0550-HDR-Pano.jpg/1200px-DJI_0550-HDR-Pano.jpg"
                                />
                            <LocaltionPicnic50
                                src="https://static.vinwonders.com/production/dia-diem-chup-anh-dep-o-ha-noi-3.jpg"
                            />
                        </div>
                        <div className="flex">
                            <LocaltionPicnic30
                                src="https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg"
                            />

                            <LocaltionPicnic30
                                src="https://vcdn1-dulich.vnecdn.net/2022/04/01/MaPiLengHaGiangVnExpress-16488-3513-7729-1648806038.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=lFRvWQkOmXNG_PtKd7ylvw"
                            />
                            <LocaltionPicnic30
                                src="https://vcdn1-dulich.vnecdn.net/2022/04/08/du-lich-Phu-Quoc-02-5022-1649405369.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=wlhAT2o6cm94fcbOlM28Lg"
                            />
                        </div>
                    </div>

            </div>
            {/* Blog ve du lich */}
            {/* <div>
                <div className="containerr flex flex-col gap-20 px-8 pb-20">
                    <TitleHome title="What is there in the places you want to go"
                        introduce="Secrets and Life at the Tourist Destination - Discover and Update exciting news from this wonderful destination."
                    />
                    <div>

                    </div>
                </div>
            </div> */}
        </div>
    );
}
export default Home;