import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Services from "../../Components/Services/Services";
import About from "../../Components/Questions/Questions";
import Newsletter from "../../Components/Newsletter/Newsletter";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Home = () => {
    
    const eventData = useLoaderData()
    // console.log(data);

    return (
        <>
            <Banner></Banner>
            <Services eventData={eventData}></Services>
            <About></About>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;