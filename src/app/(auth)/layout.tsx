import "@/app/globals.css";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" grid lg:grid-cols-4 ">
      <div className=" lg:col-span-1 hidden lg:block">
        <div className="loginBgImg">
          <h1 className="text-white font-semibold  text-3xl text-center pt-14 ">
            <Link href="/">Find a MD 4 Me</Link>{" "}
          </h1>
        </div>
      </div>
      <div className="lg:col-span-3 ">
        <div className=" bg-[#E8F6FE]  lg:h-[100vh] h-screen flex justify-center items-center ">
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
