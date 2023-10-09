import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Services from "../../Components/Services/Services";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo);


    const eventData = useLoaderData()

    return (
        <>
            <Banner></Banner>
            <Services eventData={eventData}></Services>
        </>
    );
};

export default Home;