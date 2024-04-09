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
        modal.style.display = "flex";
        if(document.getElementById("signUp").style.display == "none"){
            document.getElementById("signUp").style.display = null
        }
        document.getElementById("logIn").style.display = "none"
    };
    // handle Login
    function handleLogin(){
        let modal = document.getElementById("modal");
        modal.style.display =  "flex";
        if(document.getElementById("logIn").style.display == "none"){
            document.getElementById("logIn").style.display = null
        }
        document.getElementById("signUp").style.display = "none";
    }
    // handle dấu (x)
    const handleClose = () => {
        let modal = document.getElementById("modal");
        modal.style.display = null;
    };

    // if clicking outside the form close it
    const handleClickOutsideModal = (event) => {
        var modal = document.getElementById("modal");
        var overlay = document.getElementById("overlay")
        if (event.target == overlay ) {
            modal.style.display = "none";
        }
    };

    useEffect(() => {
        
        window.addEventListener("click",handleClickOutsideModal);
        
    }, []);
    
   

    // // Get the button that opens the modal
    // var btnSignUp = document.getElementById("signUp");
    // var btnLogin = document.getElementById("logIn");

    

    // // When the user clicks the button, open the modal 
    // function handleSignUp() {
    //     var modal = document.getElementById("modal");
    //     modal.style.display = "block";
    //     if(document.getElementById("signUp").style.display == "none"){
    //             document.getElementById("signUp").style.display = "block"
    //         }
    //     document.getElementById("logIn").style.display = "none"
    // }

    // function handleLogin() {
    //     var modal = document.getElementById("modal");
    //     modal.style.display = "block";
    //     if(document.getElementById("logIn").style.display == "none"){
    //             document.getElementById("logIn").style.display = "block"
    //         }
    //     document.getElementById("signUp").style.display = "none";
        
    // }

    // // When the user clicks on <span> (x), close the modal
    // function handleClose() {
    //     var modal = document.getElementById("modal");
    //     modal.style.display = "none";
        
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // function handle(event) {
    //     var modal = document.getElementById("modal");
    //     var overlay = document.getElementById("overlay")
    //     if (event.target == overlay ) {
    //         modal.style.display = "none";
    //     }
        
    // }
    // useEffect(()=>{
        
    //     window.addEventListener("click",handle)
    // },[])

   
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
                    <div id="overlay" className="modal_overlay"></div>
                    <div id="body" className="modal_body">
                        <div className="auth-form ">
                            <div className=" w-full flex justify-end p-3">
                                <span onClick={handleClose} id="close" className=" w-6 h-6 text-3xl flex justify-center items-center text-center cursor-pointer "  >
                                    &times;
                                </span>
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