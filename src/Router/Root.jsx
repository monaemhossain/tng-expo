import { Outlet } from 'react-router';
import NavigationBar from '../Components/Header/NavigationBar/NavigationBar';
import Footer from '../Components/Footer/Footer';

const Root = () => {

    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;