"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import person from "@/assests/person.png";
import { useGetProfileQuery } from "@/redux/apiSlices/AuthSlices";
import { baseUrl } from "@/redux/api/apiSlice";

const Navbar = () => { 
  const { data } = useGetProfileQuery(undefined); 
  const user = data?.user
  // console.log(user); 
  return (
    <div
      className=" "
      style={{
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "60px",
        paddingLeft: "270px",
        alignItems: "center",
      }}
    >
      <div></div>
      <Link href="/profile">
        <div className=" flex items-center  ">
          <Image
            src={user? 
              user?.image?.startsWith('https') ? user?.image : user?.image === null ? `${baseUrl}/${user?.image}` : `${baseUrl}${user?.image}`
              :person} 
              alt=""
              height={60}
              width={50}
            style={{
              borderRadius: "100%", 
              border:"2px solid  #1D75F2" ,
            }}
          
          />
          <div>
            <p className="p-3 h-3 font-bold text-[#1D75F2]">{`${user?.first_name} ${user?.last_name}`} </p>
            <p className="p-3 text-[14px] font-semibold"> {user?.user_type} </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
