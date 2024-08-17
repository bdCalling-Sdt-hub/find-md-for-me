"use client";
import Title from "@/components/shared/Title";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetFAQQuery } from "@/redux/apiSlices/WebPagesSlices";

const FAQ = () => {
  const { data } = useGetFAQQuery(undefined);

  return (
    <div className="mb-10   ">
      <Title>FREQUENTLY ASKED QUESTIONS</Title>
      <div className=" mb-10">
        <p className=" text-[#737373] text-[20px] lg:w-[700px] text-center mx-auto">
          Please reach us{" "}
          <Link
            href="/contact"
            className=" underline font-semibold text-[#1D75F2]"
          >
            {" "}
            here
          </Link>{" "}
          if you cannot find an answer
        </p>
      </div>

      <div className=" lg:w-[900px] mx-auto  ">
        <div>
          {data?.data?.map((value: any, index: number) => (
            <Accordion key={index} type="single" collapsible className="mb-10">
              <AccordionItem
                value={`item-${index}`}
                className="data-[state=open]:border-2 data-[state=open]:border-[#1D75F2]"
              >
                <AccordionTrigger>{value?.question}</AccordionTrigger>
                <AccordionContent>{value?.answare}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
