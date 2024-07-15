import React from "react";
import Title from "../shared/Title";
import SubTitle from "../shared/SubTitle";

const DocumentsSubmit = () => {
  return (
    <div className="lg:mb-32">
      <div className=" lg:w-[700px]  mx-auto mt-40 tracking-wide ">
        <Title> Thank you for submitting your intake form.</Title>

        <SubTitle className="tracking-wide ">
          {" "}
          Please allow 5-7 Business days for our team to review and verify the
          documents submitted. If, any additional questions or information is
          needed during this time we will email you. Once we have verified your
          documents you will receive a welcome email where you can log into your
          client portal and schedule your Introduction meeting.{" "}
        </SubTitle>
      </div>
    </div>
  );
};

export default DocumentsSubmit;
