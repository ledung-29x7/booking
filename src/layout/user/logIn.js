import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/contexts';
import { actions } from '../../store/action';
import $ from 'jquery';

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
        <div className="flex flex-col gap-8 px-8 m-4 mt-0">
            {/* modal header */}
            <div className="auth-form_header">
                <div className="flex justify-between mb-4 mt-2">
                    <h3 className=" text-3xl font-semibold">Login</h3>
                    <span onClick={handleSignUp} className="auth-form_btn ">SignUp</span>
                </div>
            </div>

            {/* input  */}
            <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
                <div className="">
                    <input className="w-full box px-2 h-11 outline-none"
                        type="text"
                        name="userName"
                        value={formData.userName}
                        placeholder="Username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input className="w-full box px-2 h-11 outline-none"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
            </form>
            {/* modal footer */}
            <div className="">
                <button className="border rounded-lg  w-full h-12 font-bold bg-cyan-200"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
export default Login;