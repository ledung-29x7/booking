import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "../../store/contexts";
import { actions } from "../../store/action";
import MenuItem from "./menuItem";
import SignUp from "../user/signUp";
import Login from "../user/logIn";

function HeaderUp() {
    const [isShowingSignUp, setIsShowingSignUp] = useState(false);
    const [isShowingLogin, setIsShowingLogin] = useState(false);
    const [state, dispatch] = useStore();
    const { isSignUp, isLogin } = state;


    // handle Login
    function handleLogin() {
        setIsShowingLogin(true);
        setIsShowingSignUp(false);
    }

    // show SignUp
    useEffect(() => {
        const OpenSignUp = (isSignUp) => {
            if (isSignUp === true) {
                dispatch(actions.ModalLogin(false))
            }
            return (
                setIsShowingSignUp(isSignUp),
                setIsShowingLogin(isLogin)
            );
        };
        OpenSignUp(isSignUp);
    }, [isSignUp])

    // show login
    useEffect(() => {
        const OpenLogin = (isLogin) => {
            if (isLogin === true) {
                dispatch(actions.Modal(false))
            }
            return (
                setIsShowingLogin(isLogin),
                setIsShowingSignUp(isSignUp)
            );
        };
        OpenLogin(isLogin);
    }, [isLogin])

    // close SignUp and Login
    function handleClose(){
        setIsShowingLogin(false);
        setIsShowingSignUp(false)
    }

    // when click vao outside form Login or SignUp thi close
    const handleClickOutsideModal = (event) => {
        var overlay = document.getElementById("overlay")
        if (event.target === overlay) {
            setIsShowingLogin(false);
            setIsShowingSignUp(false);
        }
        console.log(event.target)
    };
    
    useEffect(() => {
        window.addEventListener("click", handleClickOutsideModal);
    }, []);

    return (
        <header className="container m-auto flex justify-between items-center h-[96px]" >
            <div className=" flex items-center gap-10 h-full">
                {/* logo home */}
                <div className="h-full">
                    <Link className=" h-full flex items-center" to={"/"} >
                        <img className=" w-5 h-5 " src="./icon/icons8-home-50.png" alt="" />
                    </Link>
                </div>
                {/* thanh điều hướng */}
                <div className="flex gap-10 items-center cursor-pointer h-full">
                    <MenuItem to={'/hotel'} title="Khách sạn" />
                    <MenuItem to={'/thingsToDo'} title="Blog" />
                    <MenuItem to={'/bookings'} title="Đặt phòng" />
                    <MenuItem to={'/parnership'} title="Đối tác" />
                </div>
            </div>
            {/* đăng nhập đăng xuất */}
            <div className=" flex gap-10 items-center">
                <button className=" bg-cyan-200 flex items-center justify-center  bottom font-bold "
                    onClick={handleLogin}>
                    Đăng nhập / Đăng ký
                </button>
            </div>
            {isShowingSignUp ?
                <div className="modal">
                    <div className="flex h-full w-full">
                        <div id="overlay" className="modal_overlay"></div>
                        <div className="modal_body">
                            <div className="auth-form ">
                                <div className=" w-full flex justify-end p-3">
                                    <span onClick={handleClose} className=" w-6 h-6 text-3xl flex justify-center items-center text-center cursor-pointer "  >
                                        &times;
                                    </span>
                                </div>
                                <SignUp />
                            </div>
                        </div>
                    </div>
                </div>
                : null}
            {isShowingLogin ?
                <div className="modal">
                    <div className="flex h-full w-full">
                        <div id="overlay" className="modal_overlay"></div>
                        <div className="modal_body">
                            <div className="auth-form ">
                                <div className=" w-full flex justify-end p-3">
                                    <span onClick={handleClose} className=" w-6 h-6 text-3xl flex justify-center items-center text-center cursor-pointer "  >
                                        &times;
                                    </span>
                                </div>
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
                : null}

        </header>
    )
}
export default HeaderUp;