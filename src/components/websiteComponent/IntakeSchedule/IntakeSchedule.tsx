"use client";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from "react";

const IntakeSchedule = () => {
  const router = useRouter(); 
  const handleSubmit = async () => {
        router.push("/intake-submitting");
  }; 

  useEffect(() => {
    // Load the Acuity embed script
    const script = document.createElement('script');
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); 


  return (
    <div className="container">
      <div>
        <Title>Schedule Your Appointment </Title>
        <p className="text-[#737373] text-[19px]  text-center mx-auto mb-5 ">
          {" "}
          Thank you for visiting{" "}
          <span className="text-[#1D75F2]"> Find a MD 4 Me </span> . We look
          forward to connecting with you for your business!
        </p>

        <SubTitle className=" ">
          {" "}
          Please select the best date + time to schedule your introduction
          meeting!
        </SubTitle>
        <p className=" text-[#C738BD]  text-[16px] text-center ">
          {" "}
          Please Provide Your Business Information.{" "}
        </p>
      </div>

      <div>
        <div className=" lg:flex gap-10 mt-16 items-center"> 
        <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=32379568&calendarID=10185676&ref=embedded_csp"
        title="Schedule Appointment"
        width="100%"
        height="700"
        frameBorder="0"
      ></iframe>
          {/* <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full"
            />
          </div> */}

          {/* <div className="w-full mt-10 lg:mt-1">
            <div className="  lg:w-[80%] mx-auto  ">
              <p className=" text-center text-lg text-[#737373] pb-3 w-2/3 mx-auto tracking-wide ">
                All appointments are scheduled in Central Standard Time zone
                (CST).
              </p>
              <p className=" font-semibold  text-lg text-center mb-2">
                {" "}
                Select Hours
              </p>
              <div className=" flex-wrap  gap-4  bg-[#FAFAFA] rounded-xl shadow-md p-10 pe-0 ">
                {TimeValues?.map((data, index) => (
                  <Button
                    key={index}
                    variant={clickBtn === data ? "btn3" : "default2"}
                    className=" me-4 mb-3"
                    onClick={() => handleClick(data)}
                  >
                    {" "}
                    {data}
                  </Button>
                ))}
              </div>
            </div>
          </div> */}
        </div>
        <div className="text-center mb-10"  onClick={handleSubmit}>
  
          <Button variant="getStarted"> Submit </Button>

        </div>
      </div>
    </div>
  );
};

export default IntakeSchedule;
