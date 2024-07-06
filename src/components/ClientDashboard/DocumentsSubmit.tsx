import React from "react";
import Title from "../shared/Title";
import SubTitle from "../shared/SubTitle";

const DocumentsSubmit = () => {
  return (
    <div>
      <div className=" lg:w-[700px]  mx-auto mt-40 tracking-wide ">
        <Title> Thank you for submitting your intake form.</Title>

        <SubTitle className="tracking-wide ">
          {" "}
          We are looking forward to talking to you soon.{" "}
        </SubTitle>
      </div>
    </div>
  );
};

export default DocumentsSubmit;
