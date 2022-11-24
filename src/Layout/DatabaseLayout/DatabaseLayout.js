import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../SharedPage/Header/Header';

const DatabaseLayout = () => {
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
                <li><Link to="/dashboard/myorders" >My-Orders</Link></li>
                <li><Link to='/dashboard/addProduct'>Add-Product</Link></li>
               
                </ul>
            
            </div>
            </div>
            
        </div>
    );
};

export default DatabaseLayout;