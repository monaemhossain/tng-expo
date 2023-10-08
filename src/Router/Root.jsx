import { Outlet, useLoaderData } from 'react-router';
import NavigationBar from '../Components/Header/NavigationBar/NavigationBar';
import Footer from '../Components/Footer/Footer';

const Root = () => {

    const data = useLoaderData()
    console.log();

    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;