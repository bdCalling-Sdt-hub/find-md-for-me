import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
