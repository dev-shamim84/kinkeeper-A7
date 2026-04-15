"use client";

import { createContext, useState } from "react";

export const FriendContext = createContext();
const ContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const handleFriedData = (obj) => {
    setFriends([...friends, obj]);
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
