import { Button, Checkbox, Divider } from "@nextui-org/react";
import './Login.css'
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";


const Login = () => {
  const [togglePass, setTogglePass] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(user => console.log(user.user.email))
      .catch(error => console.error(error))
  }

  return (
    <div className="max-w-screen-lg mx-auto min-h-[calc(100vh-128px)] overflow-y-auto p-4 grid md:grid-cols-3 grid-cols-1 justify-center items-center mb-6 md:mb-0">

      <div className="col-span-2">
        <img src="/login.svg" />
      </div>

      <div className="col-span-1">
        <div className="mb-6 text-center">
          <h2 className="text-6xl font-bold">Welcome Back!</h2>
          <p className="text-gray-500">Login to continue</p>
        </div>
        <Divider className="my-10" />
        <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-5 text-center">

          <label htmlFor="email">
            <input
              className="w-full border-2 border-neutral-400 px-3 py-2 mb-3 rounded-md"
              name="email"
              type="email"
              label="Enter Your Email"
            />
          </label>

          <label htmlFor="password" className="relative">
            <input
              className="w-full border-2 border-neutral-400 px-3 py-2 mb-3 mt-3 rounded-md"
              name="password"
              type={togglePass ? "text" : "password"}
              placeholder="Create new password"
              required
            />
            <Checkbox size="md" className="absolute bottom-0 right-0" radius="sm" onChange={() => setTogglePass(!togglePass)}></Checkbox>
          </label>
          {

          }
          <Button color="primary" type="submit" className="w-40">
            Login
          </Button>

          <div>
            <p>Don&apos;t have account? <NavLink to="/sign-up" className="text-blue-500 underline">Sign up Here</NavLink></p>
          </div>

        </form>
      </div>

    </div>
  );
}

export default Login