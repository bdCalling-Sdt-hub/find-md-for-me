"use client";
import React, { useEffect } from "react";
import ChangePassword from "./ChangePassword";
import UserProfile from "./UserProfile"; 

import { Tabs } from "antd";
import { useGetProfileQuery } from "@/redux/apiSlices/AuthSlices";

const Profile = () => { 
  const { data , refetch } = useGetProfileQuery(undefined);
  const onChange = (key: any) => {
    // console.log(key); 
  }; 

  useEffect(()=>{
    refetch()
  },[data])

  const items = [
    {
      key: "1",
      label: "Edit Profile",
      children: <UserProfile />,
    },
    {
      key: "2",
      label: "Change Password ",
      children: <ChangePassword />,
    },
  ];
  return (
    <div>
      {" "}
      <div>
        <div
          style={{ marginBottom: "16px" }}
          className=" mt-5 bg-white p-5 px-10 rounded-xl "
        >
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
