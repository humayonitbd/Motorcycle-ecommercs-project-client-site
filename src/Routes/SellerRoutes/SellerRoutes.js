import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useSeller from '../../hooks/useSeller/useSeller';
import Loading from '../../SharedPage/Loading/Loading';

const SellerRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(user?.email)
    const location = useLocation();
    if(loading || sellerLoading){
        return <Loading></Loading>
    }

    if(user?.email && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoutes;