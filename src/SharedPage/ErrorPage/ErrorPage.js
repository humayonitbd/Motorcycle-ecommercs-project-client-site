import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import PrimaryBtn from '../../Components/PrimaryBtn/PrimaryBtn';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ErrorPage = () => {
    const error = useRouteError();
    const navigete = useNavigate();
    const {logOut} = useContext(AuthContext);
    const handlerSignOut=()=>{
        logOut()
        .then(()=>{
            alert('LogOut successfull!!')
            navigete('/');

        })
        .catch(err =>console.error(err))
    }
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        {/* <HandThumbDownIcon className='w-40 h-40 text-green-400' /> */}
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
            <span className='sr-only'>Error</span>
            <div className='flex justify-center items-center h-full'>
              4
              <div className='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
              4
            </div>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry, we couldn't find this page.
          </p>
          <p>{error.statusText || error.message}</p>
          <Link>
            <PrimaryBtn  classes='px-8 py-3 font-semibold rounded'>
             <button onClick={handlerSignOut}>log-out</button>
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </section>
    );
};

export default ErrorPage;