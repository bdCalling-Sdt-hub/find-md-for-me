"use client";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import React from "react";
import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import { useRouter } from "next/navigation";

const counties = [
  "Alabama",
  " Arizona",
  "Colorado ",
  "Connecticut",
  "District of Colombia ",
  "Deleware ",
  "Florida",
  "Idaho ",
  "Illinois ",
  "Iowa",
  "Indiana",
  "Kentucky ",
  "Louisiana ",
  "Maine",
  " Mississippi",
  " Montana",
  " Maryland ",
  "Michigan ",
  "Minnesota ",
  "Nebraska ",
  " Nevada",
  " New Jersey",
  " North Dakota",
  "New Hampshire ",
  "South Carolina",
  "Ohio ",
  "Oklahoma",
  "Tennessee ",
  "Texas ",
  "Utah ",
  "Virginia ",
  "Vermont ",
  " Washington",
  " West Virginia",
  " Wyoming",
  "Wisconsin ",
];

const IntakeInfoFirstPage: React.FC = () => {
  const router = useRouter();

  const onFinish = (values: React.FormEvent) => {
    console.log("Success:", values);
    router.push("/intake-info-second");
  };

  return (
    <div className="container">
      <div>
        <Title> Intake Information </Title>
        <SubTitle className=" ">
          {" "}
          If you are looking to connect with a MD in your area, fill out the
          below form.
        </SubTitle>
        <p className=" text-[#C738BD]  text-[16px] text-center ">
          {" "}
          Please Provide Your Business Information.{" "}
        </p>
      </div>

      <div className=" lg:w-[80%] mx-auto mt-10 bg-[#E8F6FE] rounded-lg lg:p-10 p-5 lg:px-20  mb-20">
        <Form name="basic" onFinish={onFinish} className=" w-[100%]   ">
          <Form.Item name="name">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              First Name :
            </label>
            <Input
              className=" w-full h-[40px] "
              placeholder=" Naziya Sultana"
            />
          </Form.Item>

          <Form.Item name="name">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Last Name :
            </label>
            <Input className=" w-full h-[40px] " placeholder="Mithila" />
          </Form.Item>

          <Form.Item name="name" className="">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Date of Birth:
            </label>
            <DatePicker className=" w-full h-[40px]" />
          </Form.Item>

          <Form.Item name="name">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Email:
            </label>
            <Input
              className=" w-full h-[40px] "
              placeholder="mithila@gmail.com"
            />
          </Form.Item>

          <Form.Item name="name">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Phone Number :
            </label>
            <Input
              className=" w-full h-[40px] "
              placeholder="+880181234324"
              type="number"
            />
          </Form.Item>

          <Form.Item name="name">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Occupation :
            </label>
            <Input
              className=" w-full h-[40px] "
              placeholder="Ex: NP, Nurse, Esthetician"
              type="text"
            />
          </Form.Item>

          <Form.Item name="business8">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              What state(s) are you licensed/certified in?
            </label>
            <div className=" flex gap-5 items-center w-full ">
              <Select className="h-[40px] w-[80%]">
                {counties?.map((country, index) => (
                  <Select.Option key={index} value={country}>
                    {country}
                  </Select.Option>
                ))}
              </Select>

              <div className="  ">
                <Radio value="na"> N/A </Radio>
              </div>
            </div>
          </Form.Item>

          <Form.Item name="business8">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Please provide your license(s)/certificate(s) number(s)
            </label>
            <div className=" flex gap-5 items-center w-full ">
              <Input
                className=" w-full h-[40px] "
                placeholder="652479254"
                type="number"
              />

              <div className="  ">
                <Radio value="na"> N/A </Radio>
              </div>
            </div>
          </Form.Item>

          <Form.Item name="name">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Home Mailing Address
            </label>
            <Input
              className=" w-full h-[40px] "
              placeholder="Apt. 738 2086 Marianne Parks, Stammhaven, NE 66454-8886"
            />
          </Form.Item>

          <Form.Item name="business2">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Have you completed training/certification for the service(s) you
              would like to offer?
            </label>
            <div className=" flex-col gap-4">
              <Radio.Group>
                <Radio value="yes" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Yes </span>{" "}
                </Radio>{" "}
                <Radio value="No" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">No </span>{" "}
                </Radio>{" "}
              </Radio.Group>
            </div>
          </Form.Item>

          <Form.Item className="text-end ">
            <button className=" bg-[#C738BD]  text-white px-6 py-3   rounded-lg">
              Next
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default IntakeInfoFirstPage;
