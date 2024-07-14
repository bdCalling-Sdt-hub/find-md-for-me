"use client";
import React from "react";
import DashboardTitle from "../shared/DashboardTitle";
import { Button } from "../ui/button";
import { Form, Input, Select } from "antd";
import Link from "next/link";

const Vendors = () => {
  const vendors = [
    "ALLERGAN",
    "DRUGCRAFTERS",
    "EVOLUS",
    "GALDERMA",
    "MCKESSON",
    "MERZ",
    "OLYMPIA",
    "PROLLENIUM",
    "RITE VALUE",
    "V-SOFT THREADS",
  ];
  const shipping = ["Overnight", "Expedited", "Standard"];

  return (
    <div>
      <div className="pt-3 ps-3">
        {" "}
        <DashboardTitle>Order Form</DashboardTitle>
        <div className=" flex justify-center items-center mt-2 mb-5">
          <Button variant="default">Order Form Here</Button>
        </div>
      </div>

      <div className="flex justify-center items-center mb-10  ">
        <Form className="w-3/4 bg-[#E8F6FE] rounded-lg  ">
          <div className="py-10 px-10 ">
            <div className=" lg:flex gap-5  w-full">
              <Form.Item className=" w-full">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  First Name
                </label>
                <Input placeholder="Naziya Sultana" className="h-[45px] mt-2" />
              </Form.Item>

              <Form.Item className=" w-full">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  {" "}
                  Last Name
                </label>
                <Input placeholder="Mithila " className="h-[45px] mt-2" />
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Naziya@gmail.com"
                  className="h-[45px] mt-2"
                />
              </Form.Item>

              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Phone Number{" "}
                </label>
                <Input
                  type="number"
                  placeholder="+0888798345326 "
                  className="h-[45px] mt-2"
                />
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Shipping Address
                </label>
                <Input
                  type="text"
                  placeholder="Street Address"
                  className="h-[45px] mt-2"
                />
                <div className="mt-3">
                  <Input
                    type="text"
                    placeholder="City/State/Province/Region"
                    className="h-[45px] "
                  />
                </div>
              </Form.Item>

              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Items Description{" "}
                </label>
                <Input.TextArea
                  rows={4}
                  placeholder=" Description of Products "
                  className=" mt-2"
                />
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Item Number (If available)
                </label>
                <Input
                  type="number"
                  placeholder="9879074"
                  className="h-[45px] mt-2"
                />
              </Form.Item>

              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Price{" "}
                </label>
                <Input
                  type="number"
                  placeholder="$787"
                  className="h-[45px] mt-2"
                />
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Shipping Address
                </label>
                <Input
                  type="text"
                  placeholder="Street Address"
                  className="h-[45px] mt-2"
                />
                <div className="mt-3">
                  <Input
                    type="text"
                    placeholder="City/State/Province/Region"
                    className="h-[45px] "
                  />
                </div>
              </Form.Item>

              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Items Description{" "}
                </label>
                <Input.TextArea
                  rows={4}
                  placeholder=" Description of Products "
                  className=" mt-2"
                />
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Quantity
                </label>
                <Input
                  type="number"
                  placeholder="9"
                  className="h-[45px] mt-2"
                />
              </Form.Item>

              <Form.Item className="lg:w-1/2">
                <label
                  htmlFor=" "
                  className="text-lg mb-6 text-[#737373] font-semibold  "
                >
                  What state(s) is your business registered in?
                </label>
                <Select className="h-[45px]  mt-2">
                  {vendors?.map((value, index) => (
                    <Select.Option key={index} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item className=" lg:w-1/2">
                <label className="text-lg mb-6 text-[#737373] font-semibold ">
                  Comments/Questions{" "}
                </label>
                <Input.TextArea
                  rows={5}
                  placeholder="write here... "
                  className=" mt-2"
                />
              </Form.Item>

              <div className="lg:w-1/2">
                <Form.Item>
                  <label
                    htmlFor=" "
                    className="text-lg mb-6 text-[#737373] font-semibold  "
                  >
                    What state(s) is your business registered in?
                  </label>
                  <Select className="h-[45px]  mt-2 py-2">
                    {shipping?.map((value, index) => (
                      <Select.Option key={index} value={value}>
                        {value}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item className=" ">
                  <label className="text-lg mb-6 text-[#737373] font-semibold ">
                    Print Name{" "}
                    <span className="text-[#C738BD]"> (Required)</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Warren Buffett"
                    className="h-[45px] mt-2"
                  />
                </Form.Item>
              </div>
            </div>

            <div className="lg:flex gap-5 w-full">
              <div className="lg:w-1/2">
                <p className="">
                  Please Note: orders received by 12:00 pm CST will be processed
                  the same day + shipped out the following business day. Orders
                  received after 12:00 pm CST will be processed the next
                  business day. Orders are shipped on Monday-Thursday. Orders
                  placed after 12:00 pm CST on Thursday or on Friday, Saturday,
                  or Sunday will not be processed until the following business
                  day. Additional charges for expedited + guaranteed shipping
                  apply.
                </p>
              </div>
              <div className="lg:w-1/2 lg:mt-[1px] mt-3">
                <p>
                  By printing your name, you are acknowledging + consenting to
                  your credit card on file to be charged for the order submitted
                  on this form. For new purchasers, completion of the credit
                  card authorization is required to confirm and reserve order.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <Link href="/document-submit">
                <Button variant="btn2">Confirm Order</Button>
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Vendors;
