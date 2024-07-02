"use client";
import React from "react";

const TotalCustomer = () => {
  const values = [
    {
      total: "853",
      title: "Happy Customers",
    },
    {
      total: "150K",
      title: "Monthly Visitors",
    },
    {
      total: "38+",
      title: "States",
    },
    {
      total: "6",
      title: "Top Partners",
    },
  ];
  return (
    <div className="container my-16">
      <div className="flex justify-between items-center">
        {values?.map((value, index) => (
          <div key={index} className="text-center">
            <p className=" text-5xl font-bold text-[#1D75F2] mb-3">
              {" "}
              {value?.total}
            </p>
            <p className="text-black  font-semibold"> {value?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalCustomer;
