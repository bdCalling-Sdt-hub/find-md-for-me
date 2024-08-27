"use client";
import { Button, Form, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import DashboardTitle from "../shared/DashboardTitle";
import { useGetDocumentQuery, usePostDocumentMutation } from "@/redux/apiSlices/ClientDashboardSlices";
import DataAlerts from "../shared/DataAlerts";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const DocumentsComponent = ({current, setCurrent}:any) => {
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
  const {data:documentData} =  useGetDocumentQuery(undefined) 
  console.log(documentData);
  const [userId, setUserId] = useState(null);
  const [postDocument] = usePostDocumentMutation(); 
  const router = useRouter() 

  useEffect(() => {
    if (documentData?.status === 200 && documentData.data) {
      const initialDocuments: { [key: string]: File | null } = {};
      documents.forEach((doc) => {
        const fileName = documentData.data[doc.value]?.split("/").pop();
        if (fileName) {
          initialDocuments[doc.value] = new File([], fileName); // Use file name from the fetched data
        }
      }); 
      // @ts-ignore
      setDocument(initialDocuments);
    }
  }, [documentData]);

  const onFinish = async () => {
    const formdata = new FormData();
  
    Object.entries(document).forEach(([key, value]) => {
      formdata.append(key, value);
    });
  
    try {
      const response = await postDocument(formdata); 
      // console.log(response); 
  
      if (response?.data?.status === 200) {
        localStorage.setItem("upload_id", response?.data?.data?.id)
        const nextStep = current + 1;
        setCurrent(nextStep);
  
        const params = new URLSearchParams(window.location.search);
        params.set("step", nextStep.toString());
        window.history.pushState(null, "", `?${params.toString()}`);
      } else {
        Swal.fire({ 
          // @ts-ignore
          text: response?.error?.data?.message || "An error occurred",
          icon: "error",
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        text: "An unexpected error occurred",
        icon: "error",
        timer: 1500,
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
                <Button type="primary" htmlType="submit" style={{height:"45px" , width:"120px" , fontSize:"20px"}}>
                  {" "}
                  Next
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsComponent;
