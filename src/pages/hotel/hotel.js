import Search from "../home/search";
import TitleHome from "../../componet/homeComponets/titleHome";
import CheckBox from "../../componet/hotelComponets/checkBox";
import ResultSearch from "../../componet/hotelComponets/resultSearch";

function Hotel(){
    return(
        <div className=" section-bg">
            <div className=" py-16">
                <div className=" relative h-80">
                <div className=" searchHotel flex flex-col gap-10 box">
                    <div className="flex flex-col gap-4">
                        <h1 style={{fontSize: "40px", textAlign: "center"}}>WHERE DO YOU WANT TO GO?</h1>
                        <h2 style={{fontSize: "20px", textAlign: "center"}}>Hundreds of places for you to explore</h2>
                    </div>
                    <Search/>
                </div>
                </div>
                {/* result search */}
                <div>
                    <div className="containerr px-8 ">
                        <div className="">
                            <div className="flex flex-col ">
                                <TitleHome title="Research" />
                            </div>
                        </div>

                        <div className="flex gap-6 py-8">
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
                                <ResultSearch local="Hanoi" nameHotel="Sofitel Legend Metropole Hotel"
                                infoHotel="More info >>"
                                src="../image/hotels/sofitel.jpg"
                                rating="5/5"
                                />
                                <ResultSearch local="Hanoi" nameHotel="Meliá Hanoi"
                                infoHotel="More info >>"
                                src="../image/hotels/meliahn.jpg"
                                rating="5/5"
                                />
                                <ResultSearch local="Hanoi" nameHotel="Pan Pacific Hanoi"
                                infoHotel="More info >>"
                                src="../image/hotels/panpacific.jpg"
                                rating="5/5"
                                />
                                <ResultSearch local="Hanoi" nameHotel="Grand Vista Hanoi"
                                infoHotel="More info >>"
                                src="../image/hotels/grandvista.jpg"
                                rating="5/5"
                                />
                                <ResultSearch local="Hanoi" nameHotel="InterContinential Hanoi Westlake"
                                infoHotel="More info >>"
                                src="../image/hotels/intercontinentalwestlake.jpg"
                                rating="5/5"
                                />
                                <ResultSearch local="Hanoi" nameHotel="Movenpick Hanoi"
                                infoHotel="More info >>"
                                src="../image/hotels/movenpickhn.jpg"
                                rating="5/5"
                                />
                                <ResultSearch local="Hanoi" nameHotel="Hilton Hanoi Opera"
                                infoHotel="More info >>"
                                src="../image/hotels/hiltonhn.jpg"
                                rating="5/5"
                                />
                                <ResultSearch local="Hanoi" nameHotel="Elegant Suites Westlake"
                                infoHotel="More info >>"
                                src="../image/hotels/elegantsuite.jpg"
                                rating="5/5"
                                />
                                <ResultSearch local="Hanoi" nameHotel="Pullman Hanoi"
                                infoHotel="More info >>"
                                src="../image/hotels/pullmanhn.jpg"
                                rating="5/5"
                                />
                                <ResultSearch local="Hanoi" nameHotel="JW Mariott Hotel Hanoi"
                                infoHotel="More info >>"
                                src="../image/hotels/mariotthn.jpg"
                                rating="5/5"
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