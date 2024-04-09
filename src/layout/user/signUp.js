

function SignUp()
{
    
    return(
        <div className="flex flex-col gap-8 px-8 m-4 mt-0">
                {/* modal header */}
                <div className="auth-form_header">
                    <div className="flex justify-between mb-4 mt-2">
                        <h3 className=" text-3xl font-semibold">SignUp</h3>
                        <span className="auth-form_btn ">Login</span>
                    </div>
                </div>

                {/* input  */}
                <div className="flex flex-col gap-5 ">
                
                    <div className="">
                        <div>Username</div>
                        <input className="w-full box px-2 h-11 border" type="text" placeholder="Username"/>
                    </div>
                    <div>
                        <div>Password</div>
                        <input className="w-full box px-2 h-11 border" type="password" placeholder="Password"/>
                    </div>
                </div>
                {/* modal footer */}
                <div className="">
                    <button className="border box w-full h-12 font-bold bg-cyan-200">SignUp</button>
                </div>  
            </div>
    );
}
export default SignUp;