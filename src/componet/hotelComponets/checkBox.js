
function CheckBox({amenities}){
    return(
        <div className="flex items-center gap-3" >
            <input className="option" type="checkbox" />
            <p>{amenities}</p>
        </div>
    );
}
export default CheckBox;