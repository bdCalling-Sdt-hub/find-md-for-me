"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Radio, Select, Space } from "antd";
import Title from "@/components/shared/Title";
import SubTitle from "@/components/shared/SubTitle";
import { useParams } from "next/navigation";
import {
  useGetStateQuery,
  useGetTierQuery,
  usePostBussinessInfoMutation,
} from "@/redux/apiSlices/WebPagesSlices";
import DataAlerts from "@/components/shared/DataAlerts";

const { TextArea } = Input;
const IntakeInfo: React.FC = () => {
  const [companyType, setCompanyType] = useState(null);

  const { data } = useGetStateQuery(undefined);
  const [postBussinessInfo, { isError, error, isSuccess }] =
    usePostBussinessInfoMutation();
  const [selectedValue, setSelectedValue] = useState("employee");
  const [inputValues, setInputValues] = useState(null);
  const params = useParams();
  const path = `/intake-schedule/${params?.valueId}`;
  // @ts-ignore
  const { data: tierData } = useGetTierQuery(undefined);
  console.log(tierData);

  const handleRadioChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const handleInputChange = (value: any) => {
    setInputValues(value);
  };

  const counties = data?.data?.map((data: any) => ({
    label: data?.state_name,
    value: data?.state_name,
  }));

  const onChange = (e: any) => {
    setCompanyType(e.target.value);
  };

  const onFinish = async (values: React.FormEvent) => {
    // console.log("Success:", values);
    const data = {
      parsonal_id: params?.valueId,
      ...values,
    };
    await postBussinessInfo(data).then((res) => console.log(res));
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
        <Form
          name="basic"
          onFinish={onFinish}
          className=" w-[100%]   "
          layout="vertical"
        >
          <Form.Item
            name="buisness_name"
            rules={[
              {
                required: true,
                message: "Please enter your Business Name!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Business Name :
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
              placeholder=" Lab Aid Clinic "
            />
          </Form.Item>

          <Form.Item
            name="buisness_address"
            rules={[
              {
                required: true,
                message: "Please enter your Business Address!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Business Address :
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
              placeholder="Apt. 738 2086 Marianne Parks, Stammhaven, NE 66454-8886"
            />
          </Form.Item>

          <Form.Item
            name="how_long_time_buisness"
            rules={[
              {
                required: true,
                message: "Please enter this field!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                How long have you been in business?
              </p>
            }
          >
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

          <Form.Item
            name="business_malpractice_insurance"
            rules={[
              {
                required: true,
                message: "Please enter your opnion",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Does your business have malpractice insurance?
              </p>
            }
          >
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

          <Form.Item
            name="business_registe_red_secretary_state"
            rules={[
              {
                required: true,
                message: "Please enter your opnion !",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Is your business registered with the Secretary of State?
              </p>
            }
          >
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

          <Form.Item
            name="what_state_your_business_registered"
            rules={[
              {
                required: true,
                message: "Please enter your business registered state !",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                What state(s) is your business registered in?
              </p>
            }
          >
            <Select className="h-[40px] w-[80%]" options={counties} />
          </Form.Item>

          <Form.Item
            name="owns_the_company"
            rules={[
              {
                required: true,
                message: "Please enter this field !",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Who owns the company?
              </p>
            }
          >
            <div className=" flex-col gap-4">
              <Radio.Group onChange={onChange}>
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

              <div
                className={`ms-10 mt-0 ${
                  companyType === "Entity" ? " block" : " hidden"
                }`}
              >
                <div>
                  <label className="text-lg  text-[#737373] font-semibold ">
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
                </div>
              </div>
            </div>
          </Form.Item>

          <Form.Item
            name="direct_service_business"
            rules={[
              {
                required: true,
                message: "Please enter your information!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Who will be providing direct services at your business?
              </p>
            }
          >
            <div className=" flex-col gap-4">
              <Radio.Group onChange={handleRadioChange} value={selectedValue}>
                <Space direction="vertical">
                  <Radio value="mySelf" className="text-lg font-medium ">
                    Myself
                  </Radio>

                  <Radio
                    value={`employees ${inputValues}`}
                    className="text-lg font-medium"
                  >
                    Employees
                    {selectedValue.includes("employees") && (
                      <Input
                        type="number"
                        style={{ width: 100, marginLeft: 10 }}
                        onChange={(e) => handleInputChange(e.target.value)}
                      />
                    )}
                  </Radio>

                  <Radio
                    value={`contractors ${inputValues}`}
                    className="text-lg font-medium"
                  >
                    Contractors
                    {selectedValue.includes("contractors") && (
                      <Input
                        type="number"
                        style={{ width: 100, marginLeft: 10 }}
                        onChange={(e) => handleInputChange(e.target.value)}
                      />
                    )}
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
          </Form.Item>

          <Form.Item
            name="what_state_anicipate_service"
            rules={[
              {
                required: true,
                message: "Please enter your business services state !",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                What state(s) do you anticipate providing services in?
              </p>
            }
          >
            <Select className="h-[40px] w-[80%]" options={counties} />
          </Form.Item>

          <Form.Item
            name="tier_service_interrested"
            rules={[
              {
                required: true,
                message: "Please enter this field!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                What tier of services are you interested in?
              </p>
            }
          >
            <div className=" flex-col gap-4">
              <Radio.Group>
                {tierData?.data?.map((value: any, index: number) => (
                  <Radio
                    key={index}
                    value={value?.id}
                    className=" text-xl my-2"
                  >
                    {" "}
                    <span className=" text-lg font-medium ">
                      {value?.tyer_name}
                    </span>{" "}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
          </Form.Item>

          <Form.Item
            name="how_many_client_patients_service_month"
            rules={[
              {
                required: true,
                message: "Please enter this field!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                How many clients/patients do you have or expect to service a
                month?
              </p>
            }
          >
            <Input className=" w-full h-[40px] " type="number" />
          </Form.Item>

          <Form.Item
            name="additional_question"
            rules={[
              {
                required: true,
                message: "Please enter this field!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Additional questions you have for the scheduled call please
                write below
              </p>
            }
          >
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
      <DataAlerts
        isShow={isSuccess}
        path={path}
        isError={isError}
        showMSG={error}
      />
    </div>
  );
};

export default IntakeInfo;
