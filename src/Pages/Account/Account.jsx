import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Account = () => {
    const data = useContext(AuthContext);
    const userData = data.user
    console.log(userData);
    return (
        <div className="min-h-[calc(100vh-128px)] max-w-screen-lg mx-auto py-14 grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-10">
            <div>
                <img src="/welcome.svg" alt="" />
            </div>
            <div className="text-center grid gap-6">
                <img src={userData.photoURL} alt="" className="rounded-full mx-auto"/>
                <h1 className="text-6xl">{userData.displayName}</h1>
                <p className="text-4xl">Your email: {userData.email}</p>
            </div>
        </div>
    );
};

export default Account;