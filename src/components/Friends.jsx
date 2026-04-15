import { use } from "react";
import FriendCard from "./FriendCard";
const Friends = ({ friends }) => {
  const friendsData = use(friends);

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl my-5">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
          {friendsData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Friends;
