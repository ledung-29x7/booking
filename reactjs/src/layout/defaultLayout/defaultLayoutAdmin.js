import HeaderAdmin from "../header/headerAdmin";

function DefaultLayoutAdmin({children}){
    return(
        <div>
            <div className="header-wapper">
                <HeaderAdmin/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
export default DefaultLayoutAdmin;