"use client";
import { Dropdown, Form, Menu, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import MyTeamModal from "./MyTeamModal";
import DashboardTitle from "../shared/DashboardTitle";

const data = [
  {
    key: "1",
    name: "Tushar",
    email: "tushar@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "2",
    name: "Rahman",
    email: "rahman@gmail.com",
    role: "Nurse",
    joinDate: "17 july 2024",
  },
  {
    key: "3",
    name: "Rafsan",
    email: "rafsan@gmail.com",
    role: "Esthetician",
    joinDate: "15 july 2024",
  },
  {
    key: "4",
    name: "jusef",
    email: "jusef@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "5",
    name: "Asad",
    email: "asad@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "6",
    name: "Fahim",
    email: "fahim@gmail.com",
    role: "NP",
    joinDate: "15 july 2024",
  },
  {
    key: "7",
    name: "Nadir",
    email: "nadir@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "8",
    name: "Tushar",
    email: "tushar@gmail.com",
    role: "Esthetician",
    joinDate: "15 july 2024",
  },
  {
    key: "9",
    name: "Rahman",
    email: "rahman@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "10",
    name: "Rafsan",
    email: "rafsan@gmail.com",
    role: "NP",
    joinDate: "15 july 2024",
  },
  {
    key: "11",
    name: "jusef",
    email: "jusef@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "12",
    name: "Asad",
    email: "asad@gmail.com",
    role: "Esthetician",
    joinDate: "15 july 2024",
  },
  {
    key: "13",
    name: "Fahim",
    email: "fahim@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "14",
    name: "Nadir",
    email: "nadir@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "15",
    name: "Asad",
    email: "asad@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "16",
    name: "Fahim",
    email: "fahim@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
  {
    key: "17",
    name: "Nadir",
    email: "nadir@gmail.com",
    role: "Nurse",
    joinDate: "15 july 2024",
  },
];
const MyTeam = () => {
  let path;
  if (typeof window !== "undefined") {
    path = new URLSearchParams(window.location.search).get("page") || 1;
  }
  const [page, setPage] = useState(path);
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      form.setFieldsValue(isModalOpen);
    }
  }, [form, isModalOpen]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const menu = (
    <Menu>
      <div className="bg-white z-30">
        <button className=" flex items-center gap-2 mb-1 " onClick={showModal}>
          {" "}
          <span className="text-[#1D75F2]">
            {" "}
            <FaEye />{" "}
          </span>{" "}
          <span> View</span>
        </button>

        <button className=" flex items-center gap-2 mb-1 ">
          {" "}
          <span className="text-[#1D75F2]">
            {" "}
            <MdDelete />{" "}
          </span>{" "}
          <span> Delete</span>
        </button>
      </div>
    </Menu>
  );

  const columns: any = [
    {
      title: "User ID",
      dataIndex: "key",
      key: "key",
      responsive: ["lg"],
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "username",
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "ACTION",
      dataIndex: "printView",
      key: "printView",

      render: () => (
        <Dropdown className=" bg-white  " overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <BsThreeDotsVertical />
            </Space>
          </a>
        </Dropdown>
      ),
    },
  ];

  // const handlePageChange = (page) => {
  //   setPage(page);
  //   const params = new URLSearchParams(window.location.search);
  //   params.set("page", page);
  //   window.history.pushState(null, "", `?${params.toString()}`);
  // };
  return (
    <div>
      {" "}
      <div
        className="lg:p-[20px] p-2"
        style={{
          background: "white",

          borderRadius: "12px",
        }}
      >
        <div className=" flex items-center justify-between my-5">
          <DashboardTitle> My Team</DashboardTitle>

          <Button variant="default" onClick={showModal}>
            + Add Member
          </Button>
        </div>

        <div>
          <Table
            columns={columns}
            dataSource={data}
            className="lg:text-center lg:w-[100%] w-[90%]"
            pagination={{
              pageSize: 10,
            }}
          />
        </div>
      </div>
      <MyTeamModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        form={form}
      />
    </div>
  );
};

export default MyTeam;
