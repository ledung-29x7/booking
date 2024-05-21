import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BoxInputUser({icon,type,nameInput,value,placeholder,onChange}) {
    return (
       <div className='mt-25'>
         <div className="flex items-center gap-2  ">
            <div className='pl-4 pb-1 '>
                <FontAwesomeIcon style={{ color: "#a4adbc" }} icon={icon} />
            </div>
            <input className=" outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type={type}
                name={nameInput}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
       </div>
    );
}
export default BoxInputUser;