"use client";
import { useGetPrivacyQuery } from "@/redux/apiSlices/WebPagesSlices";
import React from "react";

const Privacy = () => {
  const { data } = useGetPrivacyQuery(undefined);

  return (
    <div className=" container  my-12 h-[calc(100vh-520px)]">
      <h1 className=" text-[#C738BD] text-2xl mb-3">Privacy & Policy</h1>

      <div>
        <div
          className=" text-[16px] text-black pb-3  tracking-wide "
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        ></div>
      </div>
    </div>
  );
};

export default Privacy;
