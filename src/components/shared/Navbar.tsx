"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dropdown, Menu, Space } from "antd";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

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

  const menuItems = [
    ...values.map((value) => ({
      key: value.key,
      label: (
        <Link
          href={value.path}
          className={pathName === value.path ? "text-[#1D75F2] font-medium" : "text-black font-medium"}
        >
          {value.name}
        </Link>
      ),
    })),
    {
      type: "divider",
    },
    {
      key: "client-portal",
      label: (
        <Link href="/login">
          <Button variant="default">Client Portal</Button>
        </Link>
      ),
    },
    {
      key: "get-started",
      label: (
        <Link href="/intake-info-first">
          <Button variant="btn2">Get Started</Button>
        </Link>
      ),
    },
  ];

  return (
    <div className="container py-5 border-b border-[#C1D3FF]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[#1DA1F2] lg:text-xl text-lg font-bold">
            Find a MD 4 Me
          </h1>
        </div>

        {/* Mobile device */}
        <div className="lg:hidden block"> 
          {/* @ts-ignore  */}
          <Dropdown menu={{ items: menuItems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <RxHamburgerMenu size={20} />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className="hidden lg:flex gap-[21px] items-center text-[16px] text-[#737373]">
          {values.map((value) => (
            <p key={value.key}>
              <Link
                href={value.path}
                className={
                  pathName === value.path ? "text-[#1D75F2]" : "text-black"
                }
              >
                {value.name}
              </Link>
            </p>
          ))}
        </div>

        <div className="hidden lg:flex gap-2">
          <Link href="/login">
            <Button variant="default2">Client Portal</Button>
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
