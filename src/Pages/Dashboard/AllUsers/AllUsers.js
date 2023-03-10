import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import SmallLoading from "../../../SharedPage/Loading/SmallLoading";

const AllUsers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () =>
      fetch(`https://resale-market-server-taupe.vercel.app/allUsers`).then(
        (res) => res.json()
      ),
  });

  console.log(allUsers);
  //delete mybooked
  const handlerDeleteBtn = (id) => {
    fetch(`https://resale-market-server-taupe.vercel.app/allUsers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        toast.success("users deleted successfull!");
        refetch();
        console.log(data);
      });
  };
  return (
    <div className="bg-white">
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          <thead className="">
            <tr className="">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.length === 0 ? (
              <SmallLoading></SmallLoading>
            ) : (
              <>
                {allUsers?.map((allUser, idx) => (
                  <tr>
                    <th>
                      <label>{idx}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{allUser.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{allUser.email}</td>
                    <td>
                      <strong>{allUser.role}</strong>
                    </td>
                    <th>
                      <button
                        onClick={() => handlerDeleteBtn(allUser._id)}
                        className="btn bg-red-500 mr-2"
                      >
                        delete
                      </button>
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

export default AllUsers;
