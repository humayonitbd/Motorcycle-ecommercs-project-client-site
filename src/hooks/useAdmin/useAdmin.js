import React, { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  console.log(isAdmin);
  useEffect(() => {
    if (email) {
      fetch(
        `https://resale-market-server-taupe.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.isAdmin) {
            setIsAdmin(data.isAdmin);
            setAdminLoading(false);
          }
        });
    }
  }, [email]);
  return [isAdmin, adminLoading];
};

export default useAdmin;
