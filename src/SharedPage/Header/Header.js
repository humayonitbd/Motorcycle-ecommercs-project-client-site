import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../../src/assets/baneer-img/logo.png';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user?.email)
    const logOutHandler=()=>{
        logOut()
        .then(() =>{
            toast.success('Logout successfull!')
        })
        .catch(error =>console.log(error))
        
    }
    const menuber=<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/service'>Service</Link></li>
    
    
    
    </>
    return (
        <div className='bg-white shadow-lg py-0'>
        <div className="navbar w-10/12 mx-auto">
            <div className="navbar-start lg:hidden">
                <div className="dropdown ">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                    {menuber} 
               
                    {user?.email ? <><li><Link to='/dashboard'>Dashboard</Link><li className=' ml-3'><Link onClick={logOutHandler} >Log-out</Link></li></li></> : <><button className='btn bg-orange-500 border-none mr-2'> <Link to='/login'>Login</Link></button>
           <button className='btn mr-2 border-none bg-orange-500'> <Link to='/register'>Register</Link></button></>
       
          }
                </ul>
                </div>
            </div>
            <div className="navbar-start">
                <img src={logo} className="w-20 h-16 " alt="" />
                <Link className="font-bold text-xl text-orange-500">Motorcycle </Link>
                <div className="navbar-center ml-5 hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {menuber}
                </ul>
            </div>
            </div>
            <div className="navbar-end">
          <div className='hidden lg:block'>
          {user?.email ? <><Link to='/dashboard'>Dashboard</Link>
            <span className=' ml-3 text-orange-500 border-none'> <Link onClick={logOutHandler} >Logout</Link></span></> : <><button className='btn mr-2 border-none bg-orange-500'> <Link to='/login'>Login</Link></button>
           <button className='btn border-none mr-2 bg-orange-500'> <Link to='/register'>Register</Link></button></>}
            
        
          
          </div>
           <div>
           <div className="navbar-end lg:hidden">
                <div className="dropdown ">
                <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
               
                </div>
            </div>
           </div>
           
            </div>
            </div>
    </div>
    );
};

export default Header;