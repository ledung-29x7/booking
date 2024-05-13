import RowBooking from "./rowBooking";

function ManagerBooking(){
    
    return(
            <div className=" my-10 px-10">
            <div className=" containerr">
                <div className=" flex justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-4xl w-80">
                            Manager's Bookings
                        </h4>
                        <img className="w-24" src="../icon/heading-border.png" alt="" />
                    </div>
                    {/* <div className="mx-10 ">
                        <button className="buttom_crud w-20 h-8 bg-lime-600">Add</button>
                    </div> */}
                </div>
                <div className="frame mt-5 shadow_uslist relative">
                    <table className=" w-full shadow ">
                        <tr className="sticky top-0 bg-slate-200 h-12">
                            <th>hotel</th>
                            <th>confirmationNo</th>
                            <th>Customer</th>
                            <th>totalPrice</th>
                            <th>TpaymentStatus</th>
                            <th>Details</th>
                        </tr>
                        <RowBooking
                            
                        />
                    </table>
                </div>
            </div>
        </div>
    );
}
export default ManagerBooking;