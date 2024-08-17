"use client";
import { Button, DatePicker, Form, Input, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

import DashboardTitle from "../shared/DashboardTitle";
import moment from "moment";
import { usePostBillingMutation } from "@/redux/apiSlices/ClientDashboardSlices";
import { useGetProfileQuery } from "@/redux/apiSlices/AuthSlices";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Billing = () => {
  const documents = [
    {
      title: "Onboarding Fee",
      value: "onoarding_fee",
    },
    {
      title: "Monthly/Annual ACH payments",
      value: "ach_payment",
    },
    {
      title: "Vendor Ordering",
      value: "vendor_ordering",
    },
  ];

  const [postBilling, { isSuccess, isError, error }] = usePostBillingMutation();
  const [document, setDocument] = useState<{ [key: string]: File }>({}); 
  const { data } = useGetProfileQuery(undefined);
  const id = data?.user?.id; 
  const router = useRouter()


  const onFinish = async (values: any) => {
    const formData = new FormData();


    Object.entries(document).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await postBilling(formData).then((response) => {
     if (response?.data?.status === 200) {
        Swal.fire({
          text: response?.data?.message || "Your file uploaded successfully",
          icon: "success",
          timer: 1500,
        })
      } else {
        Swal.fire({ 
          // @ts-ignore
          text: response?.error?.data?.message || "An error occurred",
          icon: "error",
          timer: 1500,
        });
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDocument((prev: any) => ({
        ...prev, 
        //@ts-ignore
        [e.target.name]: e?.target?.files[0],
      }));
    }
  };

  return (
    <div>
      {/* todo : date add hobe  */}
      <div className=" w-full ">
        <div className=" grid lg:grid-cols-12  gap-5 h-screen">
          <div className=" lg:col-span-8 lg:p-10 p-6">
            <div className=" flex items-center justify-between">
              <DashboardTitle> Upload Your Receipts </DashboardTitle>
            </div>

            <div className="mt-4">
              <Form
                className="w-full  mt-4  "
                onFinish={onFinish}
                layout="vertical"
              >
                <div className="  w-full  gap-20">
                  <div className="">
                    {documents?.map((data: any, index: number) => (
                      <div key={index}>
                        <Form.Item
                          name={data?.value}
                          label={
                            <p className="text-[16px]  text-[#737373] font-semibold flex items-center gap-1">
                              <span> {index + 1} </span>.
                              <span>{data?.title} </span>
                            </p>
                          }
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: `Please upload your ${data?.title} file!`,
                          //   },
                          // ]}
                          className=""
                        >
                          <Input
                            name={data?.value}
                            type="file"
                            id={data?.value}
                            onChange={handleChange}
                            style={{
                              display: "none",
                            }}
                          />
                          <label
                            htmlFor={data?.value}
                            className=" flex items-center w-full gap-2 bg-[#E8F6FE] py-3 px-2 rounded-lg"
                          >
                            {" "}
                            <span className=" h-[30px] w-[30px] bg-white rounded-full text-center my-1/2  text-xl text-[#737373]">
                              <UploadOutlined />{" "}
                            </span>{" "}
                            <span className="  text-[16px] font-medium text-[#737373]">
                              {document[data.value]?.name ? (
                                <p className="text-[#1d75f2]">
                                  {document[data.value].name}{" "}
                                </p>
                              ) : (
                                <p> Click to upload</p>
                              )}
                            </span>
                          </label>
                        </Form.Item>
                      </div>
                    ))}
                  </div>

        <div></div>
                </div>

                <Form.Item className="text-end">
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      border: "none",
                      height: "41px",
                      background: "#1D75F2",
                      color: "white",
                      borderRadius: "8px",
                      outline: "none",
                      width: "150px",
                    }}
                  >
                  Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Billing;
