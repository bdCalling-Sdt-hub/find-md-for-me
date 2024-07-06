"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

type inputs = {
  email: string;
  password: any;
  MyCheckbox: any;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<inputs>({
    defaultValues: {
      MyCheckbox: false,
    },
  });
  const onSubmit: SubmitHandler<inputs> = (data) => console.log(data);

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div>
      <>
        <form
          name="normal_login"
          className="login-form lg:w-[550px] w-[100%] lg:px-[60px] px-[30px] lg:py-[47px] py-[30px]  "
          style={{
            background: "white",
            borderRadius: "12px",
            // padding: "60px 47px",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1
            className=" font-semibold"
            style={{ fontSize: "28px", textAlign: "center" }}
          >
            Login to Account
          </h1>
          <p className="text-center text-sm py-3">
            Please enter your email and password to continue
          </p>
          <div style={{ marginBottom: "24px" }}>
            <Label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              {" "}
              Email{" "}
            </Label>

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
              }}
              {...register("email", { required: true })}
            />
            {errors.email && <p style={{ color: "red" }}>Email is required.</p>}
          </div>

          <div style={{ marginBottom: "24px" }}>
            <Label
              style={{ display: "block", marginBottom: "5px" }}
              htmlFor="password"
            >
              Password
            </Label>

            <input
              type="password"
              placeholder="Enter your password"
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className=" flex items-center gap-1">
              <Controller
                control={control}
                name="MyCheckbox"
                render={({ field }) => <Checkbox {...field} />}
              />

              <Label>Remember Me</Label>
            </div>

            <a
              className="login-form-forgot"
              style={{ color: "#6A6D7C" }}
              href="/forgetPassword"
            >
              Forgot password
            </a>
          </div>

          <div className="text-center mt-10" style={{ marginBottom: 0 }}>
            <Button
              type="submit"
              variant="getStarted"
              onClick={() => handleLogin()}
            >
              Sign In
            </Button>
          </div>
        </form>
      </>
    </div>
  );
};

export default Login;
