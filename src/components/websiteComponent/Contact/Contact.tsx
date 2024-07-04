import Title from "@/components/shared/Title";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import styles from "./Contact.module.css";

import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import SubTitle from "@/components/shared/SubTitle";

const Contact = () => {
  const values = [
    {
      icon: <MdPhoneInTalk size={24} />,
      data: "(480) 555-0103",
    },
    {
      icon: <IoMdMail size={24} />,
      data: "info@FindaMD4Me.com",
    },
    {
      icon: <FaLocationDot size={24} />,
      data: "7075 FM 1960 RD W STE 1010G Houston, Texas 77069",
    },
  ];
  return (
    <div>
      <div>
        <Title> Contact Us</Title>
        <SubTitle className="">
          {" "}
          Any questions or remarks? Just write us a message!{" "}
        </SubTitle>
        <p className=" text-[#737373] text-[20px] w-[700px] text-center mx-auto mb-10"></p>
      </div>

      <div>
        <div className="grid grid-cols-12  mb-10 items-center gap-12  bg-[#FAFAFA] p-10 rounded-lg">
          <div className={` col-span-4 ${styles.bgImg} `}>
            <div>
              <h1 className=" text-white font-semibold text-3xl text-center  my-10">
                {" "}
                Contact Information{" "}
              </h1>

              <div className="px-10 py-24 ">
                {values?.map((data, index) => (
                  <p key={index} className="flex gap-4 items-center mb-10 ">
                    {" "}
                    <span className="text-[#1D75F2]">{data?.icon} </span>{" "}
                    <span className="text-white">{data?.data} </span>{" "}
                  </p>
                ))}
              </div>

              <p className=" flex items-center gap-4  text-white px-10 pb-9 ">
                <FaFacebook size={28} />
                <RiInstagramFill size={28} />
                <FaGoogle size={28} />
              </p>
            </div>
          </div>

          <div className=" col-span-8">
            <div className=" flex gap-5 mb-10  w-full">
              <div className=" w-full">
                <Label>First Name</Label>
                <Input placeholder="Naziya Sultana" />
              </div>
              <div className=" w-full">
                <Label> Last Name</Label>
                <Input placeholder="Mithila " />
              </div>
            </div>

            <div className="  flex gap-5 mb-10 w-full ">
              <div className=" w-1/2">
                <Label>Email</Label>
                <Input type="email" placeholder="Naziya@gmail.com" />
              </div>
              <div className=" w-1/2">
                <Label>Phone Number </Label>
                <Input type="number" placeholder="+0888798345326 " />
              </div>
            </div>

            <div className="flex gap-6 mb-10">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  General Inquiry
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Jobs
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms3" />
                <label
                  htmlFor="terms3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Partnership
                </label>
              </div>
            </div>
            <div className=" w-full mt-">
              <Label>Message</Label>
              <Input placeholder="Write your message.." />
            </div>

            <div className="text-end mt-10">
              <Button variant="getStarted">Submit </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
