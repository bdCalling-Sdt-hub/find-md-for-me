"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const values = [
    {
      key: 2,
      name: "About Us",
      path: "/about",
    },
    {
      key: 3,
      name: "Contact Us",
      path: "/contact",
    },
    {
      key: 4,
      name: "Terms & Conditions",
      path: "/terms",
    },
    {
      key: 5,
      name: "Privacy Policy",
      path: "/privacy",
    },
    {
      key: 6,
      name: "FAQ",
      path: "/faq",
    },
  ];

  const values2 = [
    {
      key: 2,
      name: "(480) 555-0103",
      icon: <FaPhone />,
    },
    {
      key: 3,
      name: "7075 FM 1960 RD W STE 1010G Houston, Texas 77069",
      icon: <FaLocationDot />,
    },
    {
      key: 4,
      name: "info@FindaMD4Me.com",
      icon: <IoMdMail />,
    },
  ];
  return (
    <div className=" bg-[#1DA1F2]">
      <div className="container flex justify-between text-white py-14">
        <div className=" ">
          <h1 className=" text-white text-2xl  font-bold pb-3 ">
            {" "}
            Find a MD 4 Me
          </h1>
          <p className=" text-[14px] w-[380px] leading-6 pb-3 tracking-normal">
            Find a MD 4 Me, is a service organization of an integrated delivery
            system that provides management services for multiple affiliated
            physician practices and clinics. We currently provide management
            services in 27 states
          </p>
          <p className=" flex items-center gap-4 ">
            <FaFacebook size={28} />
            <RiInstagramFill size={28} />
            <FaGoogle size={28} />
          </p>
        </div>

        <div>
          <h1 className=" font-semibold text-lg mb-3 ">Info</h1>
          <h1 className=" text-[16px]  font-medium">
            {values?.map((value) => (
              <p key={value.key} className="mb-3">
                {" "}
                <Link href={value?.path}> {value?.name}</Link>
              </p>
            ))}
          </h1>
        </div>

        <div>
          {" "}
          <h1 className=" font-semibold text-lg pb-3 ">Contact Us</h1>
          <h1 className=" text-[16px]  font-medium ">
            {values2?.map((value) => (
              <p key={value?.key} className=" flex gap-2 mb-3 leading-6">
                {" "}
                <span> {value?.icon} </span> <span> {value?.name}</span>
              </p>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
