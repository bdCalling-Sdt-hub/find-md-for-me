"use client";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { usePostAppointmentMutation } from "@/redux/apiSlices/ClientDashboardSlices";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MeetingSchedule = ({ current, setCurrent }: any) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [documentId, setDocumentId] = useState<string | null>(null);
  const [clickBtn, setClickBtn] = useState<string | null>(null);
  const [postAppointment] = usePostAppointmentMutation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const uploadId = localStorage.getItem("upload_id");
      setDocumentId(uploadId);
    }
  }, []);

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

  const handleClick = (time: string) => {
    setClickBtn(time);
  };

  const newDate = moment(date).format("L");

  const handleSubmit = async () => {
    const data = {
      id: documentId,
      time: clickBtn,
      date: newDate,
    };

    await postAppointment(data).then((res) => {
      if (res?.data?.status === 200) {
        const nextStep = current + 1;
        setCurrent(nextStep);
      } else {
        Swal.fire({
          title: "Failed to Submit", 
          //@ts-ignore
          text: res?.error?.data?.message || "An error occurred",
          icon: "error",
        });
      }
    });
  };

  return (
    <div>
      <div className="p-5">
        <Title>Schedule Your Appointment</Title>
        <SubTitle className="">
          Please select the best date + time to schedule your appointment for meeting with our staff.
        </SubTitle>
      </div>

      <div>
        <div className="lg:flex gap-4 mt-16 items-center px-8">
          <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full"
            />
          </div>

          <div className="w-full mt-10 lg:mt-1">
            <div className="lg:w-[80%] mx-auto">
              <p className="text-center text-lg text-[#737373] pb-3 w-2/3 mx-auto tracking-wide">
                All appointments are scheduled in Central Standard Time zone (CST).
              </p>
              <p className="font-semibold text-lg text-center mb-2">Select Hours</p>
              <div className="flex-wrap gap-4 bg-[#FAFAFA] rounded-xl shadow-md p-10 pe-0">
                {TimeValues.map((data, index) => (
                  <Button
                    key={index}
                    variant={clickBtn === data ? "btn3" : "default2"}
                    className="me-4 mb-3"
                    onClick={() => handleClick(data)}
                  >
                    {data}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-10">
          <Button variant="getStarted" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingSchedule;
