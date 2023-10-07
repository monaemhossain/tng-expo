import { Outlet } from 'react-router';
import NavigationBar from '../Components/Header/Navbar/NavigationBar';

const Root = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </>
    );
};

export default Root;