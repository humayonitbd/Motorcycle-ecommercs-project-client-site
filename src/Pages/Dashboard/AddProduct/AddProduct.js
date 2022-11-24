import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const handlerAddProduct=(e)=>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const location = form.location.value;
        const mobileNumber = form.mobileNumber.value;
        const cellDate = form.cellDate.value;
        const productDetails = form.productDetails.value;
        const addProducts = {
            productName,
            productPrice,
            location,
            mobileNumber,
            cellDate,
            productDetails,
            sellerEmail: user.email

        }
        console.log(addProducts)
        
    }
    return (
        <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Add Product now!</h1>
          </div>
          <form onSubmit={handlerAddProduct} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  type="text"
                  name="productPrice"
                  placeholder="product price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered"
                    required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="mobile Number"
                  className="input input-bordered"
                    required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cell Date</span>
                </label>
                <input
                  type="text"
                  name="cellDate"
                  placeholder="cell date"
                  className="input input-bordered"
                    required
                />
                
              </div>
              <textarea name='productDetails' className="textarea h-40 w-full textarea-bordered" placeholder="Product details righting ......"></textarea>
              
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

export default AddProduct;