import React from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';

const TierDetails = ({value}:any) => { 
    console.log(value);
    return (
        <div>
            <div
                className="bg-[#E8F6FE]  rounded-b-lg   "
              >
                <p
                  className={`w-full h-[2px] rounded-xl  ${
                    value?.tyer_name === "Tier 1" && "bg-[#FF31F7]"
                  } ${value?.tyer_name === "Tier 2" && "bg-[#F59E0B]"} 
                   ${value?.tyer_name === "Tier 3" && "bg-[#10B981]"} 
                    ${value?.tyer_name === "Tier 4" && "bg-[#AA0BF5]"}  `}
                  // style={{ backgroundColor: value?.tyer_nameColor }}
                >
                  {" "}
                </p>

                <div className="p-2 flex flex-col h-full">
                  <div className="  ">
                    <p
                      className={`text-[12px] font-semibold  ${
                        value?.tyer_name === "Tier 1" && "text-[#FF31F7]"
                      } ${value?.tyer_name === "Tier 2" && "text-[#F59E0B]"} 
                       ${value?.tyer_name === "Tier 3" && "text-[#10B981]"} 
                        ${value?.tyer_name === "Tier 4" && "text-[#AA0BF5]"}  `}
                      // style={{ color: value?.tyer_nameColor }}
                    >
                      {value?.tyer_name}{" "}
                    </p> 
                    <p className=" text-[14px] font-semibold mt-1 ">
                      {" "}
                     ${value?.price[0]?.price_1}-I
                    </p>
                    <p className=" text-[14px] font-semibold mb-1 ">
                      {" "}
                     ${value?.price[0]?.price_2}-B
                    </p>
                    <p className=" text-[12px] text-[#252B42] pb-1">
                    Billed  {value?.price[0]?.pricing_type}
                    </p> 
                    <p className="text-[12px] font-[500] pb-1">Services Covered:</p>
                  </div>

                  <div className="h-full flex-1 overflow-y-auto ">
                    {value?.price[0]?.service?.map((data: any, index: number) => (
                      <p
                        key={index}
                        className=" flex items-center gap-1  mb-[2px] "
                      >
                        {" "}
                        <span>
                          <IoCheckmarkDoneOutline className="text-[#1D75F2] text-sm" />{" "}
                        </span>{" "}
                        <span className=" text-[12px]">{data} </span>{" "}
                      </p>
                    ))}
                  </div>

                </div>
              </div>
        </div>
    );
};

export default TierDetails;