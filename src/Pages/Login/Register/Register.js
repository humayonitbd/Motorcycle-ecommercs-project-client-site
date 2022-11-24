import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handlerRegister=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        if(password.length < 6){
            alert('Your password must be 6 charecter!!')
            return;
        }
        console.log(name, email, password, role)

    }
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <form onSubmit={handlerRegister} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <select required name="role" className="select select-bordered w-full">
                <option defaultValue='user'>
                 user
                </option>
                <option defaultValue='seller'>seller</option>
               
              </select>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
