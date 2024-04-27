import { useNavigate } from "react-router-dom";

function RowBooking({hotel,confirmationNo,customer,totalPrice,paymentStatus,}){
    const navigate = useNavigate()
    return(
        <tbody className=" text-gray-600 h-11">
            <td className=" text-center">{hotel}</td>
            <td>{confirmationNo}</td>
            <td>{customer}</td>
            <td>{totalPrice}</td>
            <td>{paymentStatus}</td>
            <td className=" text-center">
                <button onClick={()=>navigate("/manage/manageBooking/detail")}  className="buttom_crud w-14 h-8 bg-blue-500 ">Details</button>
            </td>
        </tbody>
    );
}
export default RowBooking;