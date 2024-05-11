import { useLocation } from "react-router-dom";
import * as apis from "../../apis"
import { useStore } from '../../store/contexts';
import Search from "../home/search";
import TitleHome from "../../componet/homeComponets/titleHome";
import CheckBox from "../../componet/hotelComponets/checkBox";
import ResultSearch from "../../componet/hotelComponets/resultSearch";
import { useState,useEffect } from "react";

function Hotel(){
    const [state,] = useStore();
    const {getSearch} = state;
    const [searchResult,setSearchResult] = useState([])

    console.log(getSearch)
    
    useEffect(()=>{
        if (getSearch !== null) {
            const FetchData = async() => {
                try {
                    const response = await apis.getAddress(getSearch)
                    setSearchResult(response)
                } catch (error) {
                    console.log(error)
                }
            }
            FetchData();
        }

    },[getSearch])


    console.log(searchResult)


    return(
        <div className=" section-bg">
            <div className=" py-16">
                <div className=" relative h-80">
                <div className=" searchHotel flex flex-col gap-10 box">
                    <div className="flex flex-col gap-4">
                        <h4 className=" text-center font-bold text-4xl">where do you want to go?</h4>
                        <p className=" text-center text-lg text-gray-900 opacity-60">Hundreds of places for you to explore</p>
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
                                {searchResult?.map((resul)=>
                                    <ResultSearch
                                        key={resul.id}
                                        resul={resul}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hotel;