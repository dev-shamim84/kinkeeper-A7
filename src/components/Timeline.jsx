"use client";
import { FriendContext } from "@/context/ContextProvider";
import { useContext, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CiVideoOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
const Timeline = () => {
  const { friends } = useContext(FriendContext);
  const [filteredFriends, setFilteredFriends] = useState(friends);

  const handleFilter = (text) => {
    if (text === "Phone") {
      const phoneFilter = friends.filter((friend) => friend.text === "Phone");
      setFilteredFriends(phoneFilter);
    } else if (text === "Text") {
      const textFilter = friends.filter((friend) => friend.text === "Text");
      setFilteredFriends(textFilter);
    } else if (text === "Video") {
      const videoFilter = friends.filter((friend) => friend.text === "Video");
      setFilteredFriends(videoFilter);
    }
  };
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-2xl mt-10">Timeline</h2>

        <div className="my-5">
          <button
            className="btn"
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
          >
            Filter Timeline
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={{ positionAnchor: "--anchor-1" }}
          >
            <li onClick={() => handleFilter("Phone")}>
              <a>Call</a>
            </li>
            <li onClick={() => handleFilter("Text")}>
              <a>Text</a>
            </li>
            <li onClick={() => handleFilter("Video")}>
              <a>Video</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center my-10">
          {filteredFriends.length === 0 && (
            <p className="font-bold text-4xl">No Data Found !</p>
          )}
        </div>
        <div className="mt-5">
          {filteredFriends.map((friend) => (
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
