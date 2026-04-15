"use client";
import { FriendContext } from "@/context/ContextProvider";
import { useContext } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CiVideoOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
const Timeline = () => {
  const { friends, setFriends } = useContext(FriendContext);
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-2xl mt-10">Timeline</h2>
        <div className="mt-5">
          {friends.map((friend) => (
            <div key={friend.id}>
              <div className="flex items-center gap-5 bg-white shadow px-4 py-2 mb-5">
                <div>
                  <span>
                    {friend.text === "Phone" ? (
                      <FaPhoneAlt size={25} />
                    ) : friend.text === "Text" ? (
                      <AiOutlineMessage size={25} />
                    ) : friend.text === "Video" ? (
                      <CiVideoOn size={25} />
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div>
                  <h2 className="font-semibold">
                    <span className="me-2">{friend.text}</span>
                    <span className="text-gray-500">With {friend.name}</span>
                  </h2>
                  <p className="text-gray-500">{friend.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
