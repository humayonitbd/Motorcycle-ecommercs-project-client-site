import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SaveUserInfo from "../../../components/SaveUserInfo/SaveUserInfo";
import { AuthContext } from "../../../Context/AuthProvider";
import useJwtToken from "../../../hooks/useJwtToken/useJwtToken";

const Register = () => {
  const { createUser, userUpdateHandler } = useContext(AuthContext);
  const navigete = useNavigate();
  const [createEmail, setCreateEmail] = useState("");
  console.log(createEmail);
  const [token] = useJwtToken(createEmail);
  if (token) {
    navigete("/");
  }
  const handlerRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    if (password.length < 6) {
      alert("Your password must be 6 charecter!!");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        userUpdateHandlerBtn(name);
        console.log(user);
        const userData = {
          name: name,
          email: email,
          role: role,
        };
        fetch(`https://resale-market-server-taupe.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setCreateEmail(userData.email);
          });

        toast.success("Created account successfull!");
        // navigete('/');
      })
      .catch((error) => console.log(error));
    // console.log(name, email, password, role)
  };

  const userUpdateHandlerBtn = (name) => {
    userUpdateHandler(name)
      .then(() => {
        console.log("profile update");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-black">Register now!</h1>
          </div>
          <form
            onSubmit={handlerRegister}
            className="card flex-shrink-0 w-full shadow-2xl bg-white"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered bg-white"
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
                  className="input input-bordered bg-white"
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
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <select
                required
                name="role"
                className="select select-bordered w-full bg-white"
              >
                <option defaultValue="user">user</option>
                <option defaultValue="seller">seller</option>
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
          <p className="text-orange-500">
            Have a account?{" "}
            <Link to="/login">
              <strong>login</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
