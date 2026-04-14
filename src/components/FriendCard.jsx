"use client";

import Image from "next/image";

const FriendCard = ({ friend }) => {
  const { name, picture, days_since_contact, tags, status } = friend;
  return (
    <div className="flex flex-col justify-center items-center py-5 px-2 shadow bg-white rounded space-y-3">
      <div>
        <Image
          src={picture}
          width={70}
          height={70}
          alt={name}
          className="w-[50px] h-[50px] rounded-full object-cover"
        ></Image>
      </div>
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="text-gray-500">{days_since_contact} days ago</p>
      <div className="flex gap-3 items-center">
        {tags.map((tag, index) => (
          <span
            className="uppercase bg-green-300/75 rounded-full px-4 py-1"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        className={`capitalize rounded-full px-4 py-2 text-white ${
          status === "on-track"
            ? "bg-[#244D3F]"
            : status === "almost due"
            ? "bg-amber-400"
            : status === "overdue"
            ? "bg-red-500"
            : ""
        }`}
      >
        {status}
      </button>
    </div>
  );
};

export default FriendCard;
