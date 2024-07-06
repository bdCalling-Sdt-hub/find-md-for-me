"use client";
import React, { useState } from "react";

import { Form, Input, Button } from "antd";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import Swal from "sweetalert2";
// import person from "@/assests/person.png"

const UserProfile = () => {
  const [image, setImage] = useState(
    "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg"
  );
  const [imgURL, setImgURL] = useState(image);

  const handleSubmit = (values) => {
    console.log(values);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Updated Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setImgURL(imgUrl);
    setImage(file);
  };
  const initialFormValues = {
    fullName: "Nadir Hossain",
    email: "nadirhossain336@gmail.com",
    mobile_number: "01756953936",
  };
  return (
    <div>
      {" "}
      <div className="lg:h-[53vh]">
        <div className=" lg:grid lg:grid-cols-3 gap-5 lg:py-10">
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
              htmlFor="img"
              style={{
                width: "220px",
                cursor: "pointer",
                height: "180px",
                borderRadius: "18px",
                border: "1px dashed #4C535F",
                background: "white",
                backgroundImage: `url(${imgURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  width: "100%",
                  height: "100%",
                  borderRadius: "18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MdOutlineAddPhotoAlternate size={36} color="white" />
                <p style={{ color: "white", marginTop: "12px" }}>Edit Photo</p>
              </div>
            </label>
          </div>

          {/* forms  */}
          <div className="lg:col-span-2  lg:pe-20 ">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={initialFormValues}
              style={{ width: "100%", height: "fit-content" }}
              onFinish={handleSubmit}
            >
              <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-x-16 w-full gap-y-4 pt-5">
                <div className="lg:mb-[20px]">
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    Full Name
                  </label>
                  <Form.Item style={{ marginBottom: 0 }} name="fullName">
                    <Input
                      placeholder="Enter Your Full Name"
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

                <div className="lg:mb-[20px]">
                  <label
                    style={{ display: "block", marginBottom: "5px" }}
                    htmlFor=""
                  >
                    EmaiUser
                  </label>
                  <Form.Item name="email" style={{ marginBottom: 0 }}>
                    <Input
                      type="text"
                      placeholder="Enter Email"
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

                <div className="lg:mb-[40px]">
                  <label style={{ marginBottom: "5px" }} htmlFor="email">
                    Phone Number
                  </label>
                  <Form.Item style={{ marginBottom: 0 }} name="mobile_number">
                    <Input
                      type="text"
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

                <div className="lg:mb-[20px] mb-[20px]">
                  <label
                    style={{ display: "block", marginBottom: "5px" }}
                    htmlFor=""
                  >
                    Password
                  </label>
                  <Form.Item name="password" style={{ marginBottom: 0 }}>
                    <Input.Password
                      type="password"
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
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "100%", position: "relative" }}>
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
