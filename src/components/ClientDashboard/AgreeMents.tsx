"use client";
import { Button, Form, Input, Upload } from "antd";
import React, { useState } from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import Link from "next/link";
import DashboardTitle from "../shared/DashboardTitle";
import {
  usePostAgreementMutation,
  usePostDocumentMutation,
} from "@/redux/apiSlices/ClientDashboardSlices";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const AgreeMents = () => {
  const documents = [
    {
      title:
        "MANAGEMENT SERVICE AGREEMENT/collaborative practice agreement + Joint Protocol",
      value: "management_service_aggriment",
    },
    {
      title: "None disclosure agreement",
      value: "nda",
    },
    {
      title: "DELEGATION AGREEMENT",
      value: "deligation_aggriment",
    },
    {
      title: "ACH AUTHORIZATION AGREEMENT",
      value: "ach_fomr",
    },
    {
      title: "MEMBERSHIP CONTRACT",
      value: "member_ship_contact",
    },
  ];

  const [document, setDocument] = useState<{ [key: string]: File }>({});
  const [postAgreement] = usePostAgreementMutation();
  const params = useParams();
  const router = useRouter();
  console.log(params);

  const onFinish = async (values: any) => {
    const id = params?.userId;
    const formdata = new FormData();
    // @ts-ignore
    formdata.append("id", id);
    Object.entries(document).forEach(([key, value]) => {
      formdata.append(key, value);
    });

    const res = await postAgreement(formdata);

    if (res?.data?.status === 200) {
      Swal.fire({
        text: res?.data?.message,
        icon: "success",
        timer: 1500,
      }).then(() => {
        router.push(`/documents/${params?.userId}?step=2`);
      });
    } else {
      Swal.fire({
        title: "Failed to Login",
        // @ts-ignore
        text: res?.error?.data?.message,
        icon: "error",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDocument((prev: any) => ({
        ...prev,
        // @ts-ignore
        [e.target.name]: e?.target?.files[0],
      }));
    }
  };
  return (
    <div className=" w-full ">
      <div className="">
        <div className=" lg:p-10 lg:pt-0 p-6 ">
          <DashboardTitle>Upload Agreements</DashboardTitle>

          <div className="mt-4">
            <Form
              className="w-full lg:w-[60%] mt-4  "
              onFinish={onFinish}
              layout="vertical"
            >
              {documents?.map((data: any, index: number) => (
                <div key={index}>
                  <Form.Item
                    name={data?.value}
                    label={
                      <p className="text-[16px]  text-[#737373] font-semibold flex items-center gap-1">
                        <span> {index + 1} </span>.<span>{data?.title} </span>
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

              <Form.Item className="text-end">
                {/* <Link href="/documents?step=2">  */}
                <Button type="primary" htmlType="submit">
                  {" "}
                  Next
                </Button>
                {/* </Link>  */}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreeMents;
