

function ArticleBox({Title, Details}){
    return(
        <div>
            <div className="w-96 flex flex-col gap-5 box w-full" >
                {/* info */}
                <div className="flex flex-col">
                    <div className=" px-6 flex flex-col gap-4">
                        <p className=" text-xl opacity-70"  style={{fontFamily: "Bahnschrift"}}>{Title}</p>
                        <p className=" font-bold text-sm opacity-70">{Details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ArticleBox;