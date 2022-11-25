import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import {  useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const navigete = useNavigate();
    const handlerAddProduct=(e)=>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const location = form.location.value;
        const mobileNumber = form.mobileNumber.value;
        const cellDate = form.cellDate.value;
        const productCategory = form.productCategory.value;
        const image = form.producturl.files[0];
        const productDetails = form.productDetails.value;
        const formdata = new FormData();
        formdata.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_API}`,{
            method: 'POST',
            body: formdata

        })
        .then(res=>res.json())
        .then(data =>{
          const imageUrl = data.data.display_url;
          const addProducts = {
            productName,
            productPrice,
            location,
            mobileNumber,
            cellDate,
            productDetails,
            sellerEmail: user.email,
            imageUrl,
            productCategory

        }

        fetch(`http://localhost:5000/addProducts`,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(addProducts)
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.acknowledged){
            toast.success('Added your product!!');
            form.reset();
            navigete('/dashboard/myProduct')
          }
         
        })
        
        })
        
        
        
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
                  type="number"
                  name="productPrice"
                  placeholder="product price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Category</span>
                </label>
                <input
                  type="text"
                  name="productCategory"
                  placeholder="product Category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product img</span>
                </label>
                <input
                  type="file"
                  name="producturl"
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
                  type="number"
                  name="mobileNumber"
                  placeholder="mobile Number"
                  className="input input-bordered"
                    required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Year Date</span>
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