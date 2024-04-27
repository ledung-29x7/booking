import { useNavigate } from "react-router-dom";

function RowList({id,customer,nameHotel,bookingDate,price,}){
    const navigate = useNavigate()
    return(
        <tbody className=" text-gray-600 h-11">
            {/* <tr className=" text-center">{id}</tr>
            <tr>{customer}</tr>
            <tr>{nameHotel}</tr>
            <tr>{bookingDate}</tr>
            <tr>{price}</tr> */}
            <tr className=" text-center">
                <button onClick={()=>navigate("/manage/listRoom/addHotel")}  className="h-10 px-6 font-semibold rounded-md bg-black text-white">Add Hotel</button>
            </tr>
        </tbody>
    );
}
export default RowList;