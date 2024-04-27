import RowList from "./rowList";

function listRoom(){
    
    return(
        <div className=" my-10 px-10">
        <div className=" containerr w-full">
            <div className=" flex justify-between items-center">
                <div className="px-10 my-7 flex justify-between w-full h-14 font-bold text-xl border-b border-b-slate-800">
                <span className="text-2xl">Add New Hotel</span>
                </div>
            </div>
            <div className=" w-full frame mt-5 shadow_uslist relative">
                <table className=" w-full shadow size-full container mx-auto">
                    <tr className="w-full ">
                    <tr>
                                <h3>Hotel Name:</h3>
                              <input type="text" className="w-full bg-white shadow rounded-full border-2 border-black-600 "></input>
                            </tr>
                            <tr>
                                <h3>Address Line:</h3>
                              <input type="text" className="w-full bg-white shadow rounded-full border-2 border-black-600"></input>
                            </tr>
                            <tr>
                                <h3>City:</h3>
                              <input type="text" className="w-full bg-white shadow rounded-full border-2 border-black-600"></input>
                            </tr>
                            <tr>
                                <h3>Country:</h3>
                              <input type="text" className="w-full bg-white shadow rounded-full border-2 border-black-600"></input>
                            </tr>
                            <tr>
                                <h3>Single Room Count:</h3>
                              <input type="text" className="w-full bg-white shadow rounded-full border-2 border-black-600"></input>
                            </tr>
                            <tr>
                                <h3>Single Room Price($):</h3>
                              <input type="text" className="w-full bg-white shadow rounded-full border-2 border-black-600"></input>
                            </tr>
                            <tr>
                                <h3>Double Room Count:</h3>
                              <input type="text" className="w-full bg-white shadow rounded-full border-2 border-black-600"></input>
                            </tr>
                            <tr>
                                <h3>Double Room Price ($):</h3>
                              <input type="text" className="w-full bg-white shadow rounded-full border-2 border-black-600"></input>
                            </tr>
                    </tr>
                    <RowList
                        
                    />
                </table>
            </div>
        </div>
    </div> 
    );
}
export default listRoom;
