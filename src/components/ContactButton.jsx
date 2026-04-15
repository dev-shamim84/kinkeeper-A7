"use client";

import { FriendContext } from "@/context/ContextProvider";
import { useContext } from "react";
const ContactButton = ({ icon, children, friend }) => {
  const { handleFriedData } = useContext(FriendContext);
  const newInfo = {
    name: friend.name,
    date: friend.next_due_date,
    text: children,
  };
  return (
    <button
      onClick={() => handleFriedData(newInfo)}
      className="px-10 py-4 bg-[#F8FAFC] shadow flex flex-col items-center cursor-pointer"
    >
      {icon} {children}
    </button>
  );
};

export default ContactButton;
