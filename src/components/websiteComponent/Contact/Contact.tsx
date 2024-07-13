"use client";
import Title from "@/components/shared/Title";
import styles from "./Contact.module.css";

import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import SubTitle from "@/components/shared/SubTitle";
import { Form, Input, Radio } from "antd";

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
        <p className=" text-[#737373] text-[20px] lg:w-[700px] text-center mx-auto mb-10"></p>
      </div>

      <div>
        <div className="grid lg:grid-cols-12  mb-10 items-center gap-12  bg-[#FAFAFA] lg:p-10 p-5 rounded-lg">
          <div className={` lg:col-span-4 ${styles.bgImg} `}>
            <div>
              <h1 className=" text-white font-semibold text-3xl text-center  my-10">
                {" "}
                Contact Information{" "}
              </h1>

              <div className="px-10 py-24 ">
                {values?.map((data, index) => (
                  <p key={index} className="flex gap-4 items-center mb-10 ">
                    {" "}
                    <span className="text-[#C738BD]">{data?.icon} </span>{" "}
                    <span className="text-white">{data?.data} </span>{" "}
                  </p>
                ))}
              </div>

              <p className=" flex items-center gap-4  text-[#C738BD] px-10 pb-9 ">
                <FaFacebook size={28} />
                <RiInstagramFill size={28} />
                <FaGoogle size={28} />
              </p>
            </div>
          </div>

          <div className=" lg:col-span-8">
            <Form>
              <div className=" lg:flex gap-5  w-full">
                <Form.Item className=" w-full">
                  <label className="text-lg mb-6 text-[#737373] font-semibold ">
                    First Name
                  </label>
                  <Input
                    placeholder="Naziya Sultana"
                    className="h-[45px] mt-2"
                  />
                </Form.Item>

                <Form.Item className=" w-full">
                  <label className="text-lg mb-6 text-[#737373] font-semibold ">
                    {" "}
                    Last Name
                  </label>
                  <Input placeholder="Mithila " className="h-[45px] mt-2" />
                </Form.Item>
              </div>

              <div className="  lg:flex gap-5 w-full ">
                <Form.Item className=" lg:w-1/2">
                  <label className="text-lg mb-6 text-[#737373] font-semibold ">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Naziya@gmail.com"
                    className="h-[45px] mt-2"
                  />
                </Form.Item>

                <Form.Item className=" lg:w-1/2">
                  <label className="text-lg mb-6 text-[#737373] font-semibold ">
                    Phone Number{" "}
                  </label>
                  <Input
                    type="number"
                    placeholder="+0888798345326 "
                    className="h-[45px] mt-2"
                  />
                </Form.Item>
              </div>

              <Form.Item name="business">
                <label
                  htmlFor=" "
                  className="text-lg mb-6 text-[#737373] font-semibold "
                >
                  Subject
                </label>
                <div className=" flex-col">
                  <Radio.Group>
                    <Radio value="startUp" className=" text-xl my-2">
                      {" "}
                      <span className=" text-lg font-medium text-[#737373] ">
                        General Inquiry{" "}
                      </span>{" "}
                    </Radio>{" "}
                    <Radio value="oneYear" className=" text-xl my-2">
                      {" "}
                      <span className=" text-lg font-medium text-[#737373] ">
                        Jobs
                      </span>{" "}
                    </Radio>{" "}
                    <Radio value="twoYear" className=" text-xl my-2">
                      {" "}
                      <span className=" text-lg font-medium  text-[#737373] ">
                        Partnership
                      </span>{" "}
                    </Radio>{" "}
                  </Radio.Group>
                </div>
              </Form.Item>
            </Form>

            <Form.Item className=" w-full ">
              <label className="text-lg mb-6 text-[#737373] font-semibold ">
                Message
              </label>
              <Input
                placeholder="Write your message.."
                className="h-[45px] mt-2"
              />
            </Form.Item>

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
