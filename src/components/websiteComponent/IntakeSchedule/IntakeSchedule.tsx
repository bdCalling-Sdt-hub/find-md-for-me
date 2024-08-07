"use client";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { usePostAppointmentScheduleMutation } from "@/redux/apiSlices/WebPagesSlices";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const IntakeSchedule = () => {
  const [postAppointmentSchedule, { isError, isSuccess, error }] =
    usePostAppointmentScheduleMutation();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [clickBtn, setClickBtn] = useState(null);
  const params = useParams();
  const path = "/intake-submitting";
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedDate = formatter.format(date);
  const TimeValues = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];
  const router = useRouter();

  const handleClick = (time: any) => {
    setClickBtn(time);
  };

  const handleSubmit = async () => {
    const data = {
      parsonal_id: params?.personId,
      date: formattedDate,
      time: clickBtn,
    };
    console.log(data);
    await postAppointmentSchedule(data).then((res) => {
      if (res?.data?.status === 200) {
        router.push("/intake-submitting");
      }
    });
  };

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

      <div onClick={handleSubmit}>
        <div className=" lg:flex gap-10 mt-16 items-center">
          <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full"
            />
          </div>

          <div className="w-full mt-10 lg:mt-1">
            <div className="  w-[80%] mx-auto  ">
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
          </div>
        </div>
        <div className="text-center my-10">
          {/* <Link href="/intake-submitting">  */}
          <Button variant="getStarted"> Submit </Button>
          {/* </Link>  */}
        </div>
      </div>
    </div>
  );
};

export default IntakeSchedule;
