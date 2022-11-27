import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import SmallLoading from "../../../SharedPage/Loading/SmallLoading";
import MyProductDetails from "../MyProductDetails/MyProductDetails";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: allMyProducts = [], refetch } = useQuery({
    queryKey: ["allMyProducts", user?.email],
    queryFn: () =>
      fetch(
        `https://resale-market-server-taupe.vercel.app/allMyProducts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });
  console.log(allMyProducts);

  //delete mybooked
  const handlerDeleteBtn = (id) => {
    fetch(`https://resale-market-server-taupe.vercel.app/allMyProducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        toast.success("Product deleted successfull!");
        refetch();
        console.log(data);
      });
  };
  return (
    <div>
      <h3 className="text-center text-3xl font-bold text-orange-500 my-5">
        My Products
      </h3>
      <div className=" my-10">
        {allMyProducts.length === 0 ? (
          <SmallLoading></SmallLoading>
        ) : (
          <>
            {allMyProducts.length &&
              allMyProducts?.map((allMyProduct) => (
                <MyProductDetails
                  key={allMyProduct._id}
                  allMyProduct={allMyProduct}
                  handlerDeleteBtn={handlerDeleteBtn}
                  refetch={refetch}
                ></MyProductDetails>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
