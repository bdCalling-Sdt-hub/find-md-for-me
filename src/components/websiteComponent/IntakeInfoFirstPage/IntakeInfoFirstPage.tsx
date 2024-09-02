"use client";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import { useRouter } from "next/navigation";
import {
  useGetStateQuery,
  usePostPersonalInfoMutation,
} from "@/redux/apiSlices/WebPagesSlices";
import moment from "moment";
import Swal from "sweetalert2";
import { SetLocalStorage } from "@/util/LocalStorage";

const IntakeInfoFirstPage: React.FC = () => {
  const { data } = useGetStateQuery("");
  const [postPersonalInfo, { error, data: postData }] = usePostPersonalInfoMutation();




  const counties = data?.data?.map((state: any) => ({
    label: state?.state_name,
    value: state?.state_name,
  }));

  const router = useRouter();

  const onFinish = async (values: any) => {
    const { birthDate, ...otherValues } = values;
    const formattedDate = moment(birthDate).format("L");
    const data = {
      dob: formattedDate,
      ...otherValues,
    };

    await postPersonalInfo(data).then((res: any) => {
      if (res?.data?.status === 200) {
        const newIntakeId = res?.data?.data?.id;
        SetLocalStorage("intakeId", newIntakeId);
        router.push(`/intake-info-second/${newIntakeId}`);
      } else {
        Swal.fire({ 
          // @ts-ignore
          text: error?.data?.message || "An error occurred",
          icon: "error",
        });
      }
    });
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
          Please Provide Your Personal Information.{" "}
        </p>
      </div>

      <div className=" lg:w-[80%] mx-auto mt-10 bg-[#E8F6FE] rounded-lg lg:p-10 p-5 lg:px-20  mb-20 z-0">
        <Form
          name="basic"
          onFinish={onFinish}
          className=" w-[100%]   "
          layout="vertical"
        >
          <Form.Item
            name="first_name"
            rules={[
              {
                required: true,
                message: "Please enter your first name!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                First Name :
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
              placeholder=" Naziya Sultana"
            />
          </Form.Item>

          <Form.Item
            name="last_name"
            rules={[
              {
                required: true,
                message: "Please enter your last name!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Last Name :
              </p>
            }
          >
            <Input className=" w-full h-[40px] " placeholder="Mithila" />
          </Form.Item>

          <Form.Item
            name="birthDate"
            className=""
            rules={[
              {
                required: true,
                message: "Please enter your birth of date!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Date of Birth:
              </p>
            }
          >
            <DatePicker className=" w-full h-[40px]"  format={{
        format: 'MMM DD YYYY',
        type: 'mask',
      }} />
          </Form.Item>

          <Form.Item
            name="email"
            label={
              <p className="text-lg  text-[#737373] font-semibold ">Email:</p>
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
              className=" w-full h-[40px] "
              placeholder="mithila@gmail.com"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter your phone!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Phone Number :
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
              placeholder="+880181234324"
              type="number"
            />
          </Form.Item>

          <Form.Item
            name="occupation"
            rules={[
              {
                required: true,
                message: "Please enter your occupation!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Occupation :
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
              placeholder="Ex: NP, Nurse, Esthetician"
              type="text"
            />
          </Form.Item>

          <Form.Item
            name="state_license_certificate"
            rules={[
              {
                required: true,
                message: "Please enter your state!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                What state(s) are you licensed/certified in?
              </p>
            }
          >
            {/* <div className=" flex gap-5 items-center w-full ">   */}
            <Select
              className="h-[40px] w-[80%]"
              options={counties}
              // onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name="license_certificate_no"
            rules={[
              {
                required: true,
                message:
                  "Please enter your license(s)/certificate(s) number(s)!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Please provide your license(s)/certificate(s) number(s)
              </p>
            }
          >
            <div className=" flex gap-5 items-center w-full ">
              <Input
                className=" w-full h-[40px] "
                placeholder="652479254"
                type="number"
              />
              {/* 
              <div className="  ">
                <Radio value="na"> N/A </Radio>
              </div> */}
            </div>
          </Form.Item>

          <Form.Item
            name="mailing_address"
            rules={[
              {
                required: true,
                message: "Please enter your Address!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Home Mailing Address
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
              placeholder="Apt. 738 2086 Marianne Parks, Stammhaven, NE 66454-8886"
            />
          </Form.Item>

          <Form.Item
            name="completed_training_certificate_service"
            rules={[
              {
                required: true,
                message: "Please enter your opinion!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Have you completed training/certification for the service(s) you
                would like to offer?
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

          <Form.Item className="text-end ">
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
  
    </div>
  );
};

export default IntakeInfoFirstPage;
