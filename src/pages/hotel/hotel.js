import Search from "../home/search";
import TitleHome from "../../componet/homeComponets/titleHome";
import CheckBox from "../../componet/hotelComponets/checkBox";
import ResultSearch from "../../componet/hotelComponets/resultSearch";

function Hotel(){
    return(
        <div className=" section-bg">
            <div className=" my-32">
                <div className=" searchHotel flex flex-col gap-10 box">
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
                {/* result search */}
                <div>
                    <div className="containerr px-8 py-20">
                        <div className="">
                            <div className="flex flex-col ">
                                <TitleHome title="Research" />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className=" box w-1/4 ">
                                <div className="border-b border-gray-300 filter-result">
                                    <h4>Filter Results</h4>
                                </div>
                                <div className="filter-result">
                                    <CheckBox amenities="abc" />    
                                    <CheckBox amenities="abc" />    
                                    <CheckBox amenities="abc" />    
                                    <CheckBox amenities="abc" />    
                                    <CheckBox amenities="abc" />    
                                </div>
                            </div>
                            <div className=" w-3/4 flex flex-col gap-8">
                                <ResultSearch local="Nha Trang" nameHotel="Chung Dung Hotel" 
                                    infoHotel=" hotel ba chach" 
                                    src="https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp"
                                    price="3,000,000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hotel;