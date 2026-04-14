import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import FriendState from "@/components/FriendState";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export const metadata = {
  title: "Home -kinKeeper",
};

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/friends.json").then((res) =>
    res.json()
  );
  return res;
};

export default function Home() {
  const friends = friendsPromise();
  return (
    <div>
      <Banner />
      <FriendState />
      <Suspense fallback={<Loading />}>
        <Friends friends={friends} />
      </Suspense>
    </div>
  );
}
