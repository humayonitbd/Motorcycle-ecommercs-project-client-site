import { map } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import SmallLoading from "../../../SharedPage/Loading/SmallLoading";
import CategoryModal from "../../Categoris/CategoryModal/CategoryModal";
import HomeAdverticeDetails from "./HomeAdverticeDetails";

const HomeAdvertice = () => {
  const [orderBike, setOrderBike] = useState(null);
  const { data: addverticeProducts = [] } = useQuery({
    queryKey: ["addverticeProducts"],
    queryFn: () =>
      fetch(
        `https://resale-market-server-taupe.vercel.app/addverticeProducts`
      ).then((res) => res.json()),
  });

  return (
    <div className="py-10 bg-[#1a2f5d]">
      <div>
        <h3 className="text-center text-2xl md:text-4xl font-bold my-12 text-white">
          Advertice Product
        </h3>
      </div>
      <div className="grid  w-10/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {addverticeProducts.length === 0 ? (
          <SmallLoading></SmallLoading>
        ) : (
          <>
            {addverticeProducts.length &&
              addverticeProducts?.map((addverticeProduct) => {
                return (
                  !addverticeProduct.paid && (
                    <HomeAdverticeDetails
                      key={addverticeProduct._id}
                      addverticeProduct={addverticeProduct}
                      setOrderBike={setOrderBike}
                    ></HomeAdverticeDetails>
                  )
                );
              })}
          </>
        )}
      </div>
      {orderBike && (
        <CategoryModal
          orderBike={orderBike}
          setOrderBike={setOrderBike}
        ></CategoryModal>
      )}
    </div>
  );
};

export default HomeAdvertice;
