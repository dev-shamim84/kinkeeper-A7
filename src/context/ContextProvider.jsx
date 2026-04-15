"use client";

import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const FriendContext = createContext();
const ContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const handleFriedData = (obj) => {
    setFriends([...friends, obj]);
    toast.success(`${obj.name} to ${obj.text}`);
  };
  const friendInfo = {
    handleFriedData,
    friends,
    setFriends,
  };

  return (
    <FriendContext.Provider value={friendInfo}>
      {children}
    </FriendContext.Provider>
  );
};

export default ContextProvider;
