import ContactButton from "@/components/ContactButton";
import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import { CiVideoOn } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoArchiveOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { MdAddCall } from "react-icons/md";
export const metadata = {
  title: "FriendsDetails -kinKeeper",
};
const FriendsDetailsPage = async ({ params }) => {
  const { friendId } = await params;
  const res = await fetch("https://kinkeeper-bice.vercel.app/friends.json");
  const friends = await res.json();
  const friend = friends.find((f) => f.id === Number(friendId));
  const {
    name,
    picture,
    days_since_contact,
    tags,
    status,
    bio,
    email,
    goal,
    next_due_date,
  } = friend;
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 lg:px-20 my-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <div>
            <div className="flex flex-col justify-center items-center py-5 px-15 shadow bg-white rounded space-y-3">
              <div>
                <Image
                  src={picture}
                  width={70}
                  height={70}
                  alt={name}
                  className="w-[80px] h-[80px] rounded-full object-cover"
                ></Image>
              </div>
              <h2 className="font-bold text-2xl">{name}</h2>
              <button
                className={`text-xs capitalize rounded-full px-10 py-2 text-white ${
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
              <div className="flex gap-3 items-center">
                {tags.map((tag, index) => (
                  <span
                    className="uppercase text-xs bg-green-300/75 rounded-full px-4 py-1"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-500">{`"${bio}"`}</p>
              <p className="text-gray-500">Preferred email {email}</p>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center gap-3">
              <button className="btn btn-soft bg-white w-full">
                <IoIosNotificationsOutline size={20} />
                Snooze 2 weeks
              </button>
              <button className="btn btn-soft bg-white w-full">
                <IoArchiveOutline size={20} />
                Archive
              </button>
              <button className="btn btn-soft bg-white w-full">
                <AiTwotoneDelete className="text-red-500" size={20} />
                Delete
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mb-5">
              <div className="bg-white shadow flex flex-col justify-center items-center rounded  px-4 py-5">
                <h4 className="font-bold text-xl text-center">
                  {days_since_contact}
                </h4>
                <p className="text-gray-500 text-center">Days Since Contact</p>
              </div>
              <div className="bg-white shadow flex flex-col justify-center  rounded  px-4 py-5">
                <h4 className="font-bold text-xl text-center">{goal}</h4>
                <p className="text-gray-500 text-center">Goal (Days)</p>
              </div>
              <div className="bg-white shadow flex flex-col justify-center items-center rounded  px-4 py-5">
                <h4 className="font-bold text-xl text-center">
                  {next_due_date}
                </h4>
                <p className="text-gray-500 text-center">Next Due</p>
              </div>
            </div>
            <div className="bg-white shadow items-center rounded py-5 px-10 mb-5">
              <div className="flex justify-between items-center">
                <h2 className="font-bold">Relationship Goal</h2>
                <button className="btn btn-soft bg-white">Edit</button>
              </div>
              <p className="text-gray-500">
                Connect every{" "}
                <span className="font-bold text-black">{goal} days</span>
              </p>
            </div>
            <div className="bg-white shadow items-center rounded py-5 px-10 ">
              <h4 className="font-bold text-center lg:text-left">
                Quick Check in{" "}
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 mt-4">
                <ContactButton friend={friend} icon={<MdAddCall size={25} />}>
                  Phone
                </ContactButton>
                <ContactButton
                  friend={friend}
                  icon={<LuMessageSquareText size={25} />}
                >
                  Text
                </ContactButton>
                <ContactButton friend={friend} icon={<CiVideoOn size={25} />}>
                  Video
                </ContactButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendsDetailsPage;
