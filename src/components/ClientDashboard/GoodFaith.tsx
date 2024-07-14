"use client";
import React from "react";
import DashboardTitle from "../shared/DashboardTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const GoodFaith = () => {
  const QA = [
    {
      question: "Does Find a MD 4 Me provide MDs for Estheticians and LVNs?",
      answer:
        "Yes, we do. Provided that the client only practices within scope and the medical director believes the business is suitable for our company.",
    },
    {
      question:
        "I’m located in Texas and need a MD, do you have a MD in Texas?",
      answer:
        "Yes, we do. Provided that the client only practices within scope and the medical director believes the business is suitable for our company.",
    },
    {
      question: "How much is the monthly fee and is there a onboarding fee?",
      answer:
        "Yes, we do. Provided that the client only practices within scope and the medical director believes the business is suitable for our company.",
    },
    {
      question:
        "If I want to start a tele health business for wellness can you find a MD for me?",
      answer:
        "Yes, we do. Provided that the client only practices within scope and the medical director believes the business is suitable for our company.",
    },
  ];
  return (
    <div className="pt-3 ps-3">
      <DashboardTitle> Good Faith Exam</DashboardTitle>

      <div className="lg:mx-10 mx-3 lg:my-10 my-5">
        <div className="  lg:mx-auto  lg:px-10 px-5 bg-[#FDFDFD] py-5">
          <div>
            {QA?.map((data, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="lg:mb-10 mb-5"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-[#F9F9F9] text-[#818181]"
                >
                  <AccordionTrigger>{data?.question}</AccordionTrigger>

                  <AccordionContent>{data?.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodFaith;
