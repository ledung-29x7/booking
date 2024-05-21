

function InputRoom({placeholder,nameInput,value,onChange,titleInput,type}){
    return(
        <div className="">
            <div className=" input-group outline-none">
                <input className="pl-1  outline-none"
                type={type}
                placeholder={placeholder}
                name={nameInput}
                value={value}
                onChange={onChange}
                />
                <label className="absolute -top-1 left-4 bg-white px-2 -translate-y-1/2 text-[#475467] text-sm font-semibold">
                    {titleInput}
                </label>
            </div>

        </div>
    );
}
export default InputRoom;