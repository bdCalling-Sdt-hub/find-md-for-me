"use client";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { usePostAppointmentMutation } from "@/redux/apiSlices/ClientDashboardSlices";
import moment from "moment";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const MeetingSchedule = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [clickBtn, setClickBtn] = useState(null);
  const [postAppointment] = usePostAppointmentMutation();
  const params = useParams();
  const router = useRouter();

  const TimeValues = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
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

  const handleClick = (time: any) => {
    setClickBtn(time);
  };
  const newDate = moment(date).format("L");

  const handleSubmit = async () => {
    const data = {
      id: params?.userId,
      time: clickBtn,
      date: newDate,
    };

    await postAppointment(data).then((res) => {
      if (res?.data?.status === 200) {
        router.push(`/documents/${params?.userId}?step=4`);
      } else {
        Swal.fire({
          title: "Failed to Submit",
          // @ts-ignore
          text: res?.error?.data?.message || "An error occurred",
          icon: "error",
        });
      }
    });
  };

  return (
    <div>
      <div className="p-5">
        <Title>Schedule Your Appointment </Title>
        <p className="text-[#737373] lg:text-[19px] text-[16px]  text-center mx-auto mb-5 ">
          {" "}
          Thank you for visiting{" "}
          <span className="text-[#1DA1F2]"> Find a MD 4 Me </span> . We look
          forward to connecting with you for your business!
        </p>

        <SubTitle className=" ">
          {" "}
          Please select the best date + time to schedule your introduction
          meeting!
        </SubTitle>
        <p className=" text-[#1D75F2]  text-[16px] text-center ">
          {" "}
          Please Provide Your Business Information.{" "}
        </p>
      </div>

      <div onClick={handleSubmit}>
        <div className=" lg:flex gap-4 mt-16 items-center px-8">
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

export default MeetingSchedule;
