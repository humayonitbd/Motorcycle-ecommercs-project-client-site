import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import Header from '../../SharedPage/Header/Header';

const DatabaseLayout = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin)
    return (
        <div className='bg-white'>
             <Header></Header>
            <div className="drawer w-12/12 mx-auto drawer-mobile bg-white ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <Outlet></Outlet>
            
            </div> 
            <div className="drawer-side bg-slate-500 ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80  text-black">
                    {
                        isAdmin === 'admin' ? <><li className='bg-white rounded '><Link to='/dashboard/allUsers'>All Users</Link></li>
                        <li className='bg-white rounded '><Link to='/dashboard/allSellar'>All Sellar</Link></li><li className='bg-white rounded '><Link to='/dashboard/roportProduct'>Report Products</Link></li></> : isAdmin === 'seller' ? <><li className='bg-white rounded '><Link to='/dashboard/addProduct'>Add-Product</Link></li>
                <li className='bg-white rounded '><Link to='/dashboard/myProduct'>My-Product</Link></li></> :  <><li className='bg-white rounded '><Link to="/dashboard/myorders" >My-Orders</Link></li></>
                    }
               
                
                </ul>
            
            </div>
            </div>
            
        </div>
    );
};

export default DatabaseLayout;