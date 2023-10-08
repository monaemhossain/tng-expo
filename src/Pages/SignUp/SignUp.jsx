import { Input, Button, Divider } from "@nextui-org/react";
import { NavLink } from "react-router-dom";



const SignUp = () => {


    const handleLogin = (e) => {
        e.preventDefault()

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

                <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-8 text-center">


                    <Input
                        className=""
                        key="text"
                        type="text"
                        label="Enter Your Name"
                        labelPlacement="outside"
                        isRequired
                    />

                    <Input
                        className=""
                        key="email"
                        type="email"
                        label="Enter Your Name"
                        labelPlacement="outside"
                        isRequired
                    />

                    <Input
                        className=""
                        key="password"
                        type="password"
                        label="Create new Password"
                        labelPlacement="outside"
                        isRequired
                    />

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