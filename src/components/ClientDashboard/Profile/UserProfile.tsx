"use client";
import React, { useEffect, useState } from "react";

import { Form, Input, Button } from "antd";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import Swal from "sweetalert2";
import {
  useGetProfileQuery,
  usePostProfileMutation,
} from "@/redux/apiSlices/AuthSlices";

import { useForm } from "antd/lib/form/Form";
import { baseUrl } from "@/redux/api/apiSlice";  
import person from "@/assests/person.png"
const UserProfile = () => {
  const [form] = useForm();
  const [image, setImage] = useState("");
  const [imgURL, setImgURL] = useState(image);
  const { data , refetch } = useGetProfileQuery(undefined); 
  // console.log(data); 
  const [postProfile] = usePostProfileMutation(); 
  // console.log(data); 

  // todo: get image
  // console.log(image);  
  // console.log(imgURL);   

  useEffect(() => {
    if (localStorage.getItem('hasReloaded')) { 
      window.location.reload()
      localStorage.removeItem('hasReloaded');
    }
  }, []);  
  


  useEffect(() => {

      const imageUrl = data?.user?.image
        ? data?.user?.image.startsWith('https')
          ? data?.user?.image
          : data?.user?.image === null ? person :  `${baseUrl}${data?.user?.image}`
        : person ; 
  
      setImgURL(imageUrl); 
      // window.location.reload();   
  }, [data]);


  const handleSubmit = async (values: any) => { 
    const formData= new FormData() 
    if(image){
 formData.append("image",image)
    } 

    Object.entries(values).forEach(([key,value])=>{ 
      // @ts-ignore
formData.append(key ,value)
    }) 

    await postProfile(formData).then((res) => {
      // console.log(res); 
      if (res?.data?.status === 200) {
        Swal.fire({
          position: "center",
          title: res?.data?.message,
          showConfirmButton: true,
          confirmButtonColor: "#C738BD",
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Oops",
          // @ts-ignore
          text: error?.data?.message,
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });

    // console.log(values);
  };

  const onChange = (e: any) => {
    const file = e.target.files[0];
    // console.log(file); 
    const imgUrl = URL.createObjectURL(file);
    setImgURL(imgUrl);
    setImage(file);
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        first_name: data?.user?.first_name,
        last_name: data?.user?.last_name,
        email: data?.user?.email,
        phone: data?.user?.phone,
        buisnes_name: data?.user?.buisness_name,
        buisness_address: data?.user?.buisness_address, 
        client_type: data?.BisnessInfo?.client_type , 
        tier_type: data?.Tier ?  data?.Tier[0]?.tyer_name : ""
      });
    }
  }, [data, form]);
  return (
    <div>
      {" "}
      <div className="lg:h-[53vh]">
        <div className="">
          {/* image   */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "38px",
            }}
          >
            <input
              onChange={onChange}
              type="file"
              name=""
              id="img"
              style={{ display: "none" }}
            />
            <label 
            className="relative"
              htmlFor="img"
              style={{
                width: "220px",
                cursor: "pointer",
                height: "180px",
                borderRadius: "18px",
                border: "1px solid #1D75F2",
                background: "white",
                backgroundImage: `url(${imgURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div 
              className="absolute -right-4 bottom-0 "
                style={{
                  background: "#E8F6FE",
                  width: "50px",
                  height: "50px", 
                  border:"2px solid  #1D75F2" ,
                  borderRadius: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MdOutlineAddPhotoAlternate size={22} color="#1D75F2" />
               
              </div>
            </label>
          </div>

          {/* forms  */}
          <div className=" lg:w-2/3 mx-auto ">
            <Form
              form={form}
              name="normal_login"
              className="login-form"
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                buisnes_name: "",
                buisness_address: "",
              }}
              style={{ width: "100%", height: "fit-content" }}
              onFinish={handleSubmit}
            >
              <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-x-16 w-full gap-y-2 pt-5">
                <div className="lg:mb-[15px]">
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    First Name
                  </label>
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    name="first_name"
                    rules={[
                      { required: true, message: "This field is required" },
                    ]}
                  >
                    <Input
                      placeholder="Enter Your First Name"
                      type="text"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",

                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="lg:mb-[15px]">
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    Last Name
                  </label>
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    name="last_name"
                    rules={[
                      { required: true, message: "This field is required" },
                    ]}
                  >
                    <Input
                      placeholder="Enter Your Last Name"
                      type="text"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",

                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="lg:mb-[15px]">
                  <label
                    style={{ display: "block", marginBottom: "5px" }}
                    htmlFor=""
                  >
                    Email
                  </label>
                  <Form.Item
                    name="email"
                    style={{ marginBottom: 0 }}
                    rules={[
                      { required: true, message: "This field is required" },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder=" Please Enter  Your  Email"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }} 
                      readOnly
                    />
                  </Form.Item>
                </div>

                <div className="lg:mb-[15px]">
                  <label style={{ marginBottom: "5px" }}>Phone Number</label>
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    name="phone"
                    rules={[
                      { required: true, message: "This field is required" },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="Enter Phone Number"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="lg:mb-[15px]">
                  <label
                    style={{ display: "block", marginBottom: "5px" }}
                    htmlFor=""
                  >
                    Business Name
                  </label>
                  <Form.Item
                    name="buisnes_name"
                    style={{ marginBottom: 0 }}
                    rules={[
                      { required: true, message: "This field is required" },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Enter your Business name "
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="lg:mb-[15px]">
                  <label
                    style={{ display: "block", marginBottom: "5px" }}
                    htmlFor=""
                  >
                    Business Address
                  </label>
                  <Form.Item
                    name="buisness_address"
                    style={{ marginBottom: 0 }}
                    rules={[
                      { required: true, message: "This field is required" },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Enter your Business address"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </Form.Item>
                </div> 

                
                <div className="lg:mb-[15px]">
                  <label
                    style={{ display: "block", marginBottom: "5px" }}
                    htmlFor=""
                  >
                    Client Type
                  </label>
                  <Form.Item
                    name="client_type"
                    style={{ marginBottom: 0 }}
                  
                  >
                    <Input
                      type="text"
                      placeholder="Enter your Business address"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }} 
                      readOnly
                    />
                  </Form.Item>
                </div> 

                <div className="lg:mb-[15px]">
                  <label
                    style={{ display: "block", marginBottom: "5px" }}
                    htmlFor=""
                  >
                   Tier Name
                  </label>
                  <Form.Item
                    name="tier_type"
                    style={{ marginBottom: 0 }}
                   
                  
                  >
                    <Input
                      type="text"
                      placeholder="Enter your Business address"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }} 
                      readOnly
                    />
                  </Form.Item>
                </div> 


              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ width: "100%", position: "relative" }}
                  className=" mt-5"
                >
                  <Form.Item>
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
                        position: "absolute",
                        right: "0px",
                        bottom: "0px",
                      }}
                    >
                      Save
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default UserProfile;
