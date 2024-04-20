import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/contexts';
import { actions } from '../../store/action';
import $ from 'jquery';

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

        $.ajax({
            url: '',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: (data) => {
                if (data.errors) {
                    setErrors(data.errors);
                    alert('Registration failed!');
                } else {
                    console.log(data);
                    navigate('/login');
                }
            },
            error: () => {
                alert("adad")

            },
        });
    };

    return (

        <div className="flex flex-col gap-8 px-8 m-4 mt-0">
            {/* modal header */}
            <div className="auth-form_header">
                <div className="flex justify-between mb-4 mt-2">
                    <h3 className=" text-3xl font-semibold">SignUp</h3>
                    <span onClick={handleLogin} className="auth-form_btn ">Login</span>
                </div>
            </div>

            {/* input  */}
            <div className="flex flex-col gap-5 ">
                <div className="">
                    <input className=" w-full box px-2 h-11 outline-none"
                        type="email"
                        name='email'
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <input className="w-full box px-2 h-11 outline-none "
                        type="text"
                        name='userName'
                        placeholder="Username"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input className="w-full box px-2 h-11 outline-none "
                        type="password"
                        name='password'
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input className="w-full box px-2 h-11 outline-none"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmation Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
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