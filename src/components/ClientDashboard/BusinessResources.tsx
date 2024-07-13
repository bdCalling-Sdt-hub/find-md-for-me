"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FaRegFileAlt } from "react-icons/fa";

const BusinessResources = () => {
  const content = ["Protocols", "Standing Order", "Policies", "Consents"];
  return (
    <div>
      <Tabs defaultValue="account" className=" mt-5 ">
        <TabsList className="bg-transparent text-[#737373] flex justify-center items-center  px-4">
          <TabsTrigger
            value="Protocols"
            className="data-[state=active]:bg-[#C738BD]  lg:px-7 px-3 lg:text-lg text:sm "
          >
            Protocols
          </TabsTrigger>
          <TabsTrigger
            value="Standing Order"
            className="data-[state=active]:bg-[#C738BD] lg:px-7 px-3 lg:text-lg text:sm "
          >
            Standing Order
          </TabsTrigger>
          <TabsTrigger
            value="Policies"
            className="data-[state=active]:bg-[#C738BD] lg:px-7 px-3 lg:text-lg text:sm "
          >
            Policies
          </TabsTrigger>
          <TabsTrigger
            value="Consents"
            className="data-[state=active]:bg-[#C738BD] lg:px-7 px-3 lg:text-lg text:sm "
          >
            Consents
          </TabsTrigger>
        </TabsList>

        <div>
          {content?.map((value, index) => (
            <TabsContent key={index} value={value}>
              <div className="lg:mx-8 mx-4 bg-[#FDFDFD] rounded-lg lg:px-10 px-4 py-2 lg:py-5 h-[100%]">
                <p className=" text-nowraplg lg:text-xl text-[#252B42] font-semibold pb-3">
                  {" "}
                  {value}
                </p>

                <p className=" text-lg lg:text-xl text-[#252B42] font-medium pb-3">
                  Upload {value} Document
                </p>

                <div className=" bg-[#E8F6FE] px-4 py-2 rounded-lg lg:w-[280px]">
                  <p className="flex text-[#1D75F2] items-center gap-2">
                    {" "}
                    <span>
                      {" "}
                      <FaRegFileAlt />{" "}
                    </span>{" "}
                    <span>HannahBusing_Resume.pdf</span>
                  </p>
                  <p className="text-[#989692]">200KB</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
        {/* <TabsContent value="Protocols">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="Standing Order">
          Change your Standing here.
        </TabsContent>
        <TabsContent value="Policies">Change your Policies here.</TabsContent>
        <TabsContent value="Consents">Change your Consents here.</TabsContent> */}
      </Tabs>
    </div>
  );
};

export default BusinessResources;
