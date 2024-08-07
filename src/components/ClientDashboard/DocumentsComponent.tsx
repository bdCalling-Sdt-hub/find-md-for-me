"use client";
import { Button, Form, Input, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import DashboardTitle from "../shared/DashboardTitle";
import { usePostDocumentMutation } from "@/redux/apiSlices/ClientDashboardSlices";
import DataAlerts from "../shared/DataAlerts";

const DocumentsComponent = () => {
  const documents = [
    {
      title: "RESUME",
      value: "resume",
    },
    {
      title: "LICENSE+CERTIFICATION+CEUs/CME/CE",
      value: "license_certification",
    },
    {
      title: "LIABILITY INSURANCE",
      value: "libability_insurnce",
    },
    {
      title: "BUSINESS FORMATION DOCUMENTS",
      value: "buisness_formations_doc",
    },
    {
      title: "EIN FORM (SS-4) Sent by IRS",
      value: "enform",
    },
    {
      title: "CURRENT DRIVERS LICENSE",
      value: "currrent_driver_license",
    },
    {
      title: "CURRENT CPR CERTIFICATION",
      value: "current_cpr_certification",
    },
    {
      title: "BLOOD BORNE PATHOGEN CERTIFICATION",
      value: "blood_bron_pathogen_certificaton",
    },
    {
      title: "TRAININGS (ex: HIPAA, OSHA, etc.)",
      value: "training_hipaa_osha",
    },
  ];

  const [document, setDocument] = useState<{ [key: string]: File }>({});
  const [userId, setUserId] = useState(null);
  console.log(userId);
  const [postDocument, { isError, isSuccess, error }] =
    usePostDocumentMutation();
  const path = `/documents/${userId}?step=1`;
  console.log(document);

  const onFinish = async (values: any) => {
    console.log(values);
    const formdata = new FormData();

    Object.entries(document).forEach(([key, value]) => {
      formdata.append(key, value);
    });

    await postDocument(formdata).then((res) => {
      setUserId(res?.data?.data?.id);
    });
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
          <DashboardTitle>Upload Documents</DashboardTitle>

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
                <Button type="primary" htmlType="submit">
                  {" "}
                  Next
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
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

export default DocumentsComponent;
