

function InputRoom({placeholder,nameInput,value,onChange,titleInput}){
    return(
        <div className="">
            <div className="input-group outline-none">
                <input className="pl-1 outline-none"
                type="text"
                placeholder={placeholder}
                name={nameInput}
                value={value}
                onChange={onChange}
                />
                <label className="absolute top-0 left-4 bg-white px-2 -translate-y-1/2 text-[#475467] text-sm">
                    {titleInput}
                </label>
            </div>

        </div>
    );
}
export default InputRoom;