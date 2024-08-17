"use client";
import React, { useState } from "react";
import { Button,  Form, Input, Popover, Radio, Select, Space } from "antd";
import Title from "@/components/shared/Title";
import SubTitle from "@/components/shared/SubTitle";
import {  useRouter,} from "next/navigation";
import {
  useGetPriceQuery,
  useGetStateQuery,
  usePostBussinessInfoMutation,
} from "@/redux/apiSlices/WebPagesSlices";
import Swal from "sweetalert2";
import TierDetails from "./TierDetails";
import Link from "next/link";
import { GetLocalStorage } from "@/util/LocalStorage";


const { TextArea } = Input;
const IntakeInfo: React.FC = () => {
  const [companyType, setCompanyType] = useState(null);

  const { data } = useGetStateQuery(undefined);
  const [postBussinessInfo, {  error,}] =
    usePostBussinessInfoMutation();
  const [selectedValue, setSelectedValue] = useState("employee"); 
  const [inputValues, setInputValues] = useState(null); 
  const router = useRouter() 
  // @ts-ignore 
  const { data: tierData } = useGetPriceQuery("Monthly"); 
  
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
  const IntakeId = GetLocalStorage("intakeId")  
  console.log(IntakeId);
 

  const onFinish = async (values: React.FormEvent) => {
    // console.log("Success:", values);
    const data = { 
      parsonal_id:IntakeId , 
      ...values,
    };  


    await postBussinessInfo(data).then((res) => {  
     if(res?.data?.status === 200){
      router.push(`/intake-schedule/${IntakeId}`) 
     } else{
      Swal.fire({
        // @ts-ignore
        text: error?.data?.message,
        icon: "error",
      });
     }
    
    });
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
                <Radio value="less than one year" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">
                    Less than 1 year{" "}
                  </span>{" "}
                </Radio>{" "}
                <br />
                <Radio value="less than 2 years" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">
                    Less than 2 years{" "}
                  </span>{" "}
                </Radio>{" "}
                <br />
                <Radio value="greater than 3 years" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">
                    Greater than 3 years{" "}
                  </span>{" "}
                </Radio>{" "}
                <br />
                <Radio value="greater than 5 years" className=" text-xl my-2">
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
                        <span className=" text-lg font-medium ">LLC </span>{" "}
                      </Radio>{" "}
                      <br />
                      <Radio value="pllc" className=" text-xl my-2">
                        {" "}
                        <span className=" text-lg font-medium ">PLLC</span>{" "}
                      </Radio>{" "}
                      <br />
                      <Radio value="corporation" className=" text-xl my-2">
                        {" "}
                        <span className=" text-lg font-medium ">Corporation</span>{" "}
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
                   <Popover  key={index} content={<TierDetails value={value} />} trigger="hover">  
                        <Radio
                   
                    value={value?.id}
                    className=" text-xl my-2"
                  >
                    {" "}
                    <span className=" text-lg font-medium ">
                      {value?.tyer_name}
                    </span>{" "}
                  </Radio>
                   </Popover>
             
                ))}
              </Radio.Group>
            </div>
          </Form.Item> 

          <Form.Item
            name="client_type"
            rules={[
              {
                required: true,
                message: "Please enter your Type !",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
              Client Type?
              </p>
            }
          >
            <div className=" flex-col gap-4">
              <Radio.Group>
                <Radio value="individual" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Individual </span>{" "}
                </Radio>{" "}
                <Radio value="business" className=" text-xl my-2">
                  {" "}
                  <span className=" text-lg font-medium ">Business </span>{" "}
                </Radio>{" "}
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
 

 <div className=" flex items-center justify-end gap-4">  
  <Link  href="/intake-info-first"> 
  <Button className="w-20 h-11 border border-[#C738BD] text-[#C738BD] text-[16px] font-medium  px-2 py-2 rounded-lg"> Previous</Button> 
  </Link>
 
  <Form.Item className="mt-[16px] ">
            <Button  type="primary" htmlType="submit" style={{ width:"100px" , height:"45px" }}>
              Next
            </Button>
          </Form.Item>
 </div>
         
        </Form>
      </div>

    </div>
  );
};

export default IntakeInfo;
