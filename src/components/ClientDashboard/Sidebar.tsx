"use client";

import Link from "next/link";
import { MdOutlineFileUpload, MdLogout } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import {
  IoDocumentAttachOutline,
  IoDocumentsOutline,
  IoPeopleOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrMoney, GrVend } from "react-icons/gr";
import { FaHandHoldingMedical } from "react-icons/fa6";
const Sidebar = () => {
  //   const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const [isOpen, setIsOpen] = useState(false);

  interface ItemType {
    title: string;
    path: string;
    icon: React.JSX.Element;
  }

  const linkItems: ItemType[] = [
    {
      title: "Upload Documents",
      path: "/documents",
      icon: <MdOutlineFileUpload size={24} />,
    },
    {
      title: "Agreements",
      path: "/agreements",
      icon: <IoDocumentsOutline size={24} />,
    },
    {
      title: "Business Resources",
      path: "/business-resources",
      icon: <IoDocumentAttachOutline size={24} />,
    },
    {
      title: "Billing",
      path: "/billing",
      icon: <GrMoney size={24} />,
    },
    {
      title: "My Teams",
      path: "/myteam",
      icon: <IoPeopleOutline size={24} />,
    },
    {
      title: "Vendors",
      path: "/vendors",
      icon: <GrVend size={24} />,
    },
    {
      title: "EHR",
      path: "/ehr",
      icon: <FaHandHoldingMedical size={24} />,
    },
    {
      title: "Good Faith Exam",
      path: "/good-faith",
      icon: <IoVideocamOutline size={24} />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <IoMdPerson size={24} />,
    },
    {
      title: "Log Out",
      path: "/login",
      icon: <MdLogout size={24} />,
    },
  ];

  return (
    <div>
      <div
        className=" lg:h-[110vh] lg:fixed lg:bg-[#E8F6FE]"
        style={{
          overflow: "auto",
          overflowY: "hidden",
          zIndex: 50,
          paddingRight: "20px",
        }}
      >
        <div className="logo flex items-center justify-between lg:justify-center gap-2 lg:mt-[30px] lg:mb-[20px] mt-[10px] mx-3  border-b-2 py-3 lg:border-none">
          <div>
            <Link href="/">
              <h1 className=" text-[#1DA1F2] text-xl font-semibold  text-center lg:pt-4  ">
                {" "}
                Find a MD 4 Me
              </h1>
            </Link>
          </div>

          <div className="lg:hidden block">
            <Dropdown
              overlay={
                <ul className="flex flex-col gap-[10px] mt-0  bg-white ">
                  {linkItems.map((item, index) => (
                    <li
                      key={index}
                      className="relative mb-[10px] ps-[10px] flex items-center h-[24px] mt-[20px] me-[10px]"
                    >
                      <Link
                        href={item.path}
                        className={`flex w-full ${
                          item.path === pathname
                            ? "bg-[#68a2f3] text-white"
                            : "bg-transparent text-black"
                        } items-center gap-[14px] px-3 py-2 rounded-[5px] font-normal`}
                      >
                        <div className="h-[24px]">{item.icon}</div>
                        <div className="text-[16px]">{item.title}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              }
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <RxHamburgerMenu size={20} />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <div className="hidden lg:block">
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              height: "100%",
              marginTop: 0,
            }}
          >
            {linkItems.map((item, index) => (
              <li
                key={index}
                style={{
                  width: "100%",
                  height: "34px",
                  position: "relative",
                  marginBottom: "10px",
                  paddingLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link
                  href={item.path}
                  style={{
                    display: "flex",
                    width: "100%",
                    backgroundColor:
                      item.path === pathname ? "#1D75F2" : "transparent",
                    color: item.path === pathname ? "#fff" : "#737373",
                    alignItems: "center",
                    margin: "auto  0 auto 0",
                    gap: "14px",
                    padding: "7px 14px 7px",
                    borderRadius: "5px",
                    fontWeight: "400",
                  }}
                >
                  <div style={{ height: "24px" }}>{item.icon}</div>
                  <div
                    style={{
                      fontSize: "16px",
                      height: "fit-content",
                    }}
                  >
                    {item.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
