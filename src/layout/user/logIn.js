import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/contexts';
import { actions } from '../../store/action';
import $ from 'jquery';
import BoxInputUser from './boxInputUser';

function Login() {

    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });
    const [, dispatch] = useStore()
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    // open form SingUp
    function handleSignUp() {
        dispatch(actions.Modal(true)); // deponsit action = true for form signUp in header
    }

    // write info
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // submit
    const handleSubmit = (e) => {
        e.preventDefault();

        $.ajax({
            url: '',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: (data) => {
                if (data.errors) {
                    setErrors(data.errors);
                    alert('Login failed!');
                } else {
                    dispatch()
                    navigate('/hotel');
                }
            },
            error: (error) => {
                alert("login failed!")
            },
        });
    };

    return (
        <div className="flex flex-col gap-8 px-8 mx-4 mb-12 mt-0">
            {/* modal header */}
            <div className="auth-form_header">
                <div className="flex justify-between mb-4 mt-2">
                    <h1 className=" text-3xl font-semibold">Đăng Nhập</h1>
                    <span onClick={handleSignUp} className="auth-form_btn ">Đăng Ký</span>
                </div>
            </div>

            {/* input  */}
            <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
                <BoxInputUser
                    icon={"fa-solid fa-user"}
                    type={"text"}
                    nameInput={"userName"}
                    placeholder={"Tên tài khoản"}
                    value={formData.userName}
                    onChange={handleChange}
                />

                <BoxInputUser
                    icon={"fa-solid fa-lock"}
                    type={"password"}
                    nameInput={"password"}
                    placeholder={"Mật khẩu"}
                    value={formData.password}
                    onChange={handleChange}
                />
            </form>
            {/* modal footer */}
            <div className="">
                <button className="border text-teal-800 rounded-lg  w-full h-12 font-bold bg-cyan-200">
                    Đăng Nhập
                </button>
            </div>
        </div>
    );
}
export default Login;