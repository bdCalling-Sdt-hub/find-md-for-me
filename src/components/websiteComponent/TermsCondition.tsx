"use client";
import { useGetTermsQuery } from "@/redux/apiSlices/WebPagesSlices";
import React from "react";

const TermsCondition = () => {
  const { data } = useGetTermsQuery(undefined);
  console.log(data?.data);
  return (
    <div className="container  my-12  h-[calc(100vh-520px)]">
      <h1 className=" text-[#C738BD] text-2xl mb-3">Terms & Conditions</h1>

      <div>
        <p className=" text-[16px] text-black pb-3  tracking-wide ">
          {data?.data?.description}
        </p>
      </div>
    </div>
  );
};

export default TermsCondition;
