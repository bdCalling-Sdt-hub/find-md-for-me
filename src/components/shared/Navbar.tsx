"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const values = [
    {
      key: 1,
      name: "Home",
      path: "/",
    },
    {
      key: 2,
      name: "About Us",
      path: "/about",
    },
    {
      key: 3,
      name: "Pricing",
      path: "/pricing",
    },
    {
      key: 4,
      name: "States Covered",
      path: "/state-cover",
    },
    {
      key: 5,
      name: "FAQ",
      path: "/faq",
    },
    {
      key: 6,
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <div className="container py-5 border-b border-[#C1D3FF]">
      <div className=" flex justify-between items-center">
        <div>
          <h1 className=" text-[#1DA1F2] text-xl  font-bold ">
            {" "}
            Find a MD 4 Me
          </h1>
        </div>

        <div className=" flex gap-[21px] items-center text-[16px] text-[#737373]">
          {values?.map((value) => (
            <p key={value?.key}>
              {" "}
              <Link href={value?.path}> {value.name} </Link>{" "}
            </p>
          ))}
        </div>

        <div className=" flex gap-2">
          <Button variant="default">Client Protal</Button>
          <Button variant="btn2">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
