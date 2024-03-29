

function Search({icon,placeholder,value,ai}){
    return(
        <div className="search h-full">
            <div className="input-group">
                <div>
                    <img src={icon}  alt=""/>
                </div>
                <input className=" border-none outline-none" aria-invalid={ai} type="text" value={value} placeholder={placeholder} />
            </div>
        </div>
    );
}
export default Search;