import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "../../store/contexts";
import { actions } from "../../store/action";
import * as apis from "../../apis";
import MenuItem from "./menuItem";
import SignUp from "../user/signUp";
import Login from "../user/logIn";

function HeaderAdmin() {
    const [isShowingSignUp, setIsShowingSignUp] = useState(false);
    const [isShowingLogin, setIsShowingLogin] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [state, dispatch] = useStore();
    const { isSignUp, isLogin, checkLogin } = state;

    useEffect(() => {
        checkLoggedIn();
    }, [checkLogin])

    // hủy Cookie
    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // Hàm để lấy giá trị của một cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // check xem người dùng đã đăng nhập chưa
    function checkLoggedIn() {
        var token = getCookie("token");
        if (token) {
            // Gọi các API hoặc thực hiện các hành động khác khi người dùng đã đăng nhập
            setIsChecking(true);

        } else {
            // Hiển thị form đăng nhập hoặc các nút chức năng đăng nhập
            setIsChecking(false);
        }
    }


    // handle Login
    function handleLogin() {
        setIsShowingLogin(true);
        dispatch(actions.ModalLogin(true));
    }

    // show SignUp
    useEffect(() => {
        const OpenSignUp = (isSignUp) => {
            if (isSignUp === true) {
                dispatch(actions.ModalLogin(false));
            }
            return setIsShowingSignUp(isSignUp), setIsShowingLogin(isLogin);
        };
        OpenSignUp(isSignUp);
    }, [isSignUp]);

    // show login
    useEffect(() => {
        const OpenLogin = (isLogin) => {
            if (isLogin === true) {
                dispatch(actions.Modal(false));
            }
            return setIsShowingLogin(isLogin), setIsShowingSignUp(isSignUp);
        };
        OpenLogin(isLogin);
    }, [isLogin]);

    // handle Logout
    const handleLogout = () => {
        const FetchData = async () => {
            try {
                await apis.LogOut().then((res) => {
                    if (res.status === 200) {
                        deleteCookie("token");
                        checkLoggedIn()
                        dispatch(actions.CheckLogin(false))
                    }
                });
            } catch (error) {
                console.error(error);
            }
        };
        FetchData();
    };

    // close SignUp and Login
    function handleClose() {
        setIsShowingLogin(false);
        setIsShowingSignUp(false);
    }

    // when click vao outside form Login or SignUp thi close
    const handleClickOutsideModal = (event) => {
        var overlay = document.getElementById("overlay");
        if (event.target === overlay) {
            setIsShowingLogin(false);
            setIsShowingSignUp(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("click", handleClickOutsideModal);
    }, []);

    return (
        <header className=" containerr px-8 flex justify-between items-center h-[96px] " >
            <div className=" flex items-center gap-24 h-full">
                {/* logo home */}
                <div className="h-full">
                    <Link className=" h-full flex items-center" to={"/"} >
                        <div className=" ">
                            Trang chủ
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
            {
                isChecking ?
                    (<div>
                        <button onClick={handleLogout} className=" border  w-36 h-20 ">
                            <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                        </button>
                        <div>
                            <span className="">{sessionStorage.getItem("nameUser")}</span>
                        </div>
                    </div>
                    )
                    :
                    (
            <div className=" flex gap-10 items-center">
                            <button
                                className=" bg-cyan-200 flex items-center justify-center  bottom font-bold "
                    onClick={handleLogin}
                    >
                Đăng ký / Đăng nhập
                </button>
            </div>
                    )
            }

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

    );
}
export default HeaderAdmin;