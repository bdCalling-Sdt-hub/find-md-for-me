"use client";
import Image from "next/image";
import React from "react";
import img1 from "@/assests/circle1.png";
import img2 from "@/assests/circle2.png";
import img3 from "@/assests/circle3.png";

const BannerCard = () => {
  const values = [
    {
      title: "Collaboration",
      detail:
        "Are you a Nurse, Nurse Practitioner, Physician Assistant, Esthetician or Entrepreneur looking to open your own business and need to connect with a Medical Director?",
      image: <Image src={img1} width={60} height={30} alt="" />,
    },
    {
      title: "Clearence",
      detail:
        "Are you a Nurse, Nurse Practitioner, Physician Assistant, Esthetician or Entrepreneur looking to open your own business and need to connect with a Medical Director?",
      image: <Image src={img2} width={60} height={30} alt="" />,
    },
    {
      title: "Good Faith Exams",
      detail:
        "Are you a Nurse, Nurse Practitioner, Physician Assistant, Esthetician or Entrepreneur looking to open your own business and need to connect with a Medical Director?",
      image: <Image src={img3} width={60} height={30} alt="" />,
    },
  ];
  return (
    <div>
      <div className=" flex justify-between items-center gap-8  ">
        {values?.map((value, index) => (
          <div
            key={index}
            className=" p-5 px-8 rounded-lg leading-loose shadow-xl w-[420px] bg-white "
          >
            <p className=" mb-3"> {value?.image}</p>
            <p className=" text-[#1D75F2] text-[16px] font-semibold mb-3">
              {" "}
              {value?.title}
            </p>
            <p className="border w-14 border-[#1D75F2] mb-3"></p>
            <p className=" text-[#737373] text-[16px]"> {value?.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCard;
