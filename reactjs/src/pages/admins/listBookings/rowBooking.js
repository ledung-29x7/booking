import { useNavigate } from "react-router-dom";

function RowBooking({id,customer,nameHotel,bookingDate,price,d}){
    const navigate = useNavigate()
    return(
        <tbody className=" text-gray-600 h-11">
            <td className=" text-center">{id}</td>
            <td>{customer}</td>
            <td>{nameHotel}</td>
            <td>{bookingDate}</td>
            <td>{price}</td>
            <td className=" text-center">
                <button onClick={()=>navigate("/admin/listBooking/detail")}  className="buttom_crud w-14 h-8 bg-blue-500 ">Details</button>
            </td>
        </tbody>
    );
}
export default RowBooking;