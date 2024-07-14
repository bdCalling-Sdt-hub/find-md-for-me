"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import bannerImg from "@/assests/bannerImg.png";
import BannerCard from "./BannerCard";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className=" pt-4 mb-5 relative lg:container">
        <div className=" lg:h-[110vh] ">
          <div className=" grid lg:grid-cols-2 grid-cols-1 items-center ">
            <div className="ps-5">
              <h1 className=" text-[#1D75F2] lg:text-[56px] text-[28px]  font-bold mb-5 ">
                {" "}
                Find a MD 4 Me
              </h1>
              <p className="text-[#737373] lg:text-[32px] text-[18px]  mb-5 lg:w-[80%] tracking-wide">
                {" "}
                Start today with connecting with MDs in your area
              </p>

              <div className=" flex gap-4 ">
                <Link href="/intake-info-first">
                  {" "}
                  <Button variant="btn3">Get Started Now</Button>{" "}
                </Link>
                <Link href="/about">
                  <Button variant="default">Learn More</Button>
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mt-1 p-2">
              <Image
                src={bannerImg}
                width={1000}
                height={200}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className=" lg:absolute lg:bottom-20 p-2 ">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
