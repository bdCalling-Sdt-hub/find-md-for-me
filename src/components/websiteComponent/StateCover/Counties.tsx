import React from "react";
import mapImg from "@/assests/map.png";
import Image from "next/image";
import Title from "@/components/shared/Title";

const Counties = () => {
  const counties = [
    "Alabama",
    " Arizona",
    "Colorado ",
    "Connecticut",
    "District of Colombia ",
    "Deleware ",
    "Florida",
    "Idaho ",
    "Illinois ",
    "Iowa",
    "Indiana",
    "Kentucky ",
    "Louisiana ",
    "Maine",
    " Mississippi",
    " Montana",
    " Maryland ",
    "Michigan ",
    "Minnesota ",
    "Nebraska ",
    " Nevada",
    " New Jersey",
    " North Dakota",
    "New Hampshire ",
    "South Carolina",
    "Ohio ",
    "Oklahoma",
    "Tennessee ",
    "Texas ",
    "Utah ",
    "Virginia ",
    "Vermont ",
    " Washington",
    " West Virginia",
    " Wyoming",
    "Wisconsin ",
  ];
  return (
    <div className="container">
      <div className=" text-center">
        <Title> States we cover </Title>

        <div className=" flex justify-center items-center mb-10">
          <p className=" text-[#737373] text-[20px] w-[700px]">
            {" "}
            Below you will find the states where we are able to provide MD
            oversight. New states will be provided continue to come and check
            here.
          </p>
        </div>
      </div>

      <div className="  ">
        <div className="flex  flex-wrap  gap-9 mb-10 ">
          {counties?.map((data, index) => (
            <div key={index} className="mx-auto">
              <p className=" text-[#737373] text-[20px] text-center ">
                {" "}
                {data}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-center items-center my-16">
        <Image
          src={mapImg}
          width={800}
          height={300}
          alt=" "
          style={{ width: "70%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Counties;
