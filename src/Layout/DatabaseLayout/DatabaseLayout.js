import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import Header from '../../SharedPage/Header/Header';

const DatabaseLayout = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
             <Header></Header>
            <div className="drawer w-10/12 mx-auto drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <Outlet></Outlet>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {
                        isAdmin === 'admin' ? <><li><Link to='/dashboard/allUsers'>All Users</Link></li>
                        <li><Link to='/dashboard/allSellar'>All Sellar</Link></li></> : isAdmin === 'seller' ? <><li><Link to='/dashboard/addProduct'>Add-Product</Link></li>
                <li><Link to='/dashboard/myProduct'>Add-Product</Link></li></> :  <li><Link to="/dashboard/myorders" >My-Orders</Link></li>
                    }
               
                
               
                {/* <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                <li><Link to='/dashboard/allSellar'>All Sellar</Link></li> */}
               
                </ul>
            
            </div>
            </div>
            
        </div>
    );
};

export default DatabaseLayout;