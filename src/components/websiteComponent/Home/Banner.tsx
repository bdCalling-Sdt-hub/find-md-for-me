"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import bannerImg from "@/assests/bannerImg.png";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className=" pt-4 mb-5 relative container">
        <div className=" h-[110vh] ">
          <div className=" grid grid-cols-2 items-center ">
            <div className="">
              <h1 className=" text-[#1DA1F2] text-[56px]  font-bold mb-5 ">
                {" "}
                Find a MD 4 Me
              </h1>
              <p className="text-[#737373] text-[32px]  mb-5 w-[80%] tracking-wide">
                {" "}
                Start today with connecting with MDs in your area
              </p>

              <div className=" flex gap-4">
                <Button variant="btn2">Get Started Now</Button>
                <Button variant="default">Learn More</Button>
              </div>
            </div>

            <div>
              <Image src={bannerImg} width={700} height={200} alt="" />
            </div>
          </div>
        </div>

        <div className=" absolute bottom-20">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
