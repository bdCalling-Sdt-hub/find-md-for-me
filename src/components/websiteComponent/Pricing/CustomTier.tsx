import React from "react";
import CustomModal from "./CutomTierModal";
import dynamic from "next/dynamic";

const CustomTier = () => {
  const DynamicCustomModel = dynamic(() => import("./CutomTierModal"), {
    ssr: false,
  });
  return (
    <div className=" text-center  my-10">
      <p className=" mx-auto text-[#737373] text-[20px] pb-2">
        {" "}
        Don't see the services you want to provide listed?{" "}
      </p>
      <p className=" mx-auto text-[#737373] text-[20px] pb-2"> No worries.</p>
      <p className=" mx-auto text-[#737373] text-[20px] pb-3">
        {" "}
        Let's discuss building your custom tier here{" "}
      </p>
      <div>
        <DynamicCustomModel />
      </div>
    </div>
  );
};

export default CustomTier;
