import { Result } from 'postcss';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SaveUserInfo from '../../../components/SaveUserInfo/SaveUserInfo';
import { AuthContext } from '../../../Context/AuthProvider';
import useJwtToken from '../../../hooks/useJwtToken/useJwtToken';

const Login = () => {
    const {login, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useJwtToken(loginEmail);
    if(token){
      navigate(from, {replace: true});
    };
    const handlerLogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setLoginEmail(user.email)
            toast.success('Login successfull!!')
            form.reset();
            // navigate(from, {replace: true});
        })
        .catch(err =>{
            toast.error(err.message)
        })
        console.log(email, password)
    }

    const handlerLoginGoogle=()=>{
      googleLogin()
      .then(result=>{
        const user = result.user;
        const userData ={
          name: user.displayName,
          email: user.email,
          role: 'user'
        }
        SaveUserInfo(userData)
        .then(res =>res.json())
        .then(data =>{
          console.log(data)
          // setCreateEmail(userData.email)
        })
        console.log(user)
      })
      .catch(error =>console.log(error))
    }
    return (
        <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={handlerLogin} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                    required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                ></input>
              </div>
              <div><button onClick={handlerLoginGoogle} className='btn w-full btn-primary'>Google-login</button></div>
            </div>
          </form>
          <p className='text-orange-500'>Have a new user? <Link to='/register'><strong>register</strong></Link></p>
        </div>
      </div>
    </div>
    );
};

export default Login;