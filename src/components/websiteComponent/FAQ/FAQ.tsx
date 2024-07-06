import Title from "@/components/shared/Title";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QA = [
  {
    question: "Does Find a MD 4 Me provide MDs for Estheticians and LVNs?",
    answer:
      "Yes, we do. Provided that the client only practices within scope and the medical director believes the business is suitable for our company.",
  },
  {
    question: "I’m located in Texas and need a MD, do you have a MD in Texas?",
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

const FAQ = () => {
  return (
    <div className="mb-10">
      <Title>FREQUENTLY ASKED QUESTIONS</Title>
      <div className=" mb-10">
        <p className=" text-[#737373] text-[20px] lg:w-[700px] text-center mx-auto">
          Please reach us{" "}
          <Link
            href="/about"
            className=" underline font-semibold text-[#1DA1F2]"
          >
            {" "}
            here
          </Link>{" "}
          if you cannot find an answer
        </p>
      </div>

      <div className=" lg:w-[900px] mx-auto ">
        <div>
          {QA?.map((data, index) => (
            <Accordion key={index} type="single" collapsible className="mb-10">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{data?.question}</AccordionTrigger>
                <AccordionContent>{data?.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
