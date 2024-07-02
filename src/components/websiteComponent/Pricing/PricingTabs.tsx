import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const PricingTabs = () => {
  const monthlyValues = [
    {
      title: "Tier 1",
      title2: "$279-I",
      title3: "$800-B",
      type: "Billed Monthly",
      sevice: [
        "Prescriptive Skin Care",
        "Numbing Cream",
        "Hydroquinone ",
        "Peptides + Hair ",
        "Rejuvenation ",
        " Medical Grade Skin Peels ",
        " Body Sculpting like EmSculpt ",
        " Cryosculpting & Cool Sculpting ",
        " Sculpture, Laser Lipo, Mesotherapy, Exosomes",
        "Microneeding & PRP Microneeding ",
        "HydrafacialMD ",
        " Dermaplane",
      ],
    },
    {
      title: "Tier 2",
      title2: "$479-I",
      title3: "$1,900-B",
      type: "Billed Monthly",
      sevice: [
        "In addition to Tier 1",
        "Requirers GFE",
        "Botox (Neurotoxin) Injectables ",
        "Derma Filler Injectables ",
        "PDO Threads ",
        " Laser + Light Based Therapies(Hair Removal, IPL, etc) ",
      ],
    },
    {
      title: "Tier 3",
      title2: "$579-I",
      title3: "$2,300-B",
      type: "Billed Monthly",
      sevice: [
        "In addition to Tier 1 + 2",
        "Requirers GFE",
        "Injectable Nutrients ",
        "B12/Skinny Shots ",
        "IV Nutrient Therapies ",
      ],
    },
    {
      title: "Tier 4",
      title2: "$779-I",
      title3: "$3,100-B",
      type: "Billed Monthly",
      sevice: [
        "In addition to Tier 1 + 2 + 3",
        "Requirers GFE",
        "Prescriptive Weight Loss ",
        "(Semaglutide) Injectable Wellness Peptides ",
        "Medications Like Phentermine ",
        " AOD-9604, Naltrexone, ECA Stacks ",
        " Hormone Optimization Therapy(Testosterone, Estrogen, Thyroid Hormone) ",
        " Blood Spot Finger Pack Lab Testing Powered by ZRT Labs ",
        " Full Spectrum of Injectable Wellness peptides such as Sermorelin",
        "Ipamorelin, BPC-157 “Wolverine” + AOD-9604 ",
      ],
    },
  ];

  const yearlyValues = [
    {
      title: "Tier 1",
      title2: "$252-I",
      title3: "$720-B",
      type: "Billed Monthly",
      sevice: [
        "Prescriptive Skin Care",
        "Numbing Cream",
        "Hydroquinone ",
        "Peptides + Hair ",
        "Rejuvenation ",
        " Medical Grade Skin Peels ",
        " Body Sculpting like EmSculpt ",
        " Cryosculpting & Cool Sculpting ",
        " Sculpture, Laser Lipo, Mesotherapy, Exosomes",
        "Microneeding & PRP Microneeding ",
        "HydrafacialMD ",
        " Dermaplane",
      ],
    },
    {
      title: "Tier 2",
      title2: "$432-I",
      title3: "$1,710-B",
      type: "Billed Monthly",
      sevice: [
        "In addition to Tier 1",
        "Requirers GFE",
        "Botox (Neurotoxin) Injectables ",
        "Derma Filler Injectables ",
        "PDO Threads ",
        " Laser + Light Based Therapies(Hair Removal, IPL, etc) ",
      ],
    },
    {
      title: "Tier 3",
      title2: "$522-I",
      title3: "$2,070-B",
      type: "Billed Monthly",
      sevice: [
        "In addition to Tier 1 + 2",
        "Requirers GFE",
        "Injectable Nutrients ",
        "B12/Skinny Shots ",
        "IV Nutrient Therapies ",
      ],
    },
    {
      title: "Tier 4",
      title2: "$702-I",
      title3: "$2,790-B",
      type: "Billed Monthly",
      sevice: [
        "In addition to Tier 1 + 2 + 3",
        "Requirers GFE",
        "Prescriptive Weight Loss ",
        "(Semaglutide) Injectable Wellness Peptides ",
        "Medications Like Phentermine ",
        " AOD-9604, Naltrexone, ECA Stacks ",
        " Hormone Optimization Therapy(Testosterone, Estrogen, Thyroid Hormone) ",
        " Blood Spot Finger Pack Lab Testing Powered by ZRT Labs ",
        " Full Spectrum of Injectable Wellness peptides such as Sermorelin",
        "Ipamorelin, BPC-157 “Wolverine” + AOD-9604 ",
      ],
    },
  ];
  return (
    <div>
      <Tabs defaultValue="account" className="w-full  mt-9 ">
        <div className="flex items-center justify-center ">
          <TabsList className="   w-[200px]">
            <TabsTrigger value="account">Monthly</TabsTrigger>
            <TabsTrigger value="password">Yearly</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="account" className="">
          <div className=" flex justify-between gap-5 text-black  ">
            {monthlyValues?.map((value, index) => (
              <div
                key={index}
                className="bg-[#E8F6FE] rounded-lg p-4 w-1/4 relative h-[85vh] "
              >
                <p className=" text-lg font-semibold ">{value?.title} </p>
                <p className=" text-[32px] font-semibold mt-2 ">
                  {" "}
                  {value?.title2}
                </p>
                <p className=" text-[32px] font-semibold mb-2 ">
                  {" "}
                  {value?.title3}
                </p>
                <p className=" text-[12px] text-[#252B42] pb-3">
                  {value?.type}
                </p>
                {value?.sevice?.map((data, index) => (
                  <p key={index} className=" flex items-center gap-2 mb-2 ">
                    {" "}
                    <span>
                      <IoCheckmarkDoneOutline
                        size={20}
                        className="text-[#1D75F2]"
                      />{" "}
                    </span>{" "}
                    <span>{data} </span>{" "}
                  </p>
                ))}

                <div className="  mb-3 absolute bottom-0 ">
                  <div className=" mx-5">
                    <Button variant="getStarted"> Get Started </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className=" flex justify-between gap-5 text-black ">
            {yearlyValues?.map((value, index) => (
              <div
                key={index}
                className="bg-[#E8F6FE] rounded-lg p-4 w-1/4 relative h-[85vh] "
              >
                <p className=" text-lg font-semibold ">{value?.title} </p>
                <p className=" text-[32px] font-semibold mt-2 ">
                  {" "}
                  {value?.title2}
                </p>
                <p className=" text-[32px] font-semibold mb-2 ">
                  {" "}
                  {value?.title3}
                </p>
                <p className=" text-[12px] text-[#252B42] pb-2">
                  Monthly breakdown
                </p>
                <p className=" text-[12px] text-[#252B42] pb-3">
                  {value?.type}
                </p>
                {value?.sevice?.map((data, index) => (
                  <p key={index} className=" flex items-center gap-2 mb-2 ">
                    {" "}
                    <span>
                      <IoCheckmarkDoneOutline
                        size={20}
                        className="text-[#1D75F2]"
                      />{" "}
                    </span>{" "}
                    <span>{data} </span>{" "}
                  </p>
                ))}

                <div className="  mb-3 absolute bottom-0 ">
                  <div className=" mx-5">
                    <Button variant="getStarted"> Get Started </Button>
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
