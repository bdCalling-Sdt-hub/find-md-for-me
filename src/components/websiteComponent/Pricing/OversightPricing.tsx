import React from "react";

const OversightPricing = () => {
  return (
    <div>
      <h1 className=" text-[#C738BD]  text-[32px]  py-4">
        {" "}
        Oversight Pricing For Individuals and Businesses
      </h1>

      <p className="text-[20px]">
        {" "}
        I- <span className="font-semibold"> Individuals: </span> 1 person/1 Med
        Spa
      </p>
      <p className="text-[20px] pt-1 pb-3">
        {" "}
        B- <span className="font-semibold"> Business: </span> Owner (Business) &
        up to two staff members (within scope at the same location)
      </p>

      <p className=" text-[20px]">
        {" "}
        There is a one time onboarding fee of{" "}
        <span className=" text-[#C738BD]"> $2,000 </span> for individuals or{" "}
        <span className=" text-[#C738BD]"> $3,500 </span> for businesses.{" "}
      </p>
    </div>
  );
};

export default OversightPricing;
