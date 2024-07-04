import "@/app/globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="loginBgImg">
      <div className=" flex justify-center items-center"> {children}</div>
    </div>
  );
};

export default layout;
