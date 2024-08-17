"use client";
import React from "react";
import mapImg from "@/assests/map.png";
import Image from "next/image";
import Title from "@/components/shared/Title";
import { useGetStateQuery } from "@/redux/apiSlices/WebPagesSlices";

const Counties = () => {
  const { data } = useGetStateQuery(undefined);

  return (
    <div className="container">
      <div className=" text-center">
        <Title> States we cover </Title>

        <div className=" flex justify-center items-center mb-10">
          <p className=" text-[#737373] text-[20px] lg:w-[700px]">
            {" "}
            Below you will find the states where we are able to provide MD
            oversight. New states will be provided continue to come and check
            here.
          </p>
        </div>
      </div>

      <div className="  ">
        <div className="flex  flex-wrap  lg:gap-9 gap-4 mb-10 ">
          {data?.data?.map((value: any, index: number) => (
            <div key={index} className="lg:mx-auto">
              <p className=" text-[#737373] text-[20px] text-center ">
                {" "}
                {value?.state_name}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-center items-center my-16">
        <Image
          src={mapImg}
          width={800}
          height={300}
          alt=" "
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Counties;
