
function TitleHome({title,introduce}){
    return(
        <div className="flex justify-between">
            <div className="flex flex-col gap-5 ">
                <h1 className="font-bold text-4xl w-96">{title}</h1>  
            </div>
            <div className="w-72">
                <p className="text-lg opacity-65">
                    {introduce}
                </p>
            </div>
        </div>
    );
}

export default TitleHome;