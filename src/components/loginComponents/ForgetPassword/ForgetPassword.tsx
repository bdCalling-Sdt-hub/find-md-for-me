"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  email: string;
};

const ForgetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    localStorage.setItem("email", JSON.stringify(data.email));
    console.log("Received values of form: ", data.email);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Send OTP ",
      color: "#1DA1F2",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      router.push("/otp", { scroll: false });
    });
  };
  return (
    <div>
      <form
        style={{
          width: "550px",
          background: "white",
          borderRadius: "12px",
          padding: "90px 57px",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "54px",
            color: "#494949",
            textAlign: "center",
          }}
        >
          Forgot Password
        </h1>

        <div style={{ marginBottom: "24px", width: "100%" }}>
          <Label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px", fontSize: "18px" }}
          >
            {" "}
            Email Address
          </Label>
          <div style={{ marginBottom: 0 }} id="email">
            <input
              placeholder="Enter your email address"
              type="email"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
                marginTop: "20px",
              }}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
        </div>

        <div>
          <div className="text-center" style={{ marginBottom: 0 }}>
            <Button type="submit" variant="getStarted">
              Send a Code
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
