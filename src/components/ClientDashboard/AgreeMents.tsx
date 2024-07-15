"use client";
import { Button, Form, Upload } from "antd";
import React from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import Link from "next/link";
import DashboardTitle from "../shared/DashboardTitle";

const AgreeMents = () => {
  const documents = [
    "MANAGEMENT SERVICE AGREEMENT/collaborative practice agreement + Joint Protocol",
    "None disclosure agreement",
    "DELEGATION AGREEMENT",
    "ACH AUTHORIZATION AGREEMENT",
    "Membership Contract",
  ];
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div className=" w-full ">
      <div className=" grid lg:grid-cols-12  gap-5 h-screen">
        <div className=" lg:col-span-8 lg:p-10 p-6">
          <DashboardTitle> Upload Agreements </DashboardTitle>

          <div className=" w-full mt-4 ">
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
                      className="text-[16px] mb-2 text-[#737373] uppercase font-semibold flex items-center gap-1 "
                    >
                      <span> {index + 1} </span> <span>{data} </span>
                    </label>
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button className=" flex items-center w-full">
                        {" "}
                        <span>
                          <UploadOutlined />{" "}
                        </span>{" "}
                        <span>Click to upload</span>
                      </Button>
                    </Upload>
                  </Form.Item>
                </Form>
              </div>
            ))}
          </div>

          <div className=" text-center">
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

        <div className="lg:col-span-4 bg-slate-50 p-10 ">
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
  );
};

export default AgreeMents;
