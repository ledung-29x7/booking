import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import MenuItem from "./menuItem";
import SignUp from "../user/signUp";
import Login from "../user/logIn";

function HeaderUp() {
    // handle SignUp
    function handleSignUp() {
        let modal = document.getElementById("modal");
        modal.style.display = "block";
        if(document.getElementById("signUp").style.display == "none"){
            document.getElementById("signUp").style.display = "block"
        }
        document.getElementById("logIn").style.display = "none"
    };
    // handle Login
    function handleLogin(){
        let modal = document.getElementById("modal");
        modal.style.display =  "block";
        if(document.getElementById("logIn").style.display == "none"){
            document.getElementById("logIn").style.display = "block"
        }
        document.getElementById("signUp").style.display = "none";
    }
    // handle dấu (x)
    function handleClose() {
        let modal = document.getElementById("modal");
        modal.style.display = "none";
    };
    // if clicking outside the form close it
    const handleClickOutsideModal = (event) => {
        let modal = document.getElementById("modal");
         // Assuming you have an element with id "modal"
        if (modal.contains(event.target)) {
            modal.style.display = "none";
        }
    };
    const handleClickModalBody = (event) => {
        event.stopPropagation();
    }
    useEffect(() => {
        let modalBody = document.getElementById("body");
        modalBody.addEventListener('click',handleClickModalBody)
        return () => {
            modalBody.removeEventListener('click',handleClickModalBody)
        };
    },[])

    useEffect(() => {
        
        window.addEventListener('click', handleClickOutsideModal);
        return () => {
            window.removeEventListener('click', handleClickOutsideModal);
        };
    }, []);
    

    return (
        <header className=" containerr flex justify-between items-center h-[96px]" >
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
                {/* thanh điều hướng */}
                <div className="flex gap-14 items-center cursor-pointer h-full">
                    <MenuItem to={'/hotel'} title="Hotel" />
                    <MenuItem to={'/thingsToDo'} title="Things to Do" />
                    <MenuItem to={'/enterprise'} title="Enterprise" />
                    <MenuItem to={'/parnership'} title="Partnership" />
                </div>
            </div>
            {/* đăng nhập đăng xuất */}
            <div className=" flex gap-10 items-center">
                <button className=" w-24 bg-cyan-200 border-4 border-cyan-200 flex items-center justify-center  bottom font-bold " 
                onClick={handleSignUp}>
                    Sign up
                </button>
                
                <button className=" w-24 border-cyan-200 border-4 flex items-center justify-center bottom font-bold"
                onClick={handleLogin} >
                    Login
                </button>
            </div>
            <div id="modal" className="modal">
                <div className="flex h-full w-full">
                    <div className="modal_overlay"></div>
                    <div id="body" className="modal_body">
                        <div className="auth-form ">
                            <div className=" w-full flex justify-end p-3">
                                <img onClick={handleClose} className="w-[20px] h-[20px] cursor-pointer" src="./icon/icons8-x-24.png" alt="" />
                            </div>
                            <div id="signUp">
                                <SignUp />
                            </div>
                            <div id="logIn">
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderUp;