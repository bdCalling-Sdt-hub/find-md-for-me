"use client";
import { useGetTermsQuery } from "@/redux/apiSlices/WebPagesSlices";
import React from "react";

const TermsCondition = () => {
  const { data } = useGetTermsQuery(undefined); 
  console.log(data);

  return (
    <div className="container  my-12  ">
      <h1 className=" text-[#C738BD] text-2xl mb-3">Terms & Conditions</h1>

      <div>
      <div
          className=" text-[16px] text-black pb-3  tracking-wide "
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        ></div>
      </div>
    </div>
  );
};

export default TermsCondition;
