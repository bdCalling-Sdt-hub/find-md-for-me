import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import React from "react";

const IntakeSubmitting = () => {
  return (
    <div className=" container h-[40vh]">
      <div className=" w-[700px]  mx-auto mt-40">
        <Title> Thank you for submitting your intake form.</Title>

        <SubTitle className=" ">
          {" "}
          We look forward to the meeting you at your scheduled introduction
          meeting.{" "}
        </SubTitle>
      </div>
    </div>
  );
};

export default IntakeSubmitting;
