"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dropdown, Menu, Space } from "antd";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);

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

  const menu = (
    <Menu>
      <div className=" bg-white z-50 px-6 py-3 rounded  ">
        {" "}
        <div className="  ">
          {values?.map((value) => (
            <p key={value?.key} className=" text-[16px] py-2 ">
              {" "}
              <Link
                href={value?.path}
                className={
                  pathName == value?.path ? " text-[#1D75F2]" : " text-black"
                }
              >
                {" "}
                {value.name}{" "}
              </Link>{" "}
            </p>
          ))}
        </div>
        <div className=" flex-wrap  gap-2  mb-2">
          <div className="mb-3">
            <Link href="/documents">
              <Button variant="default">Client Protal</Button>
            </Link>
          </div>

          <div>
            <Link href="/intake-info-first">
              <Button variant="btn2">Get Started</Button>
            </Link>
          </div>
        </div>{" "}
      </div>
    </Menu>
  );
  return (
    <div className="container py-5 border-b border-[#C1D3FF]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className=" text-[#1DA1F2] lg:text-xl text-lg  font-bold ">
            {" "}
            Find a MD 4 Me
          </h1>
        </div>

        {/* mobile device  */}
        <div className=" lg:hidden block">
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <RxHamburgerMenu size={20} />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className=" hidden lg:flex gap-[21px] items-center text-[16px] text-[#737373]">
          {values?.map((value) => (
            <p key={value?.key}>
              {" "}
              <Link
                href={value?.path}
                className={
                  pathName == value?.path ? " text-[#1D75F2]" : " text-black"
                }
              >
                {" "}
                {value.name}{" "}
              </Link>{" "}
            </p>
          ))}
        </div>

        <div className=" hidden lg:flex gap-2">
          <Link href="/documents">
            <Button variant="default2">Client Protal</Button>
          </Link>

          <Link href="/intake-info-first">
            <Button variant="btn3">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
