"use client";
import { Button, message, Steps } from "antd";
import React, { useEffect, useState } from "react";
import DocumentsComponent from "./DocumentsComponent";
import AgreeMents from "./AgreeMents";
import DocumentsSubmit from "./DocumentsSubmit";
import MeetingSchedule from "./MeetingSchedule";
import AcceptClient from "./AcceptClient";

const steps: any = [
  {
    title: "Uploaded Documents",
    content: <DocumentsComponent />,
  },
  {
    title: "Signed/Uploaded Agreements",
    content: <AgreeMents />,
  },
  {
    title: "Waiting for Approval",
    content: <DocumentsSubmit />,
  },
  {
    title: "Scheduled Start Up Call",
    content: <MeetingSchedule />,
  },
  {
    title: "Ready to Accept Clients",
    content: (
      <div className="">
        <AcceptClient />{" "}
      </div>
    ),
  },
];
const Documents = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialStep = parseInt(params.get("step") || "0", 10);
    setCurrent(initialStep);
  }, []);

  const handleStepChange = (step: number) => {
    setCurrent(step);

    const params = new URLSearchParams(window.location.search);
    params.set("step", step.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const next = () => {
    const newCurrent = current + 1;
    handleStepChange(newCurrent);
  };

  const prev = () => {
    const newCurrent = current - 1;
    handleStepChange(newCurrent);
  };

  const items = steps.map((item: any) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle: React.CSSProperties = {
    width: "100%",
    marginTop: 16,
  };

  const onChange = (value: any) => {
    handleStepChange(value);
  };

  return (
    <div>
      <div className="mx-auto w-3/4 my-10">
        <Steps
          current={current}
          items={items}
          onChange={onChange}
          className=" "
          //   size="small"
          labelPlacement="vertical"
        />
      </div>

      <div style={contentStyle}>{steps[current].content}</div>
      <div
        className="flex gap-5 justify-center items-center "
        style={{ marginTop: 24, marginBottom: 24 }}
      >
        {current > 0 && (
          <div className="">
            <button
              className="w-[120px] h-[45px] border border-[#C738BD] text-[#C738BD] rounded"
              onClick={() => prev()}
            >
              Previous
            </button>
          </div>
        )}

        {current < steps.length - 1 && (
          <div className=" ">
            <button
              className="w-[120px] h-[45px]  bg-[#C738BD] text-white rounded"
              onClick={() => next()}
            >
              Next
            </button>
          </div>
        )}
        {current === steps.length - 1 && (
          <div className="">
            <button
              className="w-[120px] h-[45px] bg-[#C738BD] text-white rounded"
              onClick={() => {
                message.success("Processing complete!");
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Documents;
