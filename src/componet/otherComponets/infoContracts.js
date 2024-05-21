

function InfoContracts({name,job,phone,src}){
    return(
        <div className=" ">
            <div className="w-96 flex flex-col gap-5 box" >
                {/* image Profile */}
                <div className=" p-4 static pb-0 ">
                    <img loading="lazy" className="img-container" src={src} alt="" />
                </div>
                {/* info */}
                <div className="flex flex-col ">
                    {/* info Hotel */}
                    <div className=" px-6 flex flex-col gap-4">
                        <p className=" font-bold text-xl opacity-70">{name}</p>
                        <div className="flex items-center item gap-1 opacity-75 rounded-xl">
                            <img className="w-5 h-5" src="./icon/icons8-hotel-50.png" alt="" />
                            <p className=" text-base">{job}</p>
                        </div>
                        <div className="flex items-center item gap-1 opacity-75 rounded-xl">
                            <img className="w-5 h-5" src="./icon/icons8-phone-50.png" alt="" />
                            <p className=" text-base">{phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default InfoContracts;