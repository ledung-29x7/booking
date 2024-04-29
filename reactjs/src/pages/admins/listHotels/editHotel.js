import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";

function EditHotel({ hotel }) {

    const [,dispatch] = useStore();
    
    function HandleCloseEdit() {
        dispatch(actions.ModalEdit(false));
    }
    return (
        <div className="auth-form">
                <div className=" px-10 my-7 flex justify-between w-full h-14 font-bold text-xl border-b border-b-slate-800 ">
                    <span>Edit Hotel</span>
                    <span onClick={HandleCloseEdit} className=" w-6 h-6 text-2xl text-slate-500 flex justify-center items-center text-center cursor-pointer "  >
                        &times;
                    </span>
                </div>
            <div className=" px-10">
                {/* title edit */}
                <div className=" my-7 flex flex-col gap-10">
                    {/* form edit */}
                    <div className=" flex flex-col gap-6">
                        <div className=" border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9 ">
                            <input
                                className="outline-none w-11/12 h-full"
                                placeholder="Name Hotel"
                                type="text"
                                name=""
                            // value={hotel.nameHotel}
                            />
                        </div>
                        <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
                            <input
                                className="outline-none w-11/12 h-full"
                                type="text"
                                placeholder="Address Line"
                                name=""
                            // value={hotel.addressLine}
                            />
                        </div>
                        <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
                            <input
                                className="outline-none w-11/12 h-full"
                                placeholder="District"
                                type="text"
                                name=""
                            // value={hotel.district}
                            />
                        </div>
                        <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
                            <input
                                className="outline-none w-11/12 h-full"
                                placeholder="Municipality"
                                type="text"
                                name=""
                            // value={hotel.municipality}
                            />
                        </div>
                    </div>
                    <div className="border-gray-500 border text-right rounded-lg overflow-hidden h-9">
                        <button className=" bg-blue-500 h-full w-full font-bold text-white">Update</button>
                    </div>
                </div>{/* end form */}
                <div className=" h-14 flex justify-end items-center">
                    <button onClick={HandleCloseEdit} className=" rounded-md text-white bg-zinc-400  font-bold w-32 h-8 ">Cancel</button>
                </div>
            </div>
        </div>
    );
}
export default EditHotel;