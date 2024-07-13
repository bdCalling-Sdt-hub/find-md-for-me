"use client";
import { Button, DatePicker, Form, Upload } from "antd";
import React from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import Link from "next/link";
import dayjs from "dayjs";
import DashboardTitle from "../shared/DashboardTitle";

const Billing = () => {
  const documents = [
    "Onboarding Fee",
    "Monthly/Annual ACH payments",
    "Vendor Ordering",
  ];
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  return (
    <div>
      <div className=" w-full ">
        <div className=" grid lg:grid-cols-12  gap-5 h-screen">
          <div className=" lg:col-span-8 lg:p-10 p-6">
            <div className=" flex items-center justify-between">
              <DashboardTitle> Upload Your Receipts </DashboardTitle>

              <button className="  border border-[#C738BD] text-black bg-transparent lg:px-6 py-2 px-2  rounded-lg">
                Paid on
              </button>
            </div>

            <div className=" lg:flex  w-full ">
              <div className=" lg:w-1/2 mt-6 ms-2 ">
                {documents?.map((data, index) => (
                  <div key={index}>
                    <Form className="w-full ">
                      <Form.Item
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                      >
                        <label
                          htmlFor=" "
                          className="text-[16px] mb-2 text-black font-semibold flex items-center gap-1 "
                        >
                          <span> {index + 1} </span> <span>{data} </span>
                        </label>
                        <div className="">
                          <Upload
                            name="logo"
                            action="/upload.do"
                            listType="picture"
                            className=" "
                          >
                            <Button className=" flex items-center w-full shadow-xl">
                              {" "}
                              <span>
                                <UploadOutlined />{" "}
                              </span>{" "}
                              <span>Click to upload</span>
                            </Button>
                          </Upload>
                        </div>
                      </Form.Item>
                    </Form>
                  </div>
                ))}
              </div>

              {/* date   */}
              <div className="lg:w-1/2 mt-8 mb-8 lg:mb-1">
                <DatePicker
                  defaultValue={dayjs("01/01/2024", dateFormatList[0])}
                  format={dateFormatList}
                  className="lg:w-[250px]"
                />
              </div>
            </div>

            <div className=" lg:text-center text-end">
              <Link href="/meeting-schedule">
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
                  Next
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-50 p-10  ">
            <Form>
              <Form.Item>
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger
                    name="files"
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture"
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint"> (Max. File size: 50 MB)</p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
