"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";

const ResetPassword = () => {
  const router = useRouter();

  type inputs = {
    email: string;
    password: any;
    confirmPassword: any;
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<inputs>({
    defaultValues: {},
  });
  const onSubmit: SubmitHandler<inputs> = (data) => {
    console.log(data);
    const { password, confirmPassword } = data;
    Swal.fire({
      title: "Successfully",
      text: "Your password has been updated, please change your password regularly to avoid this happening",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/");
      }
    });
  };

  return (
    <div>
      <form
        className=" lg:w-[630px] w-[400px] lg:px-[90px] px-[20px] lg:py-[57px] py-[30px] "
        style={{
          background: "white",
          borderRadius: "12px",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1
          className="lg:text-[32px] text-[25px]"
          style={{
            color: "black",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Set a new password
        </h1>
        <p
          style={{
            color: "#6A6D7C",
            fontSize: "18px",
            fontWeight: 400,
            margin: "0 auto 0 auto",
            width: "80%",
            textAlign: "center",
          }}
        >
          Create a new password. Ensure it differs from previous ones for
          security
        </p>

        <div className=" sm:mt-0" style={{ margin: "45px 0 20px 0" }}>
          <label
            style={{ display: "block", color: "#6A6D7C", marginBottom: "5px" }}
            htmlFor=""
          >
            New Password
          </label>
          <div style={{ marginBottom: 0 }}>
            <input
              type="password"
              placeholder="Enter New password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
              }}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>Password is required.</p>
            )}
          </div>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <label
            style={{ display: "block", color: "#6A6D7C", marginBottom: "5px" }}
            htmlFor="email"
          >
            Confirm Password
          </label>
          <div style={{ marginBottom: 0 }}>
            <input
              type="password"
              placeholder="Enter Confirm password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
              }}
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>Confirm Password is required.</p>
            )}
          </div>
        </div>

        <div className="text-center">
          <Button type="submit" variant="getStarted">
            UPDATE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
