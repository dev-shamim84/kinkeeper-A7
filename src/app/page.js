import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import FriendState from "@/components/FriendState";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export const metadata = {
  title: "Homepage -kinKeeper",
};

// const friendsPromise = async () => {
//   const res = await fetch(
//     "https://kinkeeper-bice.vercel.app/friends.json"
//   ).then((res) => res.json());
//   return res;
// };

export default function Home() {
  return (
    <div>
      <Banner />
      <FriendState />
      <Suspense fallback={<Loading />}>
        <Friends />
      </Suspense>
    </div>
  );
}
