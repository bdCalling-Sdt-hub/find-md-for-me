"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Radio, Select, Space } from "antd";
import Title from "@/components/shared/Title";
import SubTitle from "@/components/shared/SubTitle";
import { useRouter } from "next/navigation";

const { TextArea } = Input;

// type FieldType = {
//   username?: string;
//   password?: string;
//   remember?: string;
// };

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

const IntakeInfo: React.FC = () => {
  const router = useRouter();

  const onFinish = (values: React.FormEvent) => {
    console.log("Success:", values);
    router.push("/intake-schedule");
  };
  return (
    <div className=" container ">
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
              Business Name :
            </label>
            <Input
              className=" w-full h-[40px] "
              placeholder=" Lab Aid Clinic "
            />
          </Form.Item>

          <Form.Item name="address">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Business Address :
            </label>
            <Input
              className=" w-full h-[40px] "
              placeholder="Apt. 738 2086 Marianne Parks, Stammhaven, NE 66454-8886"
            />
          </Form.Item>

          <Form.Item name="business">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              How long have you been in business?
            </label>
            <div className=" flex-col">
              <Radio.Group>
                <Radio value="startUp" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Start Up </span>{" "}
                </Radio>{" "}
                <br />
                <Radio value="oneYear" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">
                    Less than 1 year{" "}
                  </span>{" "}
                </Radio>{" "}
                <br />
                <Radio value="twoYear" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">
                    Less than 2 years{" "}
                  </span>{" "}
                </Radio>{" "}
                <br />
                <Radio value="thirdYear" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">
                    Greater than 3 years{" "}
                  </span>{" "}
                </Radio>{" "}
                <br />
                <Radio value="fiveYear" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">
                    Greater than 5 years{" "}
                  </span>{" "}
                </Radio>{" "}
                <br />
              </Radio.Group>
            </div>
          </Form.Item>

          <Form.Item name="business2">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Does your business have malpractice insurance?
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

          <Form.Item name="business3">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Is your business registered with the Secretary of State?
            </label>
            <div className=" flex-col gap-4">
              <Radio.Group>
                <Radio value="yes" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Yes </span>{" "}
                </Radio>{" "}
                <Radio value="no" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">No </span>{" "}
                </Radio>{" "}
              </Radio.Group>
            </div>
          </Form.Item>

          <Form.Item name="business4">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              What state(s) is your business registered in?
            </label>
            <Select className="h-[40px]">
              {counties?.map((country, index) => (
                <Select.Option key={index} value={country}>
                  {country}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="business5">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Who owns the company?
            </label>
            <div className=" flex-col gap-4">
              <Radio.Group>
                <Radio value="myself" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Myself </span>{" "}
                </Radio>{" "}
                <br />
                <Radio value="partners" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">
                    Myself and other Partner(s)
                  </span>{" "}
                </Radio>{" "}
                <br />
                <Radio value="Entity" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Entity</span>{" "}
                </Radio>{" "}
                <br />
              </Radio.Group>
            </div>
          </Form.Item>

          <div className=" ms-10 mt-0">
            <Form.Item name="business6">
              <label
                htmlFor=" "
                className="text-lg mb-6 text-[#737373] font-semibold "
              >
                What type of entity?
              </label>
              <div className=" flex-col gap-4">
                <Radio.Group>
                  <Radio value="llc" className=" text-xl my-2">
                    {" "}
                    <span className=" text-lg font-medium ">llc </span>{" "}
                  </Radio>{" "}
                  <br />
                  <Radio value="pllc" className=" text-xl my-2">
                    {" "}
                    <span className=" text-lg font-medium ">PLLC</span>{" "}
                  </Radio>{" "}
                </Radio.Group>
              </div>
            </Form.Item>
          </div>

          <Form.Item name="business7">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Who will be providing direct services at your business?
            </label>
            <div className=" flex-col gap-4">
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="mySelf" className="text-lg font-medium ">
                    Myself
                  </Radio>

                  <Radio value="employees" className="text-lg font-medium ">
                    Employees
                    <Input
                      type="number"
                      style={{ width: 100, marginLeft: 10 }}
                    />
                  </Radio>

                  <Radio value={4} className="text-lg font-medium ">
                    Contractors
                    <Input
                      type="number"
                      style={{ width: 100, marginLeft: 10 }}
                    />
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
          </Form.Item>

          <Form.Item name="business8">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              What state(s) do you anticipate providing services in?
            </label>
            <Select className="h-[40px]">
              {counties?.map((country, index) => (
                <Select.Option key={index} value={country}>
                  {country}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="business9">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              What tier of services are you interested in?
            </label>
            <div className=" flex-col gap-4">
              <Radio.Group>
                <Radio value="tier1" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Tier 1 </span>{" "}
                </Radio>{" "}
                <Radio value="Tier2" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Tier 2</span>{" "}
                </Radio>{" "}
                <Radio value="Tier3" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Tier 3 </span>{" "}
                </Radio>{" "}
                <Radio value="Tier4" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Tier 4 </span>{" "}
                </Radio>{" "}
                <Radio value="custom" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Custom </span>{" "}
                </Radio>{" "}
              </Radio.Group>
            </div>
          </Form.Item>

          <Form.Item name="business10">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              How many clients/patients do you have or expect to service a
              month?
            </label>
            <Input className=" w-full h-[40px] " type="number" />
          </Form.Item>

          <Form.Item name="business11">
            <label
              htmlFor=" "
              className="text-lg mb-6 text-[#737373] font-semibold "
            >
              Additional questions you have for the scheduled call please write
              below
            </label>
            <TextArea
              rows={4}
              placeholder="Write your additional questions here..."
              className=""
            />
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

export default IntakeInfo;
