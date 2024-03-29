
import Search from "./search";
import Popular from "../../componet/homeComponets/popular";
import LocaltionPicnic from "../../componet/homeComponets/localtionPicnic";
import TitleHome from "../../componet/homeComponets/titleHome";

function Home(){

    return(
        <div>
            {/* Banner */}
            <div className="banner">
                <video className="home-bn-video" src="https://minio.fares.vn/mixivivu-dev/video/Mixivivuduthuyen.mp4" autoPlay muted playsInline loop></video>
                <div className="searchBox flex flex-col gap-10 box">
                    <div className="flex flex-col gap-4">
                        <h4 className=" text-center font-bold text-4xl">where do you want to go?</h4>
                        <p className=" text-center text-lg text-gray-900 opacity-60">Hundreds of places for you to explore</p>
                    </div>
                    <div className=" flex gap-5 ">
                        <Search placeholder="Ban muon di dau " />
                        <Search placeholder="lich trinh cua ban" />
                        <Search so luong nguoi />
                        <div className="flex items-center">
                            <button className=" bg-cyan-200 border-4 border-cyan-200 flex items-center justify-center h-fit w-fit bottom font-bold">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular home */}
            <div className=" pt-32 ">
                <div className="containerr flex flex-col gap-20 px-8 py-20">
                        <TitleHome title="Prominent tourist destination"
                                    introduce="hotel duoc nhieu tuong tac nhat"
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
            <div className="bg-[#f3ffff] section-bg">
                <div className="containerr flex flex-col gap-20 px-8 pb-20 ">
                        <TitleHome title="Localtion camping" 
                            introduce="nhung dia diem hot can ban den kham pha"
                        />
                    <div className="flex gap-6 container ">
                        <LocaltionPicnic  
                            src= "https://ik.imagekit.io/tvlk/image/imageResource/2022/12/13/1670914145711-fc8b8f2cd80cbf7dd48de3ce415ae463.jpeg?tr=q-75,w-256"
                        />
                        <LocaltionPicnic  
                            src= "https://ik.imagekit.io/tvlk/image/imageResource/2022/12/13/1670914145711-fc8b8f2cd80cbf7dd48de3ce415ae463.jpeg?tr=q-75,w-256"
                        />
                        <LocaltionPicnic  
                            src= "https://ik.imagekit.io/tvlk/image/imageResource/2022/12/13/1670914145711-fc8b8f2cd80cbf7dd48de3ce415ae463.jpeg?tr=q-75,w-256"
                        />

                        <LocaltionPicnic  
                            src= "https://ik.imagekit.io/tvlk/image/imageResource/2022/12/13/1670914145711-fc8b8f2cd80cbf7dd48de3ce415ae463.jpeg?tr=q-75,w-256"
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