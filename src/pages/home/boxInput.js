import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BoxInput({ placeholder, ai, type, icon, onKeyDown, onChange,nameInput,value }) {
    return (
        <div className="search h-full">
            <div className="input-group ">
                <div>
                    <FontAwesomeIcon style={{ color: "#667085" }} icon={icon} />
                </div>
                <input className=" h-6 w-full outline-none"
                    aria-invalid={ai}
                    type={type}
                    name={nameInput}
                    value={value}
                    placeholder={placeholder}
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
export default BoxInput;