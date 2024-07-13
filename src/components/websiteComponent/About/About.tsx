"use client";
import Image from "next/image";
import React from "react";
import person1 from "@/assests/person1.png";
import person2 from "@/assests/person2.png";

const About = () => {
  const personInfo = [
    {
      image: <Image src={person1} width={250} height={100} alt="" />,
      title: " CEO and Healthcare Administrator",
      name: " Lamesha Davis BSN, MHA",
    },
    {
      image: <Image src={person2} width={250} height={100} alt="" />,
      title: " Office Manager",
      name: " Venessa L.",
    },
  ];
  return (
    <div className=" container  my-12">
      <h1 className=" text-[#C738BD] text-2xl mb-3">
        {" "}
        <span className=" font-semibold "> Our Journey: </span> Empowering
        Aesthetic and Healthcare Providers for Success
      </h1>

      <div>
        <p className=" text-[16px] text-black pb-3  tracking-wide ">
          {" "}
          In the ever-evolving landscape of medical and aesthetic professionals
          opening their own start-ups leaving their corporate jobs, we
          recognized a critical need for support beyond our clinical and
          aesthetic expertise. Our journey began with a vision to redefine how
          entrepreneurs navigate the complexities of state compliance,
          administration and finding affordable medical directors, allowing for
          our clients to focus on what they do best while scaling their
          business.
        </p>

        <p className=" text-[16px] text-black pb-3  tracking-wide ">
          Founded by a team of seasoned professionals with diverse backgrounds
          in healthcare administration, finance, technology, and compliance, our
          Management Services Organization (MSO) emerged as a beacon of
          innovation and excellence in the industry
        </p>

        <p className=" text-[16px] text-black pb-3  tracking-wide ">
          From the outset, our mission has been clear: to empower medical and
          aesthetic professionals with the tools, resources, and expertise they
          need to thrive in a rapidly changing environment where their prior
          experience and education pave the way for them to be head of their own
          operations. Whether it's a small independent med spa or a
          multi-specialty clinic, we are dedicated to supporting our clients at
          every step of their journey.
        </p>

        <p className=" text-[16px] text-black pb-3  tracking-wide ">
          At the heart of our story lies a deep commitment to service excellence
          and client satisfaction. We understand the unique challenges faced by
          our clients today – from navigating state laws, and regulations to
          harnessing the power of technology for enhanced services. That's why
          we've assembled a team of experts who are not only leaders in their
          respective fields but also passionate about entrepreneurs and
          start-ups.
        </p>

        <p className=" text-[16px] text-black pb-3  tracking-wide ">
          Through our comprehensive suite of services, including physician
          oversight, practice management solutions, compliance assistance, and
          more, we strive to streamline operations, maximize efficiency, and
          drive sustainable growth for our clients.
        </p>

        <p className=" text-[16px] text-black pb-3  tracking-wide ">
          But our story doesn't end there. As technology continues to
          revolutionize, we remain at the forefront of innovation, constantly
          seeking new ways to leverage cutting-edge technologies and data
          analytics to deliver actionable insights and drive better outcomes for
          our clients.
        </p>

        <p className=" text-[16px] text-black pb-3  tracking-wide ">
          As we look to the future, our vision remains steadfast: to be the
          trusted partner of choice for medical and aesthetic professionals
          seeking to navigate the complexities of administration with confidence
          and ease. Together, we are shaping the future– one business at a time.
        </p>

        <p className=" text-[16px] text-black pb-3  tracking-wide ">
          {" "}
          Join us on this journey as we continue to empower entrepreneurs for
          success, today and for generations to come.
        </p>
      </div>

      <div className="">
        <h1 className=" text-[#C738BD] text-3xl font-bold tracking-wide text-center py-3">
          {" "}
          Meet the team
        </h1>
        <div className=" lg:flex flex-wrap items-center justify-center  mx-auto  gap-12 ">
          {personInfo?.map((data, index) => (
            <div key={index} className="">
              <p> {data.image}</p>
              <p className="font-semibold text-lg pt-2"> {data?.title}</p>
              <p> {data?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
