import { Link } from "react-router-dom";

function HeaderAdmin() {
    return (
        <header className=" containerr px-8 flex justify-between items-center h-[96px] " >
            <div className=" flex items-center gap-24 h-full">
                {/* logo home */}
                <div className="h-full">
                    <Link className=" h-full flex items-center" to={"/"} >
                        <div className=" ">
                            Home
                        </div>
                        <div>
                            <span>
                                <span></span>
                                <img src="" alt="" />
                            </span>
                        </div>
                    </Link>
                </div>
               
            </div>
            {/* đăng nhập đăng xuất */}
            <div className=" flex gap-10 items-center">
                <button className=" bg-cyan-200 border-cyan-200 flex items-center justify-center  bottom font-bold "
                    >
                    Sign up / Login
                </button>
            </div>

        </header>

    );
}
export default HeaderAdmin;