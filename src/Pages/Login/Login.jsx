
import { Input, Button, Divider } from "@nextui-org/react";
import './Login.css'


const Login = () => {


  const handleLogin = (e) => {
    e.preventDefault()

  }

  return (
    <div className="max-w-screen-lg mx-auto min-h-[calc(100vh-128px)] overflow-y-auto p-4 grid justify-center items-center">
      <div className="max-w- mx-auto w-full grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-14 mb-6 md:mb-0">

        <div>
          <img src="/login.svg" className="" />
        </div>

        <div>
          <div className="mb-6 text-center">
            <h2 className="text-6xl font-bold">Welcome Back!</h2>
            <p className="text-gray-500">Login to continue</p>
          </div>
          <Divider className="my-4" />
          <form onSubmit={handleLogin} className=" flex flex-col gap-6 items-center">


            <Input
              className="pt-4 rounded-none"
              key="email"
              type="email"
              label="Enter Your Email"
              labelPlacement="outside"
            // description={placement}
            />

            <Input
              className="pt-4 border-black"
              key="outside1"
              type="password"
              label="Enter Your Password"
              labelPlacement="outside"
            // description={placement}
            />

            <Button color="primary" type="submit" className="w-40">
              Login
            </Button>

            <div>
              <p>Don&apos;t have account? Sign Up Here</p>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}

export default Login