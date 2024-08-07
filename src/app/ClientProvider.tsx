"use client";
import { store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const ClientProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
