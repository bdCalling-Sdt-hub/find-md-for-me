import React from "react";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <h2>Header</h2>
      <div>{children}</div>
      <h2>Footer</h2>
    </div>
  );
};

export default WebsiteLayout;
