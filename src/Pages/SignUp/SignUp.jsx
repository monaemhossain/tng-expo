import { Input, Button, Divider } from "@nextui-org/react";
import { NavLink } from "react-router-dom";



const SignUp = () => {


    const handleSignUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

    }

    return (
        <div className="max-w-screen-lg mx-auto min-h-[calc(100vh-128px)] overflow-y-auto p-4 grid md:grid-cols-3 grid-cols-1 justify-center items-center mb-6 md:mb-0">


            <div className="col-span-2 md:order-2">
                <img src="/sign-up.svg" className="" />
            </div>

            <div className="col-span-1 md:order-1">
                <div className="mb-6 text-center">
                    <h2 className="text-6xl font-bold">Sign Up</h2>

                </div>
                <Divider className="my-10" />

                <form onSubmit={handleSignUp} className="max-w-md mx-auto space-y-6 text-center">


                    <label htmlFor="name">
                        <input
                            className="w-full border-2 border-neutral-400 px-3 py-2 mb-3 rounded-md"
                            name="name"
                            type="text"
                            placeholder="Enter Your Full Name"
                        />
                    </label>

                    <label htmlFor="email">
                        <input
                            className="w-full border-2 border-neutral-400 px-3 py-2 mb-3 rounded-md"
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                        />
                    </label>

                    <label htmlFor="password">
                        <input
                            className="w-full border-2 border-neutral-400 px-3 py-2 mb-3 rounded-md"
                            name="password"
                            type="password"
                            placeholder="Create new password"
                        />
                    </label>

                    <Button color="primary" type="submit" className="w-40 bg-[#ff725e] text-white">
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