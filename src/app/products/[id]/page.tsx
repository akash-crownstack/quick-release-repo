"use client";
import React from "react";
import { useSession } from "next-auth/react";

const AllProducts = () => {
  const session = useSession();
  console.log(session);
  return <div>AllProducts</div>;
};

export default AllProducts;
