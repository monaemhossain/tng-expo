import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Components/Loader/Loader';

const PrivateRoute = ({children}) => {

    const { user, loader } = useContext(AuthContext)
    if(loader){
        return <Loader></Loader>
    }
    if(user){
        return children
    }


    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}