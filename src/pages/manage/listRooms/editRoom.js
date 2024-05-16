import { useStore } from "../../../store/contexts";
import { actions } from "../../../store/action";
import { useEffect, useState } from "react";
import * as apis from "../../../apis";

function EditRoom({ manage }) {
  const role = ["Admin", "Customer", "Manager"];
  const [valueEdit, setValueEdit] = useState({
    name: "",
    addressLine: "",
    city: "",
    SingleRoomCount: "",
    SingleRoomPrice: "",
    DoubleRoomCount: "",
    DoubleRoomPrice: "",
  });
  console.log(manage);
  const [state, dispatch] = useStore();
  const { id } = state;

  useEffect(() => {
    setValueEdit(manage);
  }, [manage]);

  function HandleCloseEdit() {
    dispatch(actions.ModalEdit(false));
  }

  function handleChange (e){
    if (e.target.name === "role") {
        // Find the role object from the role array based on the selected role ID
        const selectedRole = role.find(rol => rol.id === parseInt(e.target.value, 10)); // Convert value to integer if necessary
        // Update the state with the selected role object
        setValueEdit(prevState => ({
          ...prevState,
          role: selectedRole
        }));
    } else{
        setValueEdit({...valueEdit,[e.target.name]: e.target.value})
    }
}

function handleSubmit(e) {
    const FetchEdit = async() => {
        try {
            e.preventDefault();
            await apis.getUserRoom("hotels",manage?.id,valueEdit)
            .then(res=>{
                if(res.status === 200){
                    return(
                        dispatch(actions.ModalEdit(false)),
                        dispatch(actions.ModalSuccsessfull(true))
                    )
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    FetchEdit()
}
  return (
    <div className="auth-form">
      <div className="px-10 my-7 flex justify-between w-full h-14 font-bold text-xl border-b border-b-slate-400 ">
        <span>Edit User</span>
        <span
          onClick={HandleCloseEdit}
          className=" w-6 h-6 text-2xl text-slate-500 flex justify-center items-center text-center cursor-pointer "
        >
          &times;
        </span>
      </div>
      <div className=" px-10">
        {/* title edit */}
        <form onSubmit={handleSubmit} className=" my-10 flex flex-col gap-10">
          {/* form edit */}
          <div className=" flex flex-col gap-6">
            <div className=" border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9 ">
              <input
                className="outline-none w-11/12 h-full"
                placeholder="Hotel Name"
                value={valueEdit.HotelName}
                type="text"
                name="hotelName"
                onChange={handleChange}
              />
            </div>
            <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
              <input
                className="outline-none w-11/12 h-full"
                type="text"
                placeholder="Address Line"
                name="AddressLine"
                value={valueEdit.AddressLine}
                onChange={handleChange}
              />
            </div>
            <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
              <input
                className="outline-none w-11/12 h-full"
                placeholder="Country"
                type="text"
                name="Country"
                value={valueEdit.Country}
                onChange={handleChange}
              />
            </div>
            <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
              <input
                className="outline-none w-11/12 h-full"
                placeholder="Single Room Count"
                type="text"
                name="SingleRoomCount"
                value={valueEdit.SingleRoomCount}
                onChange={handleChange}
              />
            </div>
            <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
              <input
                className="outline-none w-11/12 h-full"
                placeholder="Single Room Price"
                type="text"
                name="SingleRoomPrice"
                value={valueEdit.SingleRoomPrice}
                onChange={handleChange}
              />
            </div>
            <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
              <input
                className="outline-none w-11/12 h-full"
                placeholder="double Room Count"
                type="text"
                name="DoubleRoomCount"
                value={valueEdit.DoubleRoomCount}
                onChange={handleChange}
              />
            </div>
            <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
              <input
                className="outline-none w-11/12 h-full"
                placeholder="Double Room Price"
                type="text"
                name="DoubleRoomPrice"
                value={valueEdit.DoubleRoomPrice}
                onChange={handleChange}
              />
            </div>

            <div className="border-gray-500 border text-right rounded-lg overflow-hidden text-sm h-9">
              <select
                className="outline-none w-11/12 h-full"
                value={valueEdit.role}
                name="role"
                onChange={handleChange}
              >
                {role.map((rol) => (
                  <option value={rol}>{rol}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="border-gray-500 border text-right rounded-lg overflow-hidden h-9">
            <button className=" bg-blue-500 h-full w-full font-bold text-white">
              Update
            </button>
          </div>
        </form>
        {/* end form */}
        <div className=" h-14 flex justify-end items-center">
          <button
            onClick={HandleCloseEdit}
            className=" rounded-md text-white bg-zinc-400  font-bold w-32 h-8 "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditRoom;
