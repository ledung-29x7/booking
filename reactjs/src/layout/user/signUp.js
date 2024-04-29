import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/contexts';
import { actions } from '../../store/action';
import * as apis from "../../apis"
import BoxInputUser from './boxInputUser';

function SignUp() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [, dispatch] = useStore()

    // open Form Login
    function handleLogin() {
        dispatch(actions.ModalLogin(true));
    }

    //  write info
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const FetchData = async() => {
            await apis.addUser(formData)
        }
        FetchData();
    };

    return (

        <div className="flex flex-col gap-8 px-8 mx-4 mb-12 mt-0">
            {/* modal header */}
            <div className="auth-form_header">
                <div className="flex justify-between mb-4 mt-2">
                    <h3 className=" text-3xl font-semibold">SignUp</h3>
                    <span onClick={handleLogin} className="auth-form_btn ">Login</span>
                </div>
            </div>

            {/* input  */}
            <div className="flex flex-col gap-5 ">
                <BoxInputUser
                    icon={"fa-solid fa-envelope"}
                    type={"text"}
                    nameInput={"email"}
                    placeholder={"Email"}
                    value={formData.email}
                    onChange={handleChange}
                />
                <BoxInputUser
                    icon={"fa-solid fa-user"}
                    type={"text"}
                    nameInput={"userName"}
                    placeholder={"User Name"}
                    value={formData.userName}
                    onChange={handleChange}
                />
                <BoxInputUser
                    icon={"fa-solid fa-lock"}
                    type={"password"}
                    nameInput={"password"}
                    placeholder={"Password"}
                    value={formData.password}
                    onChange={handleChange}
                />
                <BoxInputUser
                    icon={"fa-solid fa-lock"}
                    type={"password"}
                    nameInput={"confirmPassword"}
                    placeholder={"Confirm Password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </div>
            {/* modal footer */}
            <div className="">
                <button className=" rounded-lg w-full h-12 font-bold bg-cyan-200"
                    onSubmit={handleSubmit}
                >
                    SignUp
                </button>
            </div>
        </div>

    );
}
export default SignUp;