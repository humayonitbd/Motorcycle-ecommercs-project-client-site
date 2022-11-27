import React from "react";
import toast from "react-hot-toast";

const MyProductDetails = ({ allMyProduct, refetch, handlerDeleteBtn }) => {
  const {
    name,
    origin_price,
    resale_price,
    location,
    mobileNumber,
    cellDate,
    productDetails,
    sellerEmail,
    sellerName,
    img,
    category,
    advertice,
    paid,
    _id,
  } = allMyProduct;
  const handlerAdvertiseBtn = (id) => {
    fetch(
      `https://resale-market-server-taupe.vercel.app/addverticeProducts/${id}`,
      {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Advertice sucessfull!!!");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 mb-5 shadow-xl">
        <div className="avatar">
          <div className="w-24 rounded-full mr-3">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="md:flex justify-between items-center">
          <h2 className="card-title ">{name}</h2>
          <p className="md:mx-3">
            <s>{origin_price}</s>/ {resale_price}
          </p>
          <p>
            {paid ? (
              <>
                <span className="btn bg-green-500">Sold Product</span>
              </>
            ) : (
              <>
                <span>Available product</span>
              </>
            )}
          </p>
          <p className="md:mx-5">
            {advertice ? (
              <button className="btn btn-primary">adverticed true</button>
            ) : (
              <>
                <button
                  onClick={() => handlerAdvertiseBtn(_id)}
                  className="btn btn-primary"
                >
                  advertise
                </button>
              </>
            )}
          </p>
          <div className="card-actions mt-3 md:mt-0">
            <button
              onClick={() => handlerDeleteBtn(_id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductDetails;
