
function LocaltionPicnic50({src,nameLocal,infoLocal}){
    return(
        <div className="flex w-2/4 gap-6 h-80 box ">
            {/* image Local */}
                <img loading="lazy" className="w-full object-cover rounded-lg border-0 	" src={src} alt="" /> 
        </div>
    );
}
export default LocaltionPicnic50;