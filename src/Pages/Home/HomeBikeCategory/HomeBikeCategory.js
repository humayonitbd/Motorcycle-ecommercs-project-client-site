import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import SmallLoading from "../../../SharedPage/Loading/SmallLoading";
import BikeCategoryDetails from "./BikeCategoryDetails";
import axios from "axios";

const HomeBikeCategory = () => {
  const [categorys, setCategorys] = useState([]);
  
 useEffect(()=>{
  axios.get("https://resale-market-server-taupe.vercel.app/categorys")
  .then(res =>{
    console.log(res)
    setCategorys(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })

 },[])
  
  return (
    <div className="my-20 md:mb-40">
      <div className="text-center my-5">
        <h2 className="text-5xl font-bold"> Bike Brand Category</h2>
      </div>
      {categorys?.length === 0 ? (
        <SmallLoading></SmallLoading>
      ) : (
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 my-20">
          {categorys?.length &&
            categorys?.map((category) => (
              <BikeCategoryDetails
                key={category._id}
                category={category}
              ></BikeCategoryDetails>
            ))}
        </div>
      )}
    </div>
  );
};

export default HomeBikeCategory;
