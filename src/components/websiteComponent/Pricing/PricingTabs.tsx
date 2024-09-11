"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import Link from "next/link";
import { Popover } from "antd";
import { useGetPriceQuery } from "@/redux/apiSlices/WebPagesSlices"; 
import AOS from "aos" ;
import "aos/dist/aos.css";

const PricingTabs = () => {
  const [pricingType, setPricingType] = useState("Monthly");
  const { data, refetch } = useGetPriceQuery(undefined);   
  // console.log(data); 

  useEffect(()=>{
    AOS.init()
  },[])

  useEffect(() => {
    refetch();
  }, [pricingType , refetch]);

  const handleValue = (value: any) => {

    setPricingType(value);
  };

  const monthlyValues = data?.data.map((value: any) => ({
    title: value?.tyer_name,
    title2: `$${value?.price[0]?.price_1}-I`,
    title3: `$${value?.price[0]?.price_2}-B`,
    type: value?.price[0]?.pricing_type,
    sevice: value?.price[0]?.service,
  }));

  const yearlyValues = data?.data.map((value: any) => ({
    title: value?.tyer_name,
    title2: `$${Math.ceil((parseInt(value?.price[0]?.price_1)*12)* 0.9)}-I`,
    title3: `$${Math.ceil((parseInt(value?.price[0]?.price_2)*12)*0.9)}-B`,
    type: value?.price[0]?.pricing_type,
    sevice: value?.price[0]?.service,
  }));

  return (
    <div  data-aos="fade-up"
    data-aos-easing="linear"  data-aos-duration="500">
      <Tabs
        defaultValue="Monthly"
        value={pricingType}
        // onValueChange={(value) => setPricingType(value)}
        onValueChange={(value) => handleValue(value)}
        className="w-full  mt-9 "
      >
        <div className="flex items-center justify-center ">
          <TabsList className="  w-[200px]">
            <TabsTrigger value="Monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">
              <Popover content={ <p className=" p-2   rounded-lg font-semibold">10% Discount </p>} open>
                {" "}
                Annually{" "}
              </Popover>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="Monthly" className="">
          <div className=" flex lg:flex-row flex-col lg:gap-5 md:gap-2 text-black  ">
            {monthlyValues?.map((value: any, index: number) => (
              <div
                key={index}
                className="bg-[#E8F6FE]  rounded-b-lg   lg:w-1/4 relative h-[70vh] mb-5 lg:mb-1 "
              >
                <p
                  className={`w-full h-[2px] rounded-xl  ${
                    value?.title === "Tier 1" && "bg-[#FF31F7]"
                  } ${value?.title === "Tier 2" && "bg-[#F59E0B]"} 
                   ${value?.title === "Tier 3" && "bg-[#10B981]"} 
                    ${value?.title === "Tier 4" && "bg-[#AA0BF5]"}  `}
                  // style={{ backgroundColor: value?.titleColor }}
                >
                  {" "}
                </p>

                <div className="p-4 flex flex-col h-full">
                  <div className="  ">
                    <p
                      className={`text-lg font-semibold  ${
                        value?.title === "Tier 1" && "text-[#FF31F7]"
                      } ${value?.title === "Tier 2" && "text-[#F59E0B]"} 
                       ${value?.title === "Tier 3" && "text-[#10B981]"} 
                        ${value?.title === "Tier 4" && "text-[#AA0BF5]"}  `}
                      // style={{ color: value?.titleColor }}
                    >
                      {value?.title}{" "}
                    </p>
                    <p className=" text-[28px] font-semibold mt-2 ">
                      {" "}
                      {value?.title2}
                    </p>
                    <p className=" text-[28px] font-semibold mb-2 ">
                      {" "}
                      {value?.title3}
                    </p>
                    <p className=" text-[12px] text-[#252B42] pb-2">
                    Billed  Monthly
                    </p> 
                    <p className="text-[14px] font-[500] pb-1">Services Covered:</p>
                  </div>

                  <div className="h-full flex-1 overflow-y-auto ">
                    {value?.sevice?.map((data: any, index: number) => (
                      <p
                        key={index}
                        className=" flex items-center gap-2 lg:mb-2 mb-[2px] "
                      >
                        {" "}
                        <span>
                          <IoCheckmarkDoneOutline className="text-[#1D75F2] text-lg" />{" "}
                        </span>{" "}
                        <span className=" text-[14px]">{data} </span>{" "}
                      </p>
                    ))}
                  </div>

                  <div className="  flex justify-center items-center  ">
                    <Link href="/intake-info-first" className=" ">
                      {" "}
                      <button className=" w-full bg-[#c738bd] px-3 py-2  rounded-lg text-white">
                        {" "}
                        Get Started{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="yearly">
          <div className=" flex lg:flex-row flex-col lg:gap-5 md:gap-2 text-black  ">
            {yearlyValues?.map((value: any, index: number) => (
              <div
                key={index}
                className="bg-[#E8F6FE]  rounded-b-lg   lg:w-1/4 relative h-[70vh] mb-5 lg:mb-1 "
              >
                <p
                  className={`w-full h-[2px] rounded-xl ${
                    value?.title === "Tier 1" && "bg-[#FF31F7]"
                  } ${value?.title === "Tier 2" && "bg-[#F59E0B]"} 
                   ${value?.title === "Tier 3" && "bg-[#10B981]"} 
                    ${value?.title === "Tier 4" && "bg-[#AA0BF5]"} `}
                  // style={{ backgroundColor: value?.titleColor }}
                >
                  {" "}
                </p>

                <div className="p-4 flex flex-col h-full">
                  <div className="  ">
                    <p
                      className={`text-lg font-semibold ${
                        value?.title === "Tier 1" && "text-[#FF31F7]"
                      } ${value?.title === "Tier 2" && "text-[#F59E0B]"} 
                       ${value?.title === "Tier 3" && "text-[#10B981]"} 
                        ${value?.title === "Tier 4" && "text-[#AA0BF5]"} `}
                      // style={{ color: value?.titleColor }}
                    >
                      {value?.title}{" "}
                    </p>
                    <p className=" text-[28px] font-semibold mt-2 ">
                      {" "}
                      {value?.title2}
                    </p>
                    <p className=" text-[28px] font-semibold mb-2 ">
                      {" "}
                      {value?.title3}
                    </p>
                    <p className=" text-[13px] text-[#252B42] pb-1 font-[500]">
                    Monthly breakdown
                    </p>
                    <p className=" text-[13px] text-[#252B42] pb-2">
                  Billed Annually
                    </p>  
                    <p className="text-[14px] font-[500] pb-1">Services Covered:</p>
                  </div>

                  <div className="h-full flex-1 overflow-y-auto ">
                    {value?.sevice?.map((data: any, index: number) => (
                      <p
                        key={index}
                        className=" flex items-center gap-2 lg:mb-2 mb-[2px] "
                      >
                        {" "}
                        <span>
                          <IoCheckmarkDoneOutline className="text-[#1D75F2] text-lg" />{" "}
                        </span>{" "}
                        <span className=" text-[14px]">{data} </span>{" "}
                      </p>
                    ))}
                  </div>

                  <div className="  flex justify-center items-center  ">
                    <Link href="/intake-info-first" className=" ">
                      {" "}
                      <button className=" w-full bg-[#c738bd]  rounded-lg text-white px-3 py-2" >
                        {" "}
                        Get Started{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PricingTabs;
