"use client";

import ContextProvider from "@/context/ContextProvider";

const Providers = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default Providers;
