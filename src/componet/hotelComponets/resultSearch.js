import { useNavigate } from "react-router-dom";
import Utilities from "./utilities";

function ResultSearch({resul}){
    const navigate = useNavigate();
    console.log(resul)
    const price = resul.roomDTOs?.find(ob => ob.roomType === "SINGLE").pricePerNight;

    return(
        
        <div className=" h-72 flex gap-5 box cursor-pointer items-center" onClick={()=>navigate(`/hotel/room/${resul.id}`)} >
            {/* image Hotel */}
            <div className=" p-4 static">
                <img loading="lazy" className=" w-80 h-64 rounded-3xl" src={""} alt="" />
            </div>
            {/* info */}
            <div className="flex flex-col flex-grow pr-5 ">
                {/* info Hotel */}
                <div className=" flex flex-col gap-4">
                    <div className=" flex items-center flex-row gap-1 w-24 opacity-75 rounded-xl bg-slate-200">
                        <img className=" w-3 h-3 " src="./icon/local-80.png" alt="" />
                        <p className= "text-sm">{resul.addressDTO.city}</p>
                    </div>
                    <p className=" font-bold text-xl opacity-70">{resul.name}</p>
                    <div className="flex items-center item gap-1 opacity-75 rounded-xl">
                        <img className="w-5 h-5" src="./icon/icons8-hotel-50.png" alt="" />
                        <p className=" text-base">{price}</p>
                    </div>
                </div>
                {/* utilities */}
                <div className=" my-6 flex flex-wrap gap-2  ">
                    <Utilities utilitie="co dieu hoa" />
                    <Utilities utilitie="co nong lanh" />
                </div>
                {/* price */}
                <div className="flex items-center justify-between pt-5 border-t border-gray-300">
                    <p className=" text-lg font-semibold">{price}$/ guest</p>
                    <button className=" bg-[#77dada] border-4  w-24
                    border-[#77dada]
                    flex 
                    items-center 
                    justify-center 
                    h-fit bottom 
                    font-bold
                    opacity-60 
                    ">
                        Put
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ResultSearch;