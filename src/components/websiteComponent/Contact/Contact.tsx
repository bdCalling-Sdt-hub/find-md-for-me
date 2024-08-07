"use client";
import Title from "@/components/shared/Title";
import styles from "./Contact.module.css";

import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import SubTitle from "@/components/shared/SubTitle";
import { Button, Form, Input, Radio } from "antd";
import { usePostContactMutation } from "@/redux/apiSlices/WebPagesSlices";
import Swal from "sweetalert2";

const Contact = () => {
  const [postContact] = usePostContactMutation();
  const [form] = Form.useForm();
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

  const onFinish = async (values: any) => {
    console.log(values);
    await postContact(values).then((res) => {
      console.log(res?.data?.status);
      if (res?.data?.status === "200") {
        Swal.fire({
          icon: "success",
          title: res?.data?.message,
          showConfirmButton: false,
          timer: 500,
        });
        form.resetFields();
      }
    });
  };
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
        <div className="grid lg:grid-cols-12  mb-10 items-center gap-12  bg-[#FAFAFA] lg:p-10 p-5 rounded-lg z-0">
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
          <div className="lg:col-span-8">
            <Form onFinish={onFinish} layout="vertical" form={form}>
              <div className="lg:flex gap-5 w-full">
                <Form.Item
                  className="w-full"
                  name="first_name"
                  label={
                    <p className="text-lg text-[#737373] font-semibold">
                      First Name
                    </p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Naziya Sultana"
                    className="h-[45px] mt-2"
                  />
                </Form.Item>

                <Form.Item
                  className="w-full"
                  name="last_name"
                  label={
                    <p className="text-lg  text-[#737373] font-semibold">
                      Last Name
                    </p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input placeholder="Mithila" className="h-[45px] mt-2" />
                </Form.Item>
              </div>

              <div className="lg:flex gap-5 w-full">
                <Form.Item
                  className="lg:w-1/2"
                  name="email"
                  label={
                    <p className="text-lg  text-[#737373] font-semibold">
                      Email
                    </p>
                  }
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder="Naziya@gmail.com"
                    className="h-[45px] mt-2"
                  />
                </Form.Item>

                <Form.Item
                  className="lg:w-1/2"
                  name="phone"
                  label={
                    <p className="text-lg  text-[#737373] font-semibold">
                      Phone Number
                    </p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your Phone Number!",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="+0888798345326"
                    className="h-[45px] mt-2"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="subject"
                label={
                  <p className="text-lg  text-[#737373] font-semibold">
                    Subject
                  </p>
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your Subject!",
                  },
                ]}
              >
                <div className="flex-col">
                  <Radio.Group>
                    <Radio value="generalInquiry" className="text-xl my-2">
                      <span className="text-lg font-medium text-[#737373]">
                        General Inquiry
                      </span>
                    </Radio>
                    <Radio value="jobs" className="text-xl my-2">
                      <span className="text-lg font-medium text-[#737373]">
                        Jobs
                      </span>
                    </Radio>
                    <Radio value="partnership" className="text-xl my-2">
                      <span className="text-lg font-medium text-[#737373]">
                        Partnership
                      </span>
                    </Radio>
                  </Radio.Group>
                </div>
              </Form.Item>

              <Form.Item
                className="w-full"
                name="message"
                label={
                  <p className="text-lg  text-[#737373] font-semibold">
                    Message
                  </p>
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your Message!",
                  },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="Write your message.."
                  className="mt-2"
                />
              </Form.Item>

              <Form.Item className="text-end mt-10">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
