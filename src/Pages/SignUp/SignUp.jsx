import { Button, Checkbox, Divider } from "@nextui-org/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useState } from "react";



const SignUp = () => {
    const [successMsg, setSuccessMsg] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const [togglePass, setTogglePass] = useState(false)

    const handleSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // Reset form submission message
        setSuccessMsg('')
        setErrMessage('');

        if(password.length < 6){
            setErrMessage("Password should be at least 6 characters")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setErrMessage("Password must have at least one uppercase letter");
            return;
        }
        else if(!/[a-z]/.test(password)){
            setErrMessage("Password must have at least one lowercase letter");
            return;
        }
        // Create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
            setSuccessMsg("User Created Successfully")
            console.log(user.user);
        })
        .catch(error => {
            setErrMessage(error.code);
            console.log(errMessage);
        });

    }
       

    return (
        <div className="max-w-screen-lg mx-auto min-h-[calc(100vh-128px)] overflow-y-auto p-4 grid md:grid-cols-3 grid-cols-1 justify-center items-center mb-6 md:mb-0">


            <div className="col-span-2 md:order-2">
                <img src="/sign-up.svg" />
            </div>

            <div className="col-span-1 md:order-1">
                <div className="mb-6 text-center">
                    <h2 className="text-6xl font-bold">Sign Up</h2>

                </div>
                <Divider className="my-10" />

                <form onSubmit={handleSignUp} className="max-w-md mx-auto text-center">

                    <label htmlFor="email">
                        <input
                            className="w-full border-2 border-neutral-400 px-3 py-2 mb-3 rounded-md"
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            required
                        />
                    </label>

                    <label htmlFor="password" className="relative">
                        <input
                            className="w-full border-2 border-neutral-400 px-3 py-2 mb-3 mt-3 rounded-md"
                            name="password"
                            type={togglePass? "text" : "password"}
                            placeholder="Create new password"
                            required
                        />
                        <Checkbox size="md" className="absolute bottom-0 right-0" color="warning" radius="sm" onChange={()=>setTogglePass(!togglePass)}></Checkbox>
                    </label>

                    {successMsg && <p className="text-green-500">{successMsg}</p>}
                    {errMessage && <p className="text-red-500 text-left">{errMessage}</p>}
                    <Button color="primary" type="submit" className="w-40 bg-[#ff725e] text-white my-4 mt-3">
                        Sign up
                    </Button>
                    <div>
                        <p>Already have account? <NavLink to="/login" className="text-blue-500 underline">Login Here</NavLink></p>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default SignUp;