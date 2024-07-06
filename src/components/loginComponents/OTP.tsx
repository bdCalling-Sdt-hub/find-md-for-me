"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Form } from "react-hook-form";
import Swal from "sweetalert2";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "../ui/button";

const OTP = () => {
  const router = useRouter();

  const handleVerifyOtp = () => {
    Swal.fire({
      title: "Password Reset",
      text: "Your password has been successfully reset. click confirm to set a new password",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/resetPassword");
      }
    });
  };
  //   const handleResendEmail = () => {
  //     const email = JSON.parse(localStorage.getItem("email"));
  //   };
  return (
    <div>
      <div
        className=" lg:w-[550px] w-[400px] lg:px-[90px] px-[20px] lg:py-[57px] py-[30px] "
        style={{
          background: "white",
          borderRadius: "12px",
        }}
      >
        <h1
          className="text-center lg:text-[32px] text-[25px]"
          style={{
            fontSize: "32px",
            color: "#6A6D7C",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Check your email
        </h1>
        <p
          style={{ width: "380px", color: "#B8B8B8", margin: "0 auto 0 auto" }}
        >
          We sent a reset link to{" "}
          <span style={{ color: "#6A6D7C" }}> contact@dscode...com </span>
          enter 6 digit code that mentioned in the email
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <InputOTP maxLength={12}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="text-center  mt-8 mb-2">
          <Button
            onClick={handleVerifyOtp}
            variant="getStarted"
            type="submit"
            className=" text-center"
          >
            Verify
          </Button>
        </div>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Didn’t receive code?
          <p
            // onClick={handleResendEmail}
            style={{
              color: "#A05C56",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Resend{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default OTP;
