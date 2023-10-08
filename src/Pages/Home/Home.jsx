import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Services from "../../Components/Services/Services";

const Home = () => {
    
    const eventData = useLoaderData()
    // console.log(data);

    return (
        <>
            <Banner></Banner>
            <Services eventData={eventData}></Services>
        </>
    );
};

export default Home;