"use client";
import { Button, Steps } from "antd";
import React, { useEffect, useState } from "react";
import DocumentsComponent from "./DocumentsComponent";
import AgreeMents from "./AgreeMents";
import DocumentsSubmit from "./DocumentsSubmit";
import MeetingSchedule from "./MeetingSchedule";
import AcceptClient from "./AcceptClient";

const steps = [
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
    content: <AcceptClient />,
  },
];

const Documents = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialStep = parseInt(params.get("step") || "0", 10);
    setCurrent(initialStep);
  }, []);

  const handleStepChange = (step: any) => {
    setCurrent(step);

    const params = new URLSearchParams(window.location.search);
    params.set("step", step.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    width: "100%",
    marginTop: 16,
  };

  return (
    <div>
      <div className="mx-auto w-3/4 my-10">
        <Steps
          current={current}
          items={items}
          onChange={handleStepChange}
          labelPlacement="vertical"
        />
      </div>

      <div style={contentStyle}>{steps[current].content}</div>
    </div>
  );
};

export default Documents;
