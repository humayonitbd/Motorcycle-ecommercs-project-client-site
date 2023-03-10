import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import SmallLoading from "../../../SharedPage/Loading/SmallLoading";

const AllSellar = () => {
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ["allSellers"],
    queryFn: () =>
      fetch(`https://resale-market-server-taupe.vercel.app/allSellers`).then(
        (res) => res.json()
      ),
  });

  console.log(allSellers);
  //delete mybooked
  const handlerDeleteBtn = (id) => {
    fetch(`https://resale-market-server-taupe.vercel.app/allSellers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("users deleted successfull!");
          refetch();
        }
      });
  };

  //verify seller handler
  const handlerVerifyBtn = (id) => {
    fetch(`https://resale-market-server-taupe.vercel.app/seller/verify/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Seller verified successfull!!");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full bg-white">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSellers?.length === 0 ? (
              <SmallLoading></SmallLoading>
            ) : (
              <>
                {allSellers?.map((allSeller, idx) => (
                  <tr>
                    <th>
                      <label>{idx}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{allSeller.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{allSeller.email}</td>
                    <th>
                      <button
                        onClick={() => handlerDeleteBtn(allSeller._id)}
                        className="btn bg-red-500 mr-2"
                      >
                        delete
                      </button>
                      {allSeller.email && allSeller.verify ? (
                        <>
                          <button className="btn btn-primary">
                            Verified Seller
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handlerVerifyBtn(allSeller._id)}
                            className="btn bg-orange-500 mr-2"
                          >
                            verify
                          </button>
                        </>
                      )}
                    </th>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellar;
